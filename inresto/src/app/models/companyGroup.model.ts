import { Company } from "./company.model";

export interface Banner {
    companyGroupName: String,
    groupEmail: String,
    groupPhone:String,
    groupLogoUrl:String,
    superAccount:Account,
    company:[Company],//Company can have many Restaurants(outlets)
}