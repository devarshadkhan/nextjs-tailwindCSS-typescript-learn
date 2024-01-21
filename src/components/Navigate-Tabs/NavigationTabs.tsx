"use client"
import { ICategoryData } from "@/utils/types";
import classNames from "classnames";
import { NextPage } from "next";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import React from "react";

interface IPropTypes {
  categories: ICategoryData[];
}
// :NextPage <IPropTypes> iska matlab jab ham props received karte hai
const NavigationTabs: NextPage<IPropTypes> = ({ categories }) => {
 const router  = usePathname()
//  console.log(router);
 

  return (
    <>
      <div className="nantabs my-4 flex items-center justify-between border-b-2 border-gray-100 ">
        <ul className="list-none flex gap-5">
          <li className={classNames(`${router === "/" ? "border-b-4 border-green-500 rounded-sm pb-5 text-green-500 font-semibold	":"rounded-sm pb-5 text-stone-500 font-semibold	"}`)}>
            <Link href={"/"} className="">
              Recent
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category.id} className={classNames(`${router === `/category/${category.attributes.slug}` ? "border-b-4 border-green-500 rounded-sm pb-5 text-green-500 font-semibold	capitalize	":"rounded-sm pb-5 text-stone-500 font-semibold	capitalize	"}`)}>
              {/* Assuming there is a 'Title' property in the ICategoryData interface */}
              <Link
                href={`/category/${category.attributes.slug}`}
                className=" "
              >
                {category.attributes.Title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default NavigationTabs;

// NavigationTabs.tsx

// import React from 'react';
// import { ICategoryData } from '@/utils/types';

// interface IPropTypes {
//   categories: ICategoryData[];
// }

// const NavigationTabs: React.FC<IPropTypes> = ({ categories }) => {
//   return (
//     <ul>
//       {categories.map((category) => (
//         <li key={category.id}>
//           {/* Assuming there is a 'Title' property in the ICategoryData interface */}
//           <a href="#">{category.attributes.Title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// };

// export default NavigationTabs;
