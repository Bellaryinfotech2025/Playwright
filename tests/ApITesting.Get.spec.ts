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

 
