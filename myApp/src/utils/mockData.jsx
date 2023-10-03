//create functional component bcz restaurent cart has multiple data
import React from "react";
const resLists = [
    {
      "info": {
        "id": "697510",
        "name": "Bob's Bar",
        "cloudinaryImageId": "7b41e35c2440e41c0bae75bdc3094cc7",
        "locality": "Sarakki Industrial Layout",
        "areaName": "JP Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "South Indian",
          "Biryani",
          "Desserts",
          "Bakery"
        ],
        "avgRating": 4.2,
        "feeDetails": {
          "restaurantId": "697510",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "10956",
        "avgRatingString": "4.2",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 28,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "28 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/bobs-bar-sarakki-industrial-layout-jp-nagar-bangalore-697510",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "685759",
        "name": "The Rameshwaram Cafe",
        "cloudinaryImageId": "c9b36413c755d072ec34619ee585bef4",
        "locality": "JP Nagar",
        "areaName": "J P Nagar",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.5,
        "feeDetails": {
          "restaurantId": "685759",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "384316",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 32,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "32 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-rameshwaram-cafe-jp-nagar-j-p-nagar-bangalore-685759",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "38953",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "lnexbppar5hnpl8xzwwu",
        "locality": "1st Stage",
        "areaName": "Uttarahalli",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "38953",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "2456",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 03:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL"
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-1st-stage-uttarahalli-bangalore-38953",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "69896",
        "name": "Nandhana Palace",
        "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
        "locality": "Yelachenahalli",
        "areaName": "Kanakapura Road",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Andhra",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "69896",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "2120",
        "avgRatingString": "4.1",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 01:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/nandhana-palace-yelachenahalli-kanakapura-road-bangalore-69896",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "33009",
        "name": "Mani's Dum Biryani",
        "cloudinaryImageId": "ysn5vvturdbiibsvpcck",
        "areaName": "JP Nagar",
        "costForTwo": "₹599 for two",
        "cuisines": [
          "South Indian"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "33009",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "623",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 26,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "26 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:45:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/manis-dum-biryani-jp-nagar-bangalore-33009",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "9600",
        "name": "Corner House Ice Cream",
        "cloudinaryImageId": "wnufffr1uexazyy8wkgw",
        "locality": "2nd Stage",
        "areaName": "Banashankari",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.6,
        "feeDetails": {
          "restaurantId": "9600",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "65254",
        "avgRatingString": "4.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:15:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/corner-house-ice-cream-2nd-stage-banashankari-bangalore-9600",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "48080",
        "name": "Kanti Sweets",
        "cloudinaryImageId": "yswzxvt5bhlphr1lmup5",
        "locality": "4th Phase",
        "areaName": "J P Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "Sweets"
        ],
        "avgRating": 4.6,
        "veg": true,
        "feeDetails": {
          "restaurantId": "48080",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "4700",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 2.8,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "2.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 22:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kanti-sweets-4th-phase-j-p-nagar-bangalore-48080",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "204124",
        "name": "The Biryani Life",
        "cloudinaryImageId": "ftdihjttrcsway8vdq98",
        "locality": "Bendre Nagar",
        "areaName": "Uttarahalli Hobli",
        "costForTwo": "₹500 for two",
        "cuisines": [
          "Biryani",
          "Mughlai",
          "Lucknowi",
          "Hyderabadi",
          "Kebabs",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "204124",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "8496",
        "avgRatingString": "3.9",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:30:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/the-biryani-life-bendre-nagar-uttarahalli-hobli-bangalore-204124",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "352788",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "bkyai4ox7z5al6awlurj",
        "locality": "2nd Stage",
        "areaName": "Banashankari",
        "costForTwo": "₹120 for two",
        "cuisines": [
          "Ice Cream",
          "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "352788",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "12175",
        "avgRatingString": "4.8",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:59:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/grameen-kulfi-2nd-stage-banashankari-bangalore-352788",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "598607",
        "name": "Soul Rasa",
        "cloudinaryImageId": "win6uczwtszg007suegg",
        "locality": "3rd Phase",
        "areaName": "JP Nagar",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Indian",
          "Healthy Food",
          "Home Food",
          "South Indian",
          "North Indian"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "598607",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3700
        },
        "parentId": "239281",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 34,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "34 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:30:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "brand",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/soul-rasa-3rd-phase-jp-nagar-bangalore-598607",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "64131",
        "name": "Truffles",
        "cloudinaryImageId": "cd832b6167eb9f88aeb1ccdebf38d942",
        "locality": "1st Phase",
        "areaName": "JP Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "American",
          "Continental",
          "Desserts",
          "Italian",
          "Beverages"
        ],
        "avgRating": 4.4,
        "feeDetails": {
          "restaurantId": "64131",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "218065",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 22,
          "lastMileTravel": 1.2,
          "serviceability": "SERVICEABLE",
          "slaString": "22 mins",
          "lastMileTravelString": "1.2 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 00:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/truffles-1st-phase-jp-nagar-bangalore-64131",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "29312",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "JP Nagar",
        "areaName": "JP Nagar",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "29312",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "721",
        "avgRatingString": "3.6",
        "totalRatingsString": "10K+",
        "sla": {
          "deliveryTime": 38,
          "lastMileTravel": 2.4,
          "serviceability": "SERVICEABLE",
          "slaString": "38 mins",
          "lastMileTravelString": "2.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 03:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-jp-nagar-bangalore-29312",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "588705",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "w6roonblq3fa5wrtlgys",
        "locality": "5TH Phase",
        "areaName": "JP Nagar",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Italian",
          "Desserts",
          "Beverages"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "588705",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "4961",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 33,
          "lastMileTravel": 2.6,
          "serviceability": "SERVICEABLE",
          "slaString": "33 mins",
          "lastMileTravelString": "2.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-13 00:00:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹100 OFF",
          "subHeader": "ABOVE ₹199",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-5th-phase-jp-nagar-bangalore-588705",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "350945",
        "name": "Rotti Mane Uttara Karnataka Store",
        "cloudinaryImageId": "ertcwgkfljevdl7s7zvh",
        "locality": "6th Phase",
        "areaName": "Jp Nagar",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "350945",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 2700
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 2700
        },
        "parentId": "171706",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 1.4,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "1.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 22:15:00",
          "opened": true
        },
        "badges": {
          "textExtendedBadges": [
            {
              "iconId": "guiltfree/GF_Logo_android_3x",
              "shortDescription": "options available",
              "fontColor": "#7E808C"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "",
                    "fontColor": "#7E808C",
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available"
                  }
                }
              ]
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹700",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/rotti-mane-uttara-karnataka-store-6th-phase-jp-nagar-bangalore-350945",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
      "info": {
        "id": "401276",
        "name": "Inchara Hotel And Fine Dining Restaurant",
        "cloudinaryImageId": "kxzsarzfw5j6szlboxf4",
        "locality": "Puttenahalli Main Road",
        "areaName": "JP Nagar",
        "costForTwo": "₹600 for two",
        "cuisines": [
          "Indian",
          "Chinese",
          "Tandoor"
        ],
        "avgRating": 4.3,
        "feeDetails": {
          "restaurantId": "401276",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3200
        },
        "parentId": "247670",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 1.3,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "1.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-08-12 23:33:00",
          "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {},
            "textBased": {},
            "textExtendedBadges": {}
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "ABOVE ₹1100",
          "discountTag": "FLAT DEAL",
          "discountCalloutInfo": {
            "message": "Free Delivery",
            "logoCtx": {
              "logo": "v1655895371/free_delivery_logo_hqipbo.png"
            }
          }
        },
        "orderabilityCommunication": {
          "title": {},
          "subTitle": {},
          "message": {},
          "customIcon": {}
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {},
            "video": {}
          }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
      },
      "analytics": {
        "context": "seo-data-cd333413-6495-4937-a568-15126fdd15e6"
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/inchara-hotel-and-fine-dining-restaurant-puttenahalli-main-road-jp-nagar-bangalore-401276",
        "text": "RESTAURANT_MENU",
        "type": "WEBLINK"
      },
      "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
  ];

  export default resLists;