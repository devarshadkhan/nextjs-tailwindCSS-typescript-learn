import Navbar from "@/components/Header/Navbar";
import { _apicategory, _fetchAPI } from "@/network-request/apiIntegrate";
import {  IArticleData, ICategoryData, ICollectionResponse } from "@/utils/types";
import { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";



export default async function Home() {
  // const fetchData: CategoryData[] = await _apicategory();
  // const  fetchData: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _apicategory();
  const  fetchData: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _fetchAPI("categories");
  const  fetchDataPost: AxiosResponse<ICollectionResponse<IArticleData[]>> = await _fetchAPI("articles");
  console.log("DATA",fetchDataPost);



  // console.log(fetchData);

  return (
    <>
      {/* <Navbar /> */}

      {/* <div className='h-3/5 w-3/5 py-4 xl:bg-purple-700 lg:bg-black  md:bg-red-800 sm:w-100 bg-orange-600 '>
        
    </div> */}

      <div className="wrp py-6">
        <div>
          <ul>
            <ul className="flex gap-4">
            {fetchData?.map((item: ICategoryData) => {
              return (
                <div key={item.id}>
                 <li>
                    <Link href="">{item.attributes.Title || "NO DATA"}</Link>
                  </li>
                </div>
              );
            })}
            {fetchDataPost?.map((item: IArticleData) => {
              return (
                <div key={item.id}>
               <p>{item.attributes.description}</p>
                </div>
              );
            })}
            </ul>
          </ul>
        </div>
      </div>
    </>
  );
}
