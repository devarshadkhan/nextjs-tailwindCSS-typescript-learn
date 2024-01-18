"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Footer = () => {
  const param = usePathname();
  return (
    <>
      <footer className=" pt-4  fixed bottom-0 w-full left-0 bg-white mb-2 ">
        <div className="container mx-auto flex  items-center gap-3">
          <Link href={"/"}>
            <div className="flex gap-2 items-center">
              {/* <Image src={"/vercel.svg"} width={100}  height={100} alt='aa' /> */}
              <img
                src="https://visionhospitalgoa.com/wp-content/uploads/2020/09/175-1757329_my-blog-logo-png-transparent-png.png"
                alt=""
                width={30}
                height={30}
              />
              
              <span className="text-black font-bold text-1xl font-Outfit">
                coder&apos;s Blog
              </span>
            </div>
          </Link>

          <div className="listing ">
            <p className="font-Rubik text-sm     font-light">
              @ 2023 Coder&apos;s Blog{" "}
            </p>
          </div>
          <div className="listing ml-auto">
            <ul className="flex items-center gap-2">
              <li>
                <a href="">
                  <svg
                    className="h-5 w-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    className="h-5 w-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="">
                  <svg
                    className="h-5 w-5 text-black"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />{" "}
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
