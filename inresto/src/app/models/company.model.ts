import { Restaurant } from "./restaurant.model";

export interface Company {
    companyName: String,
    companyLogoUrl:String,
    restaurants : [Restaurant],   //Saving outlets
}