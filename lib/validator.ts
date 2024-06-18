import { title } from "process"
import { z } from "zod"

export const eventFormSchema = z.object({
    title: z.string().min(5, 'Title must be at least 5 characters.').max(50, 'Title must not exceed 50 characters'),
    description: z.string().min(150, 'Description must be at least 150 characters.').max(2000, 'Description must not exceed 2000 characters'),
    location: z.string().min(5, 'Location must be at least 5 characters.').max(100, 'Location must not exceed 100 characters'),
    imageUrl: z.string(),
    startDateTime: z.date(),
    endDateTime: z.date(),
    categoryId: z.string(),
    price: z.string(),
    isFree: z.boolean(),
    url: z.string().url()

})