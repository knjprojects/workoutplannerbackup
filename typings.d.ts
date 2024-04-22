//same as firestore user data
//import {  DateTimeInputProp } from "next-sanity"
export type User = {
    //_id: string
    slug:string
    name: string
    image:string
    email:string
    //address: string
    //age: number
    type:string
}
//same as sanity item/dish data schema
export type Dish = {
    type:string
    price:number
    name: string
    slug:string
    image: string
    cat: string
    description:string

}
export type Category={
    name: string
    image:string
    slug:string
    description:string
}
export type Product={
    type:string
    price:number
    name: string
    slug:string
    image: string
    cat: string
    description:string
}
export type Post = {
   // _id: string
    title: string
    slug:string
    price:number
    type:string
    description:string
    image:string
    category:string
    //published:
    //cat:string
  }
  /*?: { removed because we are fetching .current within our code
      current: string
    }*/