import BlogCard from "@/components/BlogCard/BlogCard";
import Navbar from "@/components/Header/Navbar";
import NavigationTabs from "@/components/Navigate-Tabs/NavigationTabs";
import { _apicategory, _fetchAPI } from "@/network-request/apiIntegrate";
import {
  IArticleData,
  ICategoryData,
  ICollectionResponse,
} from "@/utils/types";
import { AxiosResponse } from "axios";
import Image from "next/image";
import Link from "next/link";




export default async function Home() {
  // const fetchData: CategoryData[] = await _apicategory();
  // const  fetchData: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _apicategory();
  const {
    data: fetchDataCategories,
  }: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _fetchAPI(
    "categories"
  );
  const {
    data: fetchArticles,
  }: AxiosResponse<ICollectionResponse<IArticleData[]>> = await _fetchAPI(
    // "articles"
    "articles?populate=*"
  );
  // console.log("DATA for fetchArticles", fetchArticles.data);

  // console.log(fetchData);

  return (
    <>
      <div className="wrp py-6">
        <NavigationTabs categories={fetchDataCategories.data} />
      </div>
      <div className="wrp_blog flex gap-5 flex-wrap ">
        {fetchArticles.data.map((article) => {
          return (
            <>
              {/* <div className="bg-slate-400 p-9 w-1/2 rounded-md"> */}
                  <BlogCard article={article} />
              {/* </div> */}
            </>
          );
        })}
        {/* <div className="bg-slate-400 p-9 w-1/2 rounded-md">
          <h1></h1>
        </div> */}
      </div>
    </>
  );
}
