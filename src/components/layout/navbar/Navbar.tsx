'use client'
import Logo from "@/components/ui/logo/Logo"
import { Menu } from "@mui/icons-material";
import Link from "next/link"
import { usePathname } from "next/navigation";
import { useState } from "react";

function Navbar() {
    const pathname = usePathname();
    const links = [
        {href:'/' , label:"Home"},
        {href:'/about' , label:"About"},
        {href:'/services' , label:"Services"},
        {href:'/doctors' , label:"Doctors"},
        {href:'/contact' , label:"Contact"},
    ];

    const [openedNavBar , setOpenedNavBar] = useState(false)

  return (
    <div className="shadow-light fixed top-0 h-18 w-full backdrop-blur-xl z-50 bg-neutral-50/80 " >
      <div className="container flex items-center justify-between py-4 ">
        <Logo />
        <div className={`${openedNavBar ? 'left-0' : '-left-full'} flex items-center gap-8 absolute top-18 w-full flex-col  py-10   bg-neutral-50 lg:bg-transparent lg:relative lg:top-0 lg:flex-row lg:w-auto lg:py-0 lg:left-0 transition-all duration-600 ease-in-out lg:transition-none  text-black `}>
          {links.map((link, indx) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link href={link.href} key={indx} className={` inter border-b-2 py-2   hover:text-(--primary-700) transition duration-300 ease-in-out font-normal  ${isActive ? 'border-(--primary-700) text-(--primary-700) font-semibold' : 'border-transparent'}`}>
                {link.label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <Link href={'/booking'} className="text-white inter bg-(--primary-500) px-6 py-2.5  rounded-xl text-body-md font-bold hover:shadow-lg cursor-pointer transition duration-200 active:scale-95 ">Book now </Link>
        <button onClick={() => setOpenedNavBar((prev) => !prev)} className="block cursor-pointer active:bg-(--neutral-200) hover:bg-(--neutral-100) rounded-full p-2 lg:hidden"><Menu/></button>
        </div>
      </div>
    </div>
  );
}

export default Navbar