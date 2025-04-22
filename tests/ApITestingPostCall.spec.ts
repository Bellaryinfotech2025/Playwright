import { test } from "@playwright/test"

test("API Testing - Post Call 1", async({request})=>{

    const resp1 = await request.post("/booking",{
        data:{
           "firstname" : "Sohail",
    "lastname" : "Marusagari",
    "totalprice" : 111,
    "depositpaid" : true,
    "bookingdates" : {
        "checkin" : "2018-01-01",
        "checkout" : "2019-01-01"
    },
    "additionalneeds" : "Breakfast"
            
        }
    })

    const jsonResp1 = await resp1.json();
    console .log(jsonResp1);
   // expect(resp1.status()).toBe(200);
})