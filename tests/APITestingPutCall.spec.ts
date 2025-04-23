import { expect, test } from "@playwright/test";

test("API Testing - Put Call 1", async ({ request }) => {

  const respPut = await request.put("https://restful-booker.herokuapp.com/booking/1", {
    headers: {
      'Authorization': "Basic YWRtaW46cGFzc3dvcmQxMjM=",
      'Content-Type': 'application/json'
    },
    data: {
      firstname: "Mr",
      lastname: "Infinite",
      totalprice: 999,
      depositpaid: true,
      bookingdates: {
        checkin: "2018-01-01",
        checkout: "2019-01-01"
      },
      additionalneeds: "Breakfast"
    }
  });

  console.log('Status:', respPut.status());

  if (respPut.headers()['content-type']?.includes('application/json')) {
    const jsonresp = await respPut.json();
    console.log(jsonresp);

    expect(respPut.status()).toBe(200);
    expect(respPut.statusText()).toBe("OK");
    expect(respPut.ok()).toBeTruthy();

    expect(jsonresp).toMatchObject({
      firstname: 'Mr',
      lastname: 'Infinite',
      totalprice: 999,
      depositpaid: true,
      bookingdates: { checkin: '2018-01-01', checkout: '2019-01-01' },
      additionalneeds: 'Breakfast'
    });
  } else {
    const errorText = await respPut.text();
    console.error("Non-JSON Response:", errorText);
  }
});
