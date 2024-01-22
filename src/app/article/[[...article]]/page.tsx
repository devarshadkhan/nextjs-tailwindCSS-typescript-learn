import React from 'react'
import qs from 'qs';
import { AxiosResponse } from 'axios';
import { IArticleData, ICollectionResponse } from '@/utils/types';
import { _fetchAPI } from '@/network-request/apiIntegrate';
interface IPropTypes {
    params:{
        article:string
    }
  }
const page = async({params}:IPropTypes) => {

    const options = {
        // populate: ['author.avatar',"image",], jab me avatar dalunga toh mujhe likhna padega yaha per yeh post kisne add ki hai uski photo or strapi ke populate me jo hota hai sab ham populate ki key banake usme value array me daal deta hame kiya kiya backend se
        populate: ["image",],
            sort: ['id:desc'],
            filters: {
              slug: { // isme jo maine slug diya hai woh mera woh key hai jo maine strapi ke object me likha hai
                  $eq: params.article
                  // $eq isse ham equal check kar rahe hai apne slug se match karke jisse equal ho.
              },
          },
      }
    
      // const qus = JSON.parse(options)
      const qus = qs.stringify(options)
    console.log(qus);
    const {
        data: fetchArticles,
      }: AxiosResponse<ICollectionResponse<IArticleData[]>> = await _fetchAPI(
       `articles?${qus}`
      );

      console.log(fetchArticles.data);
      
  return (
    <>
    <h1>{qus}</h1>
    <br />
    <br />
    {/* <h1>{params.article}</h1> */}

    {
        fetchArticles.data.map((ele)=>{
            return(
                <>
                <p>{ele.attributes.Title}</p>
                <p>{ele.attributes.description}</p>
                <p>{ele.attributes.slug}</p>
                </>
            )
        })
    }
    </>
  )
}

export default page