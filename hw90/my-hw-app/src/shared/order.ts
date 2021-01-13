import { Item } from "./item";
import { Person } from "./person";


export interface Order{
    name:Person;
    date:String;
    item:Item;
}