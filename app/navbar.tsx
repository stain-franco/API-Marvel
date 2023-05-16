
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'




const NavBar = () => {
  return (
    <header className="flex  items-center justify-between p-11  w-full bg-light ">
        <div className='flex items-center '>
        
        <Image
              src="/LOGO MARVEL.png"
              alt="Picture of the author"
              className=" pr-[40px]"
              width={250}
              height={40}
            />
        <nav className=' justify-center text-[16px] font-medium sm:block hidden  '>
        <Link href="/" title="Home" className='mr-4 text-white hover:text-dorado3'>Home</Link>
        <Link href="/personajes" title="personajes" className='mx-4 w-[114px] h-[116px] text-white hover:text-dorado3 ' >Personajes</Link>
      </nav>
        </div>
        <div className=''>
            <button className=' '>
            <Image
              src="/Notificacion.png"
              alt="Picture of the author"
              className="mr-[29.34px]"
              width={16.82}
              height={16.82}
            />
            </button>
            <button className=' relative'>
            <Image
              src="/Vector.png"
              alt="Picture of the author"
              className="pl-[1px] "
              width={20}
              height={20}
            />
            <p className='rounded-md absolute ml-[1px] mt-[-83px] text-[70px] '>.</p>
            </button>
        </div>
    </header>
  );
}

export default NavBar