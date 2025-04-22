import {test, request, expect} from "@playwright/test";
import { json } from "stream/consumers";

let reqContext2
test.beforeAll("Before All the Test", async()=>{
     reqContext2 = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com"
    })
})

test("API Testing Get Practice 1",async({request})=>{

   const resp1 = await request.get("https://restful-booker.herokuapp.com/booking");
   console.log(await resp1.json());

})


test("API Testing Get Practice 2",async()=>{
    const reqContext = await request.newContext({
        baseURL:"https://restful-booker.herokuapp.com",
        extraHTTPHeaders:{
            Accept:"application/json"
        }
    });
   const resp1 = await reqContext.get("/booking");
   console.log(await resp1.json());

})

test("API Testing Get Practice 3",async()=>{

    const resp1 = await reqContext2.get("/booking");
    console.log(await resp1.json());
 
 })

 test("API Testing Get Practice 4", async({request})=>{
    const resp1 = await request.get("/booking/2443");
    console.log(await resp1.json());
    expect(resp1.status()).toBe(200);
    expect(resp1.ok()).toBeTruthy();
    expect(await resp1.json()).toMatchObject({
        "firstname": "Josh",
        "lastname": "allen",
        "totalprice": 111,
        "depositpaid": true,
        "bookingdates": {
            "chickin": "2018-01-01",
            "checkout": "2019-01-01"
        },
        "additionalneeds": "super bowls"
    })
    const jsonresp= await resp1.json()
    expect(jsonresp.firstname).toEqual("xyz")
 })