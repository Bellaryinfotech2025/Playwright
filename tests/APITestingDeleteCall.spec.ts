import { test, expect } from '@playwright/test';

test('Delete Call For API Test', async ({ request }) => {
    // Add authentication headers if required
    const headers = {
        'Authorization': 'Basic YWRtaW46cGFzc3dvcmQxMjM=', // Update with your auth token
        'Content-Type': 'application/json'
    };

    const respDelete = await request.delete("/booking/1", {
        headers: headers
    });
    
    const status = respDelete.status();
    // Check for either 200 (OK) or 204 (No Content)
    expect(status === 200 || status === 204).toBeTruthy();
    
    // If you expect a response body (only for status 200)
    if (status === 200) {
        const respDelText = await respDelete.text();
        console.log(respDelText);
    }
});