import { PayloadAction } from "@reduxjs/toolkit"

export interface Users {
    action:PayloadAction<string>
    state: object
}

export interface Clothes {
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string,
    rating:{
        rate:number,
        count:number
    }
}
