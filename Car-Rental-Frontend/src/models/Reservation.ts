import { Car } from "./Car";
import { User } from "./User";

export interface Reservation{
    id:number,
    start:string,
    end:string,
    user:User,
    car:Car,
    status:string,
    driver_license:string,
    personal_id:string
}