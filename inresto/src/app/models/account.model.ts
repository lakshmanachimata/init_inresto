import {Restaurant} from './restaurant.model'

export interface Account {
    username: String,
    time: Date,
    restaurants:  [Restaurant],
    activeRestoName: String,
    //the active activeRestaurant should store the currently active restaurant
    activeRestaurant : Restaurant,
    //waiters : [ {type : mongoose.Schema.ObjectId, ref : 'waiter'} ],
    webaccess: Number,
    tabaccess : Number, //1st bit - R, 2nd - W, 3rd - T, 4th -H, 5th - HD/TA
    perm : Number, //1-owner, 2-admin, 3-manager, 4-gre, 11-frontdesk, 12-waiter
    restos :  [Restaurant], //accessible from master dashboard
    oorestos :  {type: [String] }, //accessible from master dashboard
    dlperm : { type: Number, default: 1}, //enable excel(data) download : 0-Disable; 1-Enable
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    smsCampaignCredits : {type: Number, default :  500},
    status : { type: Number, default: 1}, //1-Active Account; 0-Inactive Account
    version : Number,
    appLoginDate : Date,
	accountType : {type : Number,default : 0} , // 0 - default restaurant account; 1 - centralized menu admin account; 2-CRM master login
}