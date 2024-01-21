import NavigationTabs from '@/components/Navigate-Tabs/NavigationTabs';
import { _fetchAPI } from '@/network-request/apiIntegrate';
import { ICategoryData, ICollectionResponse } from '@/utils/types';
import { AxiosResponse } from 'axios';
import React from 'react'


interface IPropTypes {
  params:{
    slug:string
  }
}
const Category =async ({params}:IPropTypes) => {
  // console.log("PPPPPPPP",params.slug);
 
  const {data: fetchDataCategories}: AxiosResponse<ICollectionResponse<ICategoryData[]>> = await _fetchAPI("categories");
  
  return (
    <>

<div className="wrp py-6">
        <NavigationTabs categories={fetchDataCategories.data} />
      </div>
    <h1>{params.slug}</h1>
    </>
  )
}

export default Category