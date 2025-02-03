export interface IGetAllCategoriesResponse {
  id: string;
  name: string;
  detail: {
    picture: string;
    description: string;
  };
}
