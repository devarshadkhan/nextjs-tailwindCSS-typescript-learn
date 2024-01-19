// export interface CategoryData {
//     id: number;
//     attributes: {
//       Title: string;
//       // Add other attributes as needed
//     };
//   }

export interface ICategoryData {
  id: number;
  attributes: ICategoryAttributes;
}
export interface IArticleData {
  id: number;
  attributes: IArticleAttributes;
}

export interface ICategoryAttributes {
    Title: string;
}
export interface IArticleAttributes {
    description:string
}



export interface ICollectionResponse<T> {
  data: T;
}
