
"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import React from 'react'

const Navbar = () => {
        const param = usePathname()
        console.log(param);
        
  return (
    <>
    <nav className="flex pt-4 items-center justify-between ">
            <Link href={"/"}>
                <div className='flex gap-2 items-center'>
                    {/* <Image src={"/vercel.svg"} width={100}  height={100} alt='aa' /> */}
                    <img src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png" alt="" width={30} height={30} />
                    <span className='text-green-600 font-bold text-1xl'>coder&apos;s Blog</span>
                </div>
            </Link>

                <div className="listing">
                    <ul className='flex items-center gap-5'>
                        <li><Link href="/" className={`${param === "/" ? "text-lg font-semibold text-green-600":"text-lg font-normal"}`}>Home</Link></li>
                        <li><Link href="/about" className={`${param === "/about" ? "text-lg font-semibold text-green-600":"text-lg font-normal"}`}>About</Link></li>
                        <li><Link href="" className={`${param === "/blog" ? "text-lg font-semibold text-green-600":"text-lg font-normal"}`}>Blogs</Link></li>
                        <li><Link href="" className={`${param === "/contact" ? "text-lg font-semibold text-green-600":"text-lg font-normal"}`}>Contact us</Link></li>
                    </ul>
                </div>
                <div className="listing">
                    <ul className='flex items-center gap-5'>
                        <li><a href="" className='flex items-center py-2 px-4 rounded-lg bg-green-400 text-base font-semibold text-white '>Login</a></li>
                        <li><a href="" className='flex items-center py-2 px-4 rounded-lg bg-indigo-500 text-base font-semibold text-white '>Sign-up</a></li>
                    </ul>
                </div>
    
    </nav>
    </>
  )
}

export default Navbar