// "use client"
import { ICategoryData } from '@/utils/types';
import { NextPage } from 'next';
import Link from 'next/link';
import React from 'react'

interface IPropTypes {
    categories:ICategoryData[]
}
// :NextPage <IPropTypes> iska matlab jab ham props received karte hai
const NavigationTabs:NextPage <IPropTypes> = ({categories}) => {
    // console.log("xdcgfhbkml,.;",categories);
    
  return (
    <>
        {categories.map((category) => (
        <li key={category.id}>
          {/* Assuming there is a 'Title' property in the ICategoryData interface */}
          <Link href={`/category/${category.attributes.slug}`}>{category.attributes.Title}</Link>
        </li>
      ))}
    </>
  )
}

export default NavigationTabs





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
