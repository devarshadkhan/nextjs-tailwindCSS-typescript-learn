import BlogCard from '@/components/BlogCard/BlogCard';
import NavigationTabs from '@/components/Navigate-Tabs/NavigationTabs';
import { _fetchAPI } from '@/network-request/apiIntegrate';
import { IArticleData, ICategoryData, ICollectionResponse } from '@/utils/types';
import { AxiosResponse } from 'axios';
import React from 'react'
import qs from 'qs';
import { json } from 'stream/consumers';

interface IPropTypes {
  params:{
    slug:string
  }
}
const Category =async ({params}:IPropTypes) => {
  // console.log("PPPPPPPP",params.slug);
 
  const options = {
    // populate: ['author.avatar',"image",], jab me avatar dalunga toh mujhe likhna padega yaha per yeh post kisne add ki hai uski photo or strapi ke populate me jo hota hai sab ham populate ki key banake usme value array me daal deta hame kiya kiya backend se
    populate: ["image",],
        sort: ['id:desc'],
        filters: {
          category: {
              slug: params.slug
          },
      },
  }

  // const qus = JSON.parse(options)
  const qus = qs.stringify(options)
  console.log(qus);
  
  const {data: fetchDataCategories}: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _fetchAPI("categories");
  
  const {
    data: fetchArticles,
  }: AxiosResponse<ICollectionResponse<IArticleData[]>> = await _fetchAPI(
    // "articles"
    // "articles"
   `articles?${qus}`
  //  `articles?populate=*?${qus}`
  );

  // console.log("sssssssssssssssssss",fetchArticles.data);
  
  return (
    <>

<div className="wrp py-6">
  {/* {qus} */}
        <NavigationTabs categories={fetchDataCategories.data} />
        <div className="wrp_blog grid lg:grid-cols-2 grid-gap gap-16 mt-16 ">
        {fetchArticles.data.map((article) => {
          return (
            <>
                  <BlogCard article={article} />

            </>
          );
        })}
      </div>
      </div>
    {/* <h1>{params.slug}</h1> */}
    </>
  )
}

export default Category