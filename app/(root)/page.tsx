import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-fixed bg-center bg-cover bg-no-repeat" style={{backgroundImage:"url('/assets/images/website-bg.png')"}}>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="mega-heading-1 bg-clip-text text-transparent bg-gradient-to-r from-medium-purple via-serious-middle to-medium-orange h1-bold">Find Islamic events, classes, courses & more.</h1>
            <p className="p-regular-20 md:p-regular-24">Discover a collection of verified Islamic organisations hosting events, lessons and more.</p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>

          <Image 
          src="/assets/images/calendar-clock.png"
          alt="hero"
          width={1000}
          height={1000}
          className="max-h-[70vh] object-contain object-center 
          2xl:max-h-[50vh]"
          />
        </div>
      </section>
      </div>

      
    </>
  );
}
