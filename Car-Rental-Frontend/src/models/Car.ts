import { User } from "./User"

export interface Car{
    id:number,
    license_plate:string,
    price:number,
    user:User,
    image_name:string
}