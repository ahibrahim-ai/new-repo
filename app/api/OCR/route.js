import { NextApiRequest, NextApiResponse } from 'next';
import vision from '@google-cloud/vision';
import { connectToDatabase } from '../../lib/mongodb';

const client = new vision.ImageAnnotatorClient({
  keyFilename: '../../../clientfile.json'
});

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method === 'POST') {
    const { imageUrl } = req.body;

    try {
      const [result] = await client.textDetection(imageUrl);
      const detections = result.textAnnotations;
      const detectedText = detections.map(text => text.description).join(' ');

      const { db } = await connectToDatabase();
      await db.collection('images').insertOne({ imageUrl, detectedText });

      res.status(200).json({ detectedText });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
