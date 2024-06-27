'use client';

import { headerLinks } from '@/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname();

  return (
    <div className="bg-stone-50/50 w-full ">
      <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
        {headerLinks.map((link) => {
          const isActive = pathname === link.route;

          return (
            <li 
              key={link.route}
              className={`${isActive && 'text-black bg-purple-100 rounded-full p-2'
                } cursor-pointer duration-300 hover:text-stone-950 hover:bg-primary/50 rounded-full hover:p-2 flex-center text-[.8rem] whitespace-normal`}>
              <Link href={link.route}>{link.label}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavItems