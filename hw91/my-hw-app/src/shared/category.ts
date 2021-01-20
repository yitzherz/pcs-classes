import { Item } from "./item";

export interface Category{
    categoryType:string;
    categoryItems?:Item[];
}