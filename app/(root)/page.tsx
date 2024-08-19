import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import { Button } from '@/components/ui/button';
import Image from 'next/image'
import Link from 'next/link'
import CategoryFilter from '@/components/shared/CategoryFilter';



export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })
  return (
    <>
  
    <div className='p-4 bg-white'>
    </div>
      <div className='bg-white'>
      <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Find Islamic Events, Courses and more...</h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>

          <Collection 
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </section>
        <div className="w-full wrapper grid grid-cols-1 gap-20 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="mega-heading-1 text-black h1-bold">Events Platform for all</h1>
            <p className="p-regular-20 text-black md:p-regular-24">Discover events, courses, seminars and more!</p>
            <Button size="lg" asChild className="button w-full hover:shadow-lg sm:w-fit">
              <Link href="#events">
                Explore Now
              </Link>
            </Button>
          </div>
                
          <Image 
          src="/assets/images/hero-3.png"
          alt="islamic events"
          object-fit="cover"
          width={500}
          height={500}
          className="imageContainer max-h-[70vh] object-fill object-center
          2xl:max-h-[50vh]"
          />

  
        </div>
        <div className='p-8 bg-custom'>
        </div>
        
{/* 
        <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
          <h2 className="h2-bold">Find Events Near You...</h2>

          <div className="flex w-full flex-col gap-5 md:flex-row">
            <Search />
            <CategoryFilter />
          </div>

          <Collection 
            data={events?.data}
            emptyTitle="No Events Found"
            emptyStateSubtext="Come back later"
            collectionType="All_Events"
            limit={6}
            page={page}
            totalPages={events?.totalPages}
          />
        </section> */}
      </div>
    </>
)}