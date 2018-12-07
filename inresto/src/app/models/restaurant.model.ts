export interface Restaurant {
    
    restaurantId: String,
    outletId: String,
    restaurantName: String,
    newMenu : {type: Boolean, default: false},
    franchise: String, //This needs to be changed to something like Franchise ID.
    posLogo: {
        app: {type: String, default: ""},
        invoice: {type: String, default: ""}
    },
    logoPath : String,
    oOlogo: {type: String, default: 'https://s3-ap-southeast-1.amazonaws.com/inresto/icons/oOInresto2.png'},
    coverPath : String,
    acntmngr : String,
    crmmngr : String,
    clstrmngr : String,
    prodexpert : String,
    area : {type: String, default: 'None'},
    avrgfootfall : { type: Number, default: 0 },
    nonusage : {type: String, default: 'None'},
    mailConfiguration: {
        email: {type: String, default: ''},
        verified: {type: Boolean, default: false},
        dkim: {type: Boolean, default: false},
        spf: {type: Boolean, default: false}
    },
    menuLanguages: [{
        key: String,
        rtl: {type: Boolean, default: false},
        name: String,
        locale: String,
        nativeLang: String,
        firstLetter: String
    }],
    RTL: {type: Boolean, default: false},
    contactInfo : {
        phoneNo: String,
        frontDeskPN: String,
        email: String,
        website: String        
    },
    address : {
        zipCode: String,
        country: String,
        state: String,
        city: String,
        area: String,
        street: String,
        building: String,
    	latitude: Number,//latitude of the restaurant
    	longitude: Number,//longitude of the restaurant
    },
	region:{
		//mainregion : [MainRegion],
		//subregion : [SubRegion]
	},
    owner : {
        name : String,
        phoneNo : String,
        email : String
    },
    ctg: { type: Number, default: 0 }, //0 -resto, 1-spa
    cuisine: String,
    costForTwo: Number,
    facilities : String,
    worktime: {
        monday_start : String,
        monday_end : String,
        monday_closed : String,
        tuesday_start : String,
        tuesday_end : String,
        tuesday_closed : String,
        wednesday_start : String,
        wednesday_end : String,
        wednesday_closed : String,
        thursday_start : String,
        thursday_end : String,
        thursday_closed : String,
        friday_start : String,
        friday_end : String,
        friday_closed : String,
        saturday_start : String,
        saturday_end : String,
        saturday_closed : String,             
        sunday_start : String,
        sunday_end : String,
        sunday_closed : String              
    },
    theme: {
        overallBackgroundColor : String,
        overallStringColor : String,
        navMenuStringColor : String,
        homeHeaderStringColor : String,
        homeSubHeaderStringColor : String,
        contactInfoHeaderStringColor: String,
        contactInfoValueStringColor: String
    },
    valet: {
        enbValet: {type : Number}, // Enable valet in reserve app
        drivers: {type : [String]},
        parkingLots: {type : [String]},
        parkingLotColors: {type : [String]}
    },
    fcmValetIds : {type: [String] },
    onlineOrderTheme: {
        backgroundColor: {type:String, default: "#d0021b"},
        textColor: {type:String, default: "#ffffff"},
        hoverColor: {type:String, default: "#c6021a"},
        restroListBGColor: {type:String, default: "#ff0323"},
        restroListBGHover: {type: String, default: "#f80000"},
        buttonColor: {type:String, default: "#e1001c"},
        bgImgUrl: {type: String},
        customizedText: {type: String, default: ""},
        customizedImageUrl: {type: String, default: "https://s3-ap-southeast-1.amazonaws.com/doext/oo-cutomized-logo-default.png"},
    },
    rsrvWidgetTheme: {
        hBgColor: {type: String, default: "#D0021B", uppercase: true},
        hTextColor: {type: String, default: "#FFFFFF", uppercase: true},
        btnBgColor: {type: String, default: "#74C120", uppercase: true},
        btnTextColor: {type: String, default: "#FFFFFF", uppercase: true},
        showBanner: {type: Boolean, default: true},
        logo: {type: String, default: ""},
        abtnthnk: {type: Boolean, default: false},
        abtnText: String,
        abtnActionUrl: String,
        font: {type: String, default: "https://fonts.googleapis.com/css?family=Open+Sans:400,300,600,700&subset=all"},
        bgImg: {type: String, default: "https://s3-ap-southeast-1.amazonaws.com/doext/rsrv-widget-bg.png"},
    },

    expedLocTheme: {type: Number, default: 1},
    menuLayoutTheme: {type: Number, default: 1},
    categoryLayoutTheme: {type: Number, default: 1},

    mdaCheckbox: {type: Boolean, default: false},
    dcCheckbox: {type: Boolean, default: false},
    billing : {
        vat : { type: Number, default: 0 },
        serviceTax :  { type: Number, default: 0 },
        serviceCharge :  { type: Number, default: 0 },
        deliveryCharge : { type: Number, default: 0 },
        deliveryChargeThreshold : { type: Number, default: 0 },
        mda : [{
            days: [Number],
            value: {type: Number, default: 0},
        }],
        mdaApplyOn: {type: Number, default: 0}, // 0 - subTotal, 1 - Total 
        packagingCharge : { type: Number, default: 0},
        extraTax: {
            name: String,
            value: { type: Number, default: 0 },
        }
    },
	// taxStructure :[{type : mongoose.Schema.ObjectId, ref : 'TaxStructure'}],
	// menuCategories : [MenuCategory],
    // menuTypes : [MenuType],
    // foodTypes : [FoodType],
    // beverageTypes1 : [BeverageType1],
    // beverageTypes2 : [BeverageType2],
    // menuCuisine : [MenuCuisine],
    menu: [],
    accounts: [Account],
    // userAccountsSubscribed: [{type : mongoose.Schema.ObjectId, ref : 'Useraccount'}],
    // coupons: [CouponItem],
    isBogoResto: {type: Boolean, default: false},
    homeWidget : {
        homeWidgetTitle: String,
        homeWidgetImagePath : String,
        homeWidgetDescription : String
    },
//     employees:  [Employee],
     location: {type: [Number], index: '2d'},
//     createdon: Date,
//     waitingList : [WaitingListItem],
//     reservationList : [WaitingListItem],
//     deliveryList : [WaitingListItem],
//     takeawayList : [WaitingListItem],
//     cateringList : [WaitingListItem],
//     promotions : [PromotionItem],
//   //  table : [Table],
// 	mergedTables : [MergedTable],
//     reminder : [Reminder],
//     sections : [Section],
    gcmRegIDs : {type: [String] },
    fcmiRQiOSRegIDs : {type: [String] },
    fcmAndroidIRQIds : {type: [String] },
    fcmAndroidPOSIds: [String],
    gcmIWRegIDs: {type: [String]},
    promoSmsNos : {type: [Number] }, //numbers to send sms
    rsrvalert: { // for online reservations
        enabled : { type: Number, default: 0 },
        smsNos : {type: [Number] }, //numbers to send sms
    },
	rsrvalertEmail: { // for online reservations and exotel
        enabled : { type: Number, default: 0 },
        email :{type : [String]}
    },
	 rsrvalertTab: { //for reservations from tablet
        enabled : { type: Number, default: 0 },
        smsNos : {type: [Number] }, //numbers to send sms
    },
	disablecaptcha : {type: Number, default : 0},
	grpcount :{type: Number, default : 0},
    feedbackurls: [String],
    urls: {
        menu : { type: String, default: "" },
        recos :  { type: String, default: "" },
        events :  { type: String, default: "" },
        offers : { type: String, default: "" },
        menuimg : { type: String, default: "" },
        recosimg :  { type: String, default: "" },
        eventsimg :  { type: String, default: "" },
        offersimg : { type: String, default: "" },        
        fb : { type: String, default: "" },
        twitter :  { type: String, default: "" },
        map :  { type: String, default: "" }        
    },
    quotedwait: { type: Number, default: 2 }, //0-None, 1-hostess entry, 2-Program based on filter category
    minwait: { type: Number, default: 0 },
    calltype: { type: Number, default: 2 }, //0-No calls, 1-native, 2-exotel
    exotelid: { type: String, default: "" },
    exoteltoken: { type: String, default: "" },
    exolines : {type: [String] }, //Exotel popup - To find which agent is getting call
    msgtype: { type: Number, default: 0 }, //0 -no msgs, 1-gupshup, 2-sinfini, 3-exotel, 4-twilio
    autoacceptzomato: { type: Number, default: 0 }, //0-disable,1-enable
    autoacceptswiggy: { type: Number, default: 0 },//0-disable,1-enable
    autoacceptfoodpanda: { type: Number, default: 0 }, //0-disable,1-enable
    zomatovoucher: { type: Number, default: 0 }, //0-disable,1-enable
    bprintorder: { type: Number, default: 0 }, //0-disable,1-enable
    Imgexpand: { type: Number, default: 0 }, //0-disable,1-enable
    Catitemshide: { type: Number, default: 0 }, //0-disable,1-enable
    zbigday: { type: Number, default: 0 }, //0-disable,1-enable
    torquswla: { type: Number, default: 0 }, //0-disable,1-enable
    torqusiteid: { type: String, default: "" }, //Torqus Site ID
    printtimevalue: { type: Number, default: 0 }, //0-disable
    twilioFromNo: { type: String, default: "" }, 
    rsrvmsgtype: { type: Number, default: 0 }, //0 -no msgs, 1-gupshup, 2-sinfini, 3-exotel, 4-twilio
    rsrvcancelsms: { type: Number, default: 0 }, //0 -disable; 1-enable rsrv cancel sms
    custNoSlotMsg: { type: String, default: "" }, //custom no slot message to customer
    custRsrvEditMsg: { type: String, default: "" }, //custom rsrv edit message to customer
    smsmask: { type: String, default: "" }, //sms sender-id
    rsrvemailtype: { type: Number, default: 0 },
    autoRsrvEmail: { type: Number, default: 0 },// enable auto reservation email 0-disable; 1-enable
    urltrimtype: { type: Number, default: 1 }, //0 -no trim, 1-google, 
    confirmmsg: { type: String, default: "" }, 
    enbGusAppWalk: { type: Number, default: 0 }, //enable direct walk-in for guest app
    enbGusAppWaitTime: { type: Number, default: 1 }, //enable waiting time display in guest app
    gusAppLndPgImg: { type: String, default: "" }, //enable waiting time display in guest app
    gusAppLndPgTxt: { type: String, default: "" }, //display custom text in guest app landing page
    enbCmtsScreen: { type: Number, default: 1 }, //display Comments screen in guest app
	dineoutpayment : {type: Number, default: 0},
	enbSmrtPay  : {type: Number, default: 0}, //0-disable,1-enable
    lylttype: { type: Number, default: 0 }, //0-none, 1-vcloud, 2-others, 3-EasyRewardz
    scode: { type: String, default: "" }, //Loyalty program's store ID
    easyRwds: { //Loyalty program's Configurations
    		devid : { type: String, default: "185c3c31-7378-495c-8387-588e6d718b43" },
    		appid : { type: String, default: "be1a9aed-cd24-47c2-ac4e-d903791e136b" },
	    	user  : { type: String, default: "lpaasgeneraluser" },
	    	pass  : { type: String, default: "lpaasgeneraluser123" },
	    	pcode : { type: String, default: "Lpaasgeneral" }, //Program code
	    	scode : { type: String, default: "" },//store ID
	    	turl  : { type: String, default: "http://lpaaswebapi.revalweb.com/api/GenerateSecurityToken" }, //Token url
	    	surl  : { type: String, default: "http://lpaaswebapi.revalweb.com/api/SearchMember" }, //Search url
	    	rurl  : { type: String, default: "http://lpaaswebapi.revalweb.com/api/RegisterEasyAccount" }, //Register url
	    	puser : { type: String, default: "" },
    	},
    pref: {
        smoking : { type: Number, default: 0 },
        lowmusic : { type: Number, default: 0 },
        family : { type: Number, default: 0 },
        grouptype : { type: Number, default: 0 },
        section : { type: Number, default: 0 } //sections dropdown in reservations
    },
    uiconf: {
        email : { type: Number, default: 0 },
        vip : { type: Number, default: 0 },
        dnc : { type: Number, default: 0 },
        dnd : { type: Number, default: 0 },
        prefs : { type: Number, default: 0 },
        tabs : { type: Number, default: 15 }, //1st bit - R, 2nd - W, 3rd - T, 4th -H
        confirmdetail: { type: Number, default: 1 }, //0 -no details in confirmation popup on guest app, 1-show details 
        billno : { type: Number, default: 0 }, //billno in delivery and takeaway
        addr : { type: Number, default: 0 }, //address in delivery
        gender : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
        salutation : { type: Number, default: 0 },  //0-disable;1-enable the field in RL/WL
        bday : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
        anniv : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
        veg : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
        hni : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
        nationality : { type: Number, default: 0 }, //0-disable;1-enable the field in RL/WL
    },
    leavequeue: {type: Number, default: 1},
    b2cappconf: {
        homebanners: {type: [String] }, //banners to be shown in home screen
        restos: {type: [String] }, //restos in group
        restonames: {type: [String] }, //resto names in group
        contactnos: {type: [String] }, //contact nums to call in group
        restaurantConf : [{ restos: {type: String }, //restos in group
                            holidays : [{type: Date}],
                            mgrnums : {type: [Number] },
                            geniemgrnums : {type: [Number] },
                            restonames: {type: String },
                            restocity: {type: String},
                            contactnos: {type: String },
                            location : {type: [Number] }, // lat long seperated by ,
                            fb: {type: String }, // fb link
                            ta: {type: String }, // trip advisor link 
                            tw: {type: String}, // twitter link
                            ins: {type: String}, // instagram link
                            payrsrv : { type: Number, default: 0 }, //0-disable;1-enable pay and reserve
                            payrsrvpax : { type: Number, default: -1 }, // -1 - Default pax limit 
                            bookingcapacity: {type: [String]},
                            locality : {type: String},
                            discountpayrsrv: { type: Number, default: -1 },
                            minrsrvpax : { type: Number, default: 0 },
							b2cTabs : {type : Number,default : 7}, //1st bit - reserve a table,2- buzz managr,
																	//3-submit feedback,4-menu,5-get directions,6-photos,7-reviews
                                                                    // 8-genie buzz manager
							b2cSocial : {type : Number,default : 0}, //1st bit - facebook, 2 - trip advisor, 3- twitter, 4 - instagram
                            timings: {type: [String]},
                            // menu version and timings are a map
                            // timings should be default across all days
                            // menuversion for each day is mapped to timing value
                            menuVersion: {
                                    Monday : [{type: String}],
                                    Tuesday : [{type: String}],
                                    Wednesday : [{type: String}],
                                    Thursday : [{type: String}],
                                    Friday : [{type: String}],
                                    Saturday: [{type: String}],
                                    Sunday : [{type: String}]
                                }
                        }]
    },
    b2cAppIosPemID: String,  // to recognize restaurant personalized ios application cert/key pems for push notifications
    b2cAppIosRegIDs: {type: [String] },
    b2cappgcmRegIDs: {type: [String] },
    //b2cWebRegIDs: {type: mongoose.Schema.ObjectId, ref: 'WebNotification'},
    iosDeviceFCM: [{device: String, fcm: String}],
    b2cappmgrnums : {type: [Number] }, //numbers to send sms service req/buzz waiter
    rsv_taken : { type: Number, default: 0 },
    gre : {type: [String] }, //reservation takers
    ordTakers : {type: [String] }, //Order takers
    cmpNames : {type: [String] }, //Company Names
    natVal : {type: [String] }, //Nationality Values
    waiter : {type: [String] }, // Feedback Takers
    fbLiteTags : {type: [String] }, // Feedback Lite Tags
    fbActTakers: {type: [String] }, // FB action Takers
    enbchef : { type: Number, default: 0 }, //0-disable, 1-enable
    chef : {type: [String] },
    room : {type: [String]},
    fbBill : { type: Number, default: 0 }, //to enable bill entry in feedback app (0-disabled; 1-enabled)
    reserveBill : { type: Number, default: 1 }, //to enable bill entry in reserve app (0-disabled; 1-enabled)
    repBill : { type: Number, default: 0 }, //to enable bill entry in daily restro email report (0-disabled; 1-enabled)
    repBdayAnniv: { type: Number, default: 0 }, //1 - disable birthday & anniversary in daily reports
    repRestoName: String, //Restaurant display name in daily report.
    FbLgoEnb: { type: Number, default: 0 }, //to enable restaurant specific logo in feedback app
    FbWtrMkImg: {type: String, default: "" }, // feedback watermark image
    FbTblSelImg: {type: String, default: "" }, // Feedback table selection screen BG image
    appWtrMkImg: {type: String, default: "" }, // inRestoQ app table selection 
    appLogo: {type: String, default: "https://s3-ap-southeast-1.amazonaws.com/inrestologo/InResto_red.png" },
    appactionbarColor: {type: String, default: "#8B0000" },
    appactionbartitleColor: {type: String, default: "#FFFFFF" },
    appbgColor: {type: String, default: "#F5F1DE" },
    apptextColor: {type: String, default: "#000000" },
    floorsections: {type: [String], default: ["Ground Floor", "Ground Floor - Smoking", "First Floor", "Stage", "Second Floor - Smoking", "Second Floor - No Smoking"] },
    guestsizectg: {type: 
    [{
        start: Number, //start guest size for this ctg
        end: Number, //end guest size for this ctg
        baseinc: Number, //base increment for this ctg
        inc: Number, //increment for this ctg
    }]
    , default: [{start: 1, end: 3, baseinc: 10, inc: 5},
                {start: 4, end: 5, baseinc: 10, inc: 5},
                {start: 6, end: 8, baseinc: 10, inc: 10},
                {start: 9, end: 999, baseinc: 20, inc: 20}
    ]},
    enbRedeem : { type: Number, default: 0 },
    feedback: { type: Number, default: 0 }, //0 -none, 1-tablet, 2-sms, 3-combination
    // feedbackq : {type: [FeedbackQ.FeedbackQSchema], default: [ {food: {key: "Food", value:0, wgt:33.33,
    //                                                             Temp: {key: "Temperature", value: 0, wgt: 25},
    //                                                             Size: {key: "Portion Size", value: 0, wgt: 25},
    //                                                             Fresh: {key: "Freshness", value: 0, wgt: 25},
    //                                                             Taste: {key: "Taste", value: 0, wgt: 25}}
    //                                                            },

    //                                                            {service: {key: "Service", value:0, wgt:33.33,
    //                                                             Speed: {key: "Speed of Service", value: 0, wgt: 25},
    //                                                             Atti: {key: "Attitude of Server", value: 0, wgt: 25},
    //                                                             know: {key: "Knowledge of Server", value: 0, wgt: 25},
    //                                                             Greet: {key: "Host(ess) Greeting", value: 0, wgt: 25}}
    //                                                            },

    //                                                            {dining: {key: "Dining Experience", value:0, wgt:33.33,
    //                                                             Theme: {key: "Theme", value: 0, wgt: 20},
    //                                                             Music: {key: "Music", value: 0, wgt: 20},
    //                                                             Menu: {key: "Menu Variety", value: 0, wgt: 20},
    //                                                             Clean: {key: "Cleanliness", value: 0, wgt: 20},
    //                                                             Amb: {key: "Ambience", value: 0, wgt: 20}}
    //                                                            },
    //                                                         ]},
	fbver : { type: Number, default: 0 }, //0 - static feedback; 1-dynamic feedback; 2-dynamic 10 rating
	fbsimple: { type: Number, default: 0 }, //0 - standard as per fbver ; 1 - simple (two smile options)
	enbAutoTyMsg: { type: Number, default: 0 }, //0 - disable ; 1 - enable
	
	// dynamicfeedbackq :  [DynamicFeedbackQ],
	// dynamicquestions :  [DynamicQuestions],
	
    feedbackknowoptions : {type: [String], default: ["Friends", "Zomato", "Facebook", "Others"] },
    feedbackvisit : {type: [String], default: []},
    fbexp : { type: Number, default: 2 },
    fboptqs : { type: Number, default: 0 }, //1st bit - mgrvisit, 2nd - lylt, 3rd - cater
    feedbackcrm: {
    	enbCmp : { type: Number, default: 0 }, //enables company name in feedback
    	enbDisclmer : { type: Number, default: 1 }, //enables disclaimer check box in feedback
    	disclmerTxt : { type: String, default: "I'd love to see this feedback published on dineout.co.in" }, //disclaimer content
    	enbAddTxt : { type: Number, default: 0 }, //enables Additional text in feedback
    	addTxt : { type: String, default: "" }, //Additional text content
    	nxtPgCmts : { type: Number, default: 0 }, //move comments box to next page
    	enbFbWalkins : { type: Number, default: 0 }, //to enable walk-ins from FB app (0-disabled; 1-enabled)
        enbCategoryRating : { type: Number, default: 0 }, //to enable category rating from FB app (0-disabled; 1-enabled)
        categoryThreshold : { type: Number, default: 0 }, //category threshold
        enbStaffRep : { type: Number, default: 1 }, //enables staff reports in feedback
        enbCtgRtgPhno : { type: Number, default: 0 }, //enables category rating for mandatory phone number
    },
    feedbackalert: {
        type : { type: Number, default: 0 }, //0-none, 1-Overall, 2-Single
        min : { type: Number, default: 2 },  //min value for sms trigger
        fbsmsNos : {type: [Number] }, //numbers to send sms
        fbemailIds : {type: [String] }, //email ids to send min fb alert
        fbAlertSub: { type: String, default: "Negative Feedback Alert" }, // fb alert subject
        fbtymsg: { type: String, default: "" }, // fb ty sms msg
        fbtyemailmsg: { type: String, default: "" }, // fb ty email msg
        fbtyemailsub: { type: String, default: "" }, // fb ty email subject
        fbtymin : { type: Number, default: 4 },  //min value for ty sms
        fbsrymsg: { type: String, default: "" }, // fb sry sms msg
        fbsryemailmsg: { type: String, default: "" }, // fb sry email msg
        fbsryemailsub: { type: String, default: "" }, // fb sry email subject
        fbsrymax : { type: Number, default: 3 },  //max value for sry sms
        emailfromname: { type: String, default: "" }, // fb ty & Sry email from name
    	cmtalrts : { type: Number, default: 0 }, //0-disable, 1-enable
    	cmtWrds : {type: [String] }, //words in feedback comment that should trigger email/sms
    },
    feedbackpush: {
        enablepush: { type: Number, default: 0 },
        minpush: { type: Number, default: 0 }, //min rating for integration
        channelspush: { type: Number, default: 0 }, //1st bit - dineout
    },
    customsms: {
        wladd: { type: String, default: "" },
        enbWlDineMsg: { type: Number, default: 0 },
        enbWkDineMsg: { type: Number, default: 0 },
        dineMsg: { type: String, default: "" },
        wlrdy: { type: String, default: "" },
    },
    feedbackrefer: { type: Number, default: 0 }, //0 -no reference screen, 1-Show reference screen
    referDisc: { type: Number, default: 0 },//0-Disable; 1-refer disc %; 2-refer,referral disc %; 3-refer disc Amt; 4-refer,referral disc Amt;  
    referDiscPer: { type: Number, default: 0 }, // Discount percentage for referrer     
    referDiscAmt: { type: Number, default: 0 }, // Discount Amount for referrer
    referExp: { type: Number, default: 0 }, // Discount expire in days
    referalrts: {type: [Number] }, // Alert about referral/referrer discount redemption to resto owner
    fbTyDisc: { type: Number, default: 0 }, //Enable First +ve FB discount PizzaExpress
    
    slotSelection: { type: Number, default: 0 }, //0-reservationTimeSlots; 1-onlinersrvts
    enbRsrvTable: { type: Number, default: 0 }, //0-Disable; 1-Enable
    //reservationTimeSlots : [TimeSlot],
	holidays : [{type: Date}],
	// onlinersrvts :{
	// 	Monday : [TimeSlot],
	// 	Tuesday : [TimeSlot],
	// 	Wednesday : [TimeSlot],
	// 	Thursday : [TimeSlot],
	// 	Friday : [TimeSlot],
	// 	Saturday: [TimeSlot],
	// 	Sunday : [TimeSlot],
	// },
	// blockedTimeSlots : [TimeSlot],
	// deliveryslots :{
	// 	Monday : [TimeSlot],
	// 	Tuesday : [TimeSlot],
	// 	Wednesday : [TimeSlot],
	// 	Thursday : [TimeSlot],
	// 	Friday : [TimeSlot],
	// 	Saturday: [TimeSlot],
	// 	Sunday : [TimeSlot],
	// },
	
	
	//deliverySettings : [{type : mongoose.Schema.ObjectId, ref : 'DeliverySetting'}],

	masterRestaurants : [{type:String}],
	
	//deliverygroup :  [DeliveryGroup],
    deliveryHardOff: {type: Boolean, default: false},
    zorderingOffline: {type: Boolean, default: false},
    zorderingTakeaway: {type: Boolean, default: true},
    swiggyOffline: {type: Boolean, default: false},
    VendOpts :  {type: [Number]}, //0-Own; 1-RoadRunnr; 2-ShadowFax
    rrAuthCode: { type: String, default: "" },
	delhiveryMId: { type: String, default: "" },
	delhiveryAuth : {type: String, default: ""},
    maxReservations: {type: Number, default: 100},
    upcomingRsrvTime : {type : Number, default : 0},
    previousRsrvTime : {type : Number, default : 0},
	//deviceSettings : [DeviceSettings],
    nativesmstxt: { type: String, default: "" },
    custrsrvmsg: { type: String, default: "" },
    custrsrvwaitmsg: { type: String, default: "" },
    custtymsg: { type: String, default: "" },
    custapolmsg: { type: String, default: "" },
    enbTyFbUrl: {type : Number, default : 0},
    
    fbCumResIds : {type: [String] }, //resid's for cumulative reports
    fbCumMail : { type: Number, default: 0 }, //0-Disabled; 1-enable
    fbRepDly : { type: Number, default: 0 }, //0-Disabled; 1-enable
    fbRepWly : { type: Number, default: 0 }, //0-Disabled; 1-enable
    fbRepMly : { type: Number, default: 0 }, //0-Disabled; 1-enable
    repPdfemail : {type: [String] }, //emailids to send PDF reports to
    rep : { type: Number, default: 0 }, //Send daily email reports
    repemail : {type: [String] }, //emailids to send reports to 
    reportCity: String,
    rsrvrem : { type: Number, default: 0 }, //Send rsrv reminder sms
    delCmtMan: { type: Number, default: 0 }, //0 - disabled or 1 - enable
    autotblassign : {type: Number, default: 0},

    countryInfo : {
        currencyHTML: {type: String, default: '&#8377;'},
        currencyApp: {type: String, default: '\u20B9'},
        roundOff: {type: Number, default: 2},
        currencyCode : {type: String, default: "INR"},
        timezone : {type: String, default: "Asia/Kolkata"},
        countrycode : {type: Number, default: 91},
        digits : {type: Number, default: 10}
    },

    enableccc: { type: Number, default: 0 }, //enable coupons in campaigns
    posIntg: {type: Number, default: 0},    /* 0-InActive, 1-Bill & Table Status, 2-Only Biill, 3-Only Table Status */
    posMenuFetch: {type: Number, default: 0}, // enable pos menu fetch from IRQ app; 0-Disable Fetch, 1-Allow Fetch
    posName: {type: String, default: ""}, 
    posip: {type: String, default: ""}, //IP with port for POS connection
    postype: { type: Number, default: 0 }, 
    //postype:  0-None, 1-idine, 2-BrainPower, 3-Dhyan, 4-Touche, 5-Prizm, 6-POSIST, 7-Sanguine, 8-CSAT, 9-Dineplan, 10-Torqus, 11-Shawman, 12-Rancelab, 13-Sparktech
    posistKey: {type: String, default: ""}, //Posist POS Customer Key
    idineInfSC: {type: String, default: ""}, //Idine POS INF short Code
    idineCashCd: {type: String, default: ""}, //Idine POS Cashier Code
    prizmDelCd: {type: String, default: ""}, //Prizm POS Delivery Code
    csatCompId: {type: String, default: ""}, //CSAT Company ID
    csatUId: {type: String, default: ""}, //CSAT unique ID
    csatVendor: {type: String, default: ""}, //CSAT VENDOR
    shmanResId: {type: String, default: ""}, //shawman Rest Id
    foodEngineResId: {type: String, default: ""}, //Foodengine Rest Id
    
    esttype: { type: Number, default: 0 }, //Establishment Type 0-Resto, 1-Hotel, 2-Clinic

	campaignsAuthNumber : {type: Number },
	campaignsAuthEmail : {type: String, default: ""},
	campMultiLan : {type: Number, default: 0},
	campTrans : {type: Number }, //run campaigns on transactional channel
	crmgroup :  {type: [String], default : []} ,//restaurantids to share crm
	smsCredits : {type: Number,default :  500}, //deprecated (moved to account model)
	
	//tempReservations : [TempReservation],
	autoCnfrmRsrvMode : {type : Number,default : 0}, //0 - pax mode , 1 - table mode

    // order specific
	delv_cost : Number,
    pack_cost : Number,

    expedition: {type: Number, default: 2}, // 0 - PickUp, 1- Delivery, 2- Both
    paymentSupport: {type: Number, default: 0}, // 0 - COD, 1- Online, 2- Both
    vndorOnb2bOrder: {type: Number, default: 1},

	paytm:{
		enabled : {type: Number, default: 0},
		MID : {type : String, default : null},
		key : {type : String,default : null},
		channelId : {type : String,default : null},
        channelIdApp : {type : String,default : null},
		industryTypeId : {type : String,default : null},
		website : {type : String,default : null},
        websiteApp : {type : String,default : null},
    },

    credimax : {
        enabled: {
            type: Number,
            default: 0
        },
        merchantID: {
            type: String,
            default: null
        },
    },

    paytabs: {
        enabled: {
            type: Number,
            default: 0
        },
        secretkey: {
            type: String,
            default: null
        },
        email: {
            type: String,
            default: null
        },
        siteurl:{
            type: String,
            default: null
        },
        returnurl: {
            type: String,
            default: null
        },
    },

	mobikwik:{
		enabled : {type: Number, default: 1},
		MID : {type : String, default : null},
		key : {type : String,default : null},
		merchantName : {type : String,default : null},
	},
	
	payU : {
        enabled: {
            type: Number,
            default: 0
        },
		key : {type : String,default : null},
		salt : {type : String,default : null},
	},
    
    dineoutSmartPay: {
        enabled: {type: Number, default: 0},
    },

    paypal: {
        enabled: {
            type: Number,
            default: 0
        },
        api: {
            mode: {type: String, default: "live"},
            client_id: {type: String},
            client_secret: {type: String},
        },
        experience_profile_id: {type: String},
    },

    ooOTPEnabled: {type: Boolean, default: true},
    localityEnabled: {type: Boolean, default: true},
    orderNow: {type: Number, default: 1}, // only comes into picture when orderfor later set
    orderForLater: {type: Number, default: 0}, // 0- Not Supported, 1- Supported 
    blanketTime: {type: Number, default: 30}, // 30 minutes minimum for Order Later

    orderCPsNames: {type: [String]}, // order Contact Persons' Name
    orderalert: { // for online ordering
        enabled : { type: Number, default: 0 },
        smsNos : {type: [Number] }, //numbers to send sms
    },
	orderalertEmail: { // for online ordering 
        enabled : { type: Number, default: 0 },
        email :{type : [String]}
    },
    orderPageUrl: String,
    hasTimeBasedMenu: {type: Boolean, default: false},
    orderRedirection: String,
    //homeDeliveryOrders: [ {type : mongoose.Schema.ObjectId, ref : 'Order'} ],
    // inRestaurantOrders: [ {type : mongoose.Schema.ObjectId, ref : 'Order'} ],
    escalationLimit: {type: Number, default: 5},
    cancelLimit: {type: Number, default: 20},
	
	replyTo : {type: [String]},
	emailFooter : String,
	restoMode : { type: Number, default: 1 },  // 0-All; 1-rsrvs; 2-onlineOrder; 3-DineinOrder; 10-others; 4-DO Outlets; 5-New OO; 7-New Rsrv; 8-Loyalty
    restChainName : { type: String, default: "" },  // Restaurant chain name for fb pdf jsReport
	rsrvWdgtEvents : {type: [String]},
	rsrvWdgtMode : {type:Number,default:0}, // 0 - widget , 1 - webpage
	rsrvWdgtFont:{type : [String],default : []},
	rsrvWdgetBgImg : {type : String,default: '../../../../../admin/assets/widgets/reservations/images/windmill_bg.png'},
    rsrvWdgtDisp : { type: Number, default: 0 },  // check - 1st bit
    												// bday - 2nd bit
                                                 // anniversary - 3rd bit
												  // childcount - 4th bit
												  // reservation takers - 5th bit
	rsrvWdgtBtnColor :{type : String},
	rsrvWdgtBtnFntColor :{type : String},
    rsrvWdgtTodayRsrv :  {type: Number, default: 1},
	
	autoCnfrmWdgt : {type : Number,default : 0},
	maxWdgtGrpCount :  {type : Number,default : -1},
	tableHoldingTime : {type : Number},
	wdgtToDineout : {type : Number,default : 0},
    enbDinDel : {type : Number,default : 0},
    enbDineRedPanel : {type : Number,default : 0},
    wdgtOtp : {type : Number,default : 0},
    wdgtRestoMode : {type : Number,default : 1}, //1-Restos from rsrv grp; 2-Restos from wdgtRestos; 3-Only Base outlet
    wdgtRestos : {type: [String]},
    
    //Online Order Central Payment
	vendorId: {type:String},
    GST_IN: {type: String},
    companyName: {type: String},
    TILCommision: {type: Number, default: 0}, // in %
    PGCommision: {type: Number, default: 0}, // in %
    hsn:{type:String,default: ""}, 
    loyaltyInfo : {
    	status : {type: Number, default: 0}, //0-Disable ; 1-Enable
    	lyType : Number, //1-Spend based; 2-Visit Based;
    	visitPoints : {type: Number, default: 0}, // points to customer for each visit
    	minAmt : {type: Number, default: 0}, // Minimum Amount to Spend to earn points
    	spendPoints : {type: Number, default: 0}, // points to customer on spending minAmt
    	redemRate : Number, //cost for each point while redeeming
    	minPoints : {type: Number, default: 0}, //minimum points required for redemption
    	expires : {type: Number, default: 0}, //validity of the points earned
    	redPhNoAlrts : {type: [String], default: []}, //redemption alert to owners thru Phno
    	redEmailAlrts : {type: [String], default: []}, //redemption alert to owners thru email
    	addMsg : {type: String, default: ""}, // message to customer after adding points
    	redempMsg : {type: String, default: ""}, // message to customer after points redemption
    	custMsg : {type: String, default: ""}, // message to customer about the points balance
    },

    ooloyaltyInfo: {
        status: {type: Boolean, default: false}, // false - disabled; true-enabled
        type: {type: Number, default: 1}, // 1 - Spend based, 2- Order based
        earnPoints: Number, // on Each Order for type 1 and on each 100 for type 2 
        minAmt: {type: Number, default: 0}, //min Order Amount to earn points
        expireTime: Number,
        maxRedeem: {mode: String, value: Number},// mode - percentage/number, if number it should be smaller than minAmt
        earnCond: {op: {type: Boolean, default: true}, cod: {type:Boolean, default:true}}, //
        redeemCond: {op: {type: Boolean, default: true}, cod: {type:Boolean, default:true}},
        couponClubbed: {type: Number, default: 0},
        partialRedeem: {
            type: Number,
            default: 0
        },

    },
    posLoyalty: {
        enabled:  {type: Boolean, default: false}, // false - disabled; true-enabled
        type: {type: Number, default: 1}, // 1 - Spend based, 2- Visit based, 3 - Punch Based, 4- card based
        minAmt: {type: Number, default: 0}, //min Order Amount to earn points   
        pointsAmt: Number, // number of points earned on every order / x amount spent (spendAmt)
        discountAmt : Number, // discountAmt earned from card based loyalty,
        discountPercent : Number, // discount % earned from card based loyalty
        spendAmt: Number, // Amount needed for X points (pointsAmt)
        expireTime: Number,
        earnType: Number, // 1 - Item, 2 - Category, 3 - Points
        // item: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Purchased for X Times,
        // category: [{type : mongoose.Schema.ObjectId}], // category Purchased X times
        // reward: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Reward for every X Punches
        // rewardCategory: [{type : mongoose.Schema.ObjectId}], // category Reward for every X Punches
        rate: Number, // X times item needs to be bought / X times customer visits 
        redemptionRate: Number, // 1 point = ?
        maxRedeem: {mode: {type: Number, default: 1}, value: Number},// mode - 1: percentage/ 2: number, if number it should be smaller than minAmt
        couponClubbed: {type: Boolean, default: true},
    },
    posLoyalties: [{
        type: {type: Number, default: 1}, // 1 - Spend based, 2- Visit based, 3 - Punch Based, 4- card based
        minAmt: {type: Number, default: 0}, //min Order Amount to earn points   
        pointsAmt: Number, // number of points earned on every order / x amount spent (spendAmt)
        discountAmt : Number, // discountAmt earned from card based loyalty,
        discountPercent : Number, // discount % earned from card based loyalty
        spendAmt: Number, // Amount needed for X points (pointsAmt)
        expireTime: Number,
        earnType: Number, // 1 - Item, 2 - Category, 3 - Points
        // item: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Purchased for X Times,
        // category: [{type : mongoose.Schema.ObjectId, ref : 'MenuCategory'}], // category Purchased X times
        // reward: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Reward for every X Punches
        // rewardCategory: [{type : mongoose.Schema.ObjectId, ref : 'MenuCategory'}], // category Reward for every X Punches
        rate: Number, // X times item needs to be bought / X times customer visits 
        redemptionRate: Number, // 1 point = ?
        maxRedeem: {mode: Number, value: Number},// mode - 1: percentage/ 2: number, if number it should be smaller than minAmt
        couponClubbed: {type: Boolean, default: true},
        visitRewards: [{
            every: {type: Boolean, default: false}, // reward user for every scenario or only on specific scenario
            counter: Number,
            points: Number,
            // item: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}],
            // category: [{type : mongoose.Schema.ObjectId, ref : 'MenuCategory'}]
        }],
        spendRewards: [{
            every: {type: Boolean, default: false},// reward user for every scenario or only on specific scenario
            amount: Number,
            points: Number,
            // item: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}],
            // category: [{type : mongoose.Schema.ObjectId, ref : 'MenuCategory'}]
        }],
        loyaltyCards: [{
            tierName: String,
            discountAmt : Number, // discountAmt earned from card based loyalty,
            discountPercent : Number, // discount % earned from card based loyalty
        }]
    }],
    //closePOSTime: {type: Date},
    posClose: {
        auto: {type: Boolean, default: false},
        time: {type: Date},
    },
    lastPOSCloseTime: {type: Date},
    lastShiftCloseTime: {type: Date},
    posShifts: {
        auto: {type: Boolean, default: false},
        shifts: [{
            name: String,
            from: Date,
            to: Date
        }]
    },
    tabletMode: Number,
    shiftOpen:  {type: Boolean, default: false},
    dineinLoyalty: {
        enabled:  {type: Boolean, default: false}, // false - disabled; true-enabled
        type: {type: Number, default: 1}, // 1 - Spend based, 2- Visit based, 3 - Punch Based
        minAmt: {type: Number, default: 0}, //min Order Amount to earn points   
        pointsAmt: Number, // number of points earned on every order / x amount spent (spendAmt)
        spendAmt: Number, // Amount needed for X points (pointsAmt)
        expireTime: Number,
        earnType: Number, // 1 - Item, 2 - Category, 3 - Points
        // item: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Purchased for X Times,
        // category: [{type : mongoose.Schema.ObjectId}], // category Purchased X times
        // reward: [{type : mongoose.Schema.ObjectId, ref : 'MenuItem'}], // Item Reward for every X Punches
        // rewardCategory: [{type : mongoose.Schema.ObjectId}], // category Reward for every X Punches
        rate: Number, // X times item needs to be bought / X times customer visits 
        redemptionRate: Number,
        maxRedeem: {mode: {type: Number, default: 1}, value: Number},// mode - 1: percentage/ 2: number, if number it should be smaller than minAmt
        couponClubbed: {type: Boolean, default: true},
    },

    menuInfo: {
        onlineOrdering: {type: String, default: "0"},
        dineIn: {type: String, default: "0"},
        zomato: {type: String, default: "1"},
        swiggy: {type: String, default: "0"},
        foodPanda: {type: String, default: "99"},
    },
	
	 vendorSettings: [{name: String, 
	 					menu: {type: String, default: "0"}, 
	 					// tax: {type: mongoose.Schema.ObjectId}, 
	 					// delivery: {type: mongoose.Schema.ObjectId},
						isDefault : {type : Number, default : 1} // one of the default vendaors - onlineOrder,foodpanda,swiggy,dineIn,zomato
						}
					],

    dineIn: {
        menu: [{
            name: {type: String, default: "Food Menu"},
            version: Number,
            image: String,
        }],
        showTaxes: {type: Boolean, default: true},
        showTotalAmt: {type: Boolean, default: true},
        geoLocation: {
            enabled: {type: Boolean, default: true},
            vicinityRadius: {type: Number, default: 100000000},
        },
        theme: {
            layoutTheme: {type: Number, default: 1},
            welcomeScreen: {type: Number,default: 0 },  // 0 - show welcome screen 1 - don't show welcome screen
            welcomeImage: {type: String, default: "https://s3-ap-southeast-1.amazonaws.com/doext/iro-default-show-image.jpg"},
        },
        dineInKey: String,
        paymentSupport:{
            type: Number,
            default: 0
        }, // 0 - cash, 1 - online , 2 - both
        payMode: {
            type: Number,
            default: 0
        }, // 0 - after finishing, 1 - while ordering, 2 - future use etc...
    },

    reviewVendors: [{companyName: String, id: String, status: Number}],
	fbMsgSchedule : {type : String},
    analytics: {
        rsrv: {
            fb: String,
            google: String,
            googleAd: String,
            googleAdConversion: String
        },
        order: {
            fb: String,
            google: String,
        }
    },
    hasZomatoIntg: {type: Boolean, default: false},
	ooSettings : { type: Number, default: 0 }, // 0 - default - single bill,delivery,menu settings , 1 - new one - diff bill,delivery,menu settings
	smsconfigplaceord : { type: Number, default: 1 }, //configurable setting for sending sms
	smsconfigconfirmord: { type: Number, default: 1 },//configurable setting for sending sms
	smsconfigdispatchord: { type: Number, default: 1 }, //configurable setting for sending sms
	custAppVisit : {type : Number,default : 1} // configurable setting for showing app visits in customer profiles

}