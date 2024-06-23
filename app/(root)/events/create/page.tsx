import EventForm from "../../../../components/shared/EventForm"
import { auth } from "@clerk/nextjs/server";

const CreateEvent = () => {
  const { sessionClaims } = auth();

  const userId = sessionClaims?.userId as string;

  console.log(userId)
  
  return (
    <>
      <section className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/assets/images/website-bg.png')"}}>
        <h3 className="wrapper h3-bold text-center">Create Event</h3>
        <div className="wrapper my-8">
          { <EventForm userId={userId} type="Create" /> }
        </div>
      </section>
    </>
  )
}

export default CreateEvent