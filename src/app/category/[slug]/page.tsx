import React from 'react'


interface IPropTypes {
  params:{
    slug:string
  }
}
const Category = ({params}:IPropTypes) => {
  console.log("PPPPPPPP",params.slug);
  
  return (
    <div>Category {params.slug}</div>
  )
}

export default Category