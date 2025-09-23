import { CategoryModel } from "./categoryModel";

export class ProductModel{
  id;
  name;
  description;
  price;
  imageUrl;
  categoryId;
  category:CategoryModel;
}
