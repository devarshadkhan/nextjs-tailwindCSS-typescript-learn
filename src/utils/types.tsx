// export interface CategoryData {
//     id: number;
//     attributes: {
//       Title: string;
// Add other attributes as needed
//     };
//   }

/**
 * API Response Collection for All Data Types
 */
export interface ICollectionResponse<T> {
  data: T;
}
/**
 * Category Types
 */
export interface ICategoryData {
  id: number;
  attributes: ICategoryAttributes;
}
export interface ICategoryAttributes {
  Title: string;
  slug: string;
}

/**
 * Article Types
 */
export interface IArticleData {
  id: number;
  attributes: IArticleAttributes;
}

export interface IArticleAttributes {
  description: string;
  Title: string;
  image: IImageData;
}

export interface IImageData {
  data: [
    {
      attributes: {
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null;
        provider: string;
        provider_metadata: null;
        createdAt: string;
        updatedAt: string;
        formats: {
          thumbnail: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
          small: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
          large: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
          medium: {
            name: string;
            hash: string;
            ext: string;
            mime: string;
            path: null;
            width: number;
            height: number;
            size: number;
            url: string;
          };
        };
      };
    }
  ];
}

export interface IAuthor {
  data: {
    attributes: {
      firstname: string;
      lastname: string;
      avatar: {
        data: {
          attributes: {
            formats: {
              thumbnail: {
                url: string;
              };
            };
          };
        };
      };
    };
  };
}
