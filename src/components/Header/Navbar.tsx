"use client";
import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React, { useState } from "react";

const Navbar = () => {
  const param = usePathname();
  const [show, setShow] = useState(false);
  return (
    <>
      <nav className="flex pt-4 items-center justify-between  ">
        <Link href={"/"}>
          <div className="flex gap-2 items-center">
            {/* <Image src={"/vercel.svg"} width={100}  height={100} alt='aa' /> */}
            <img
              src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png"
              alt=""
              width={30}
              height={30}
            />
            <span className="text-green-600 font-bold text-1xl font-Outfit">
              coder&apos;s Blog
            </span>
          </div>
        </Link>
        <div
          className="xl:hidden lg:hidden md:block sm:w-100 block "
          onClick={() => setShow(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
            />
          </svg>
        </div>

        <div className="listing xl:flex lg:flex md:hidden sm:w-100 hidden  ">
          <ul className="flex items-center gap-5">
            <li>
              <Link
                href="/"
                className={`${
                  param === "/"
                    ? "text-base	 font-semibold text-green-600 font-Outfit text-base	"
                    : "text-base	 font-normal font-Outfit"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={`${
                  param === "/about"
                    ? "text-base	 font-semibold text-green-600 font-Outfit text-base	"
                    : "text-base	 font-normal font-Outfit"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`${
                  param === "/blog"
                    ? "text-base	 font-semibold text-green-600 font-Outfit"
                    : "text-base	 font-normal font-Outfit"
                }`}
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                href=""
                className={`${
                  param === "/contact"
                    ? "text-base	 font-semibold text-green-600 font-Outfit"
                    : "text-base	 font-normal font-Outfit"
                }`}
              >
                Contact us
              </Link>
            </li>
          </ul>
        </div>
        <div className="listing xl:flex lg:flex md:hidden sm:w-100 hidden">
          <ul className="flex items-center gap-5">
            <li>
              <a
                href=""
                className="flex items-center py-2 px-4   text-sm font-semibold text-black hover:bg-green-400 hover:text-white hover:transition-all transition-all hover:rounded-lg "
              >
                Login
              </a>
            </li>
            <li>
              <a
                href=""
                className="flex items-center py-2 px-4 rounded-lg bg-green-400 text-sm font-semibold text-white "
              >
                Sign Up
              </a>
            </li>
            {/* <li><a href="" className='flex items-center py-2 px-4 rounded-lg bg-indigo-500 text-sm  font-semibold text-white '>Sign-up</a></li> */}
          </ul>
        </div>

        {/* use Mobile */}
        {show && (
          <>
            <div
              className="w-64 fixed z-10 h-screen top-0 right-0 bg-orange-600 overflow-x-hidden pt-16 pl-8 pr-8
            
            "
            >
              <div onClick={() => setShow(false)}>
                <div className="cross flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18 18 6M6 6l12 12"
                    />
                  </svg>
                </div>

                <div className="listing xl:hidden lg:hidden md:block sm:w-100 block  ">
                  <ul className="flex items-center flex-col gap-5">
                    <li>
                      <Link
                        href="/"
                        className={`${
                          param === "/"
                            ? "text-base	 font-semibold text-green-600 font-Outfit text-base	"
                            : "text-base	 font-normal font-Outfit"
                        }`}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/about"
                        className={`${
                          param === "/about"
                            ? "text-base	 font-semibold text-green-600 font-Outfit text-base	"
                            : "text-base	 font-normal font-Outfit"
                        }`}
                      >
                        About
                      </Link>
                    </li>
                    <li>
                      <Link
                        href=""
                        className={`${
                          param === "/blog"
                            ? "text-base	 font-semibold text-green-600 font-Outfit"
                            : "text-base	 font-normal font-Outfit"
                        }`}
                      >
                        Blogs
                      </Link>
                    </li>
                    {/* <li>
                      <Link
                        href=""
                        className={`${
                          param === "/blog"
                            ? "text-base	 font-semibold text-green-600 font-Outfit"
                            : "text-base	 font-normal font-Outfit"
                        }`}
                      >
                        Article


                      </Link>
                    </li> */}
                    <li>
                      <Link
                        href=""
                        className={`${
                          param === "/contact"
                            ? "text-base	 font-semibold text-green-600 font-Outfit"
                            : "text-base	 font-normal font-Outfit"
                        }`}
                      >
                        Contact us
                      </Link>
                    </li>
                  </ul>
                </div>
                
              </div>
              {false 
              && <><div className="xl:hidden lg:hidden md:block sm:w-100 block">
              <ul className="flex items-center justify-center gap-5">
                <li>
                  <a
                    href=""
                    className="flex items-center py-2 px-4   text-sm font-semibold text-black hover:bg-green-400 hover:text-white hover:transition-all transition-all hover:rounded-lg "
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href=""
                    className="flex items-center py-2 px-4 rounded-lg bg-green-400 text-sm font-semibold text-white "
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div></>}
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
