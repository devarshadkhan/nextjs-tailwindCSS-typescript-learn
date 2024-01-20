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
const {data: fetchDataCategories}: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _fetchAPI("categories");
  // const  fetchDataPost: AxiosResponse<ICollectionResponse<IArticleData[]>> = await _fetchAPI("articles");
  console.log("DATA for category", fetchDataCategories);

  // console.log(fetchData);

  return (
    <>
      

      <div className="wrp py-6">
        <NavigationTabs categories={fetchDataCategories.data} />
      </div>
    </>
  );
}
