/// <reference types="cypress" />

describe("Reqres API Testing - Register + Get User", () => {

  const baseUrl = "https://reqres.in/api";

  // Add your API key here
  const API_KEY = "YOUR_API_KEY_HERE";

  const headers = {
    "Content-Type": "application/json",
    "x-api-key": API_KEY
  };

  
  it("POST /register - Should create a user successfully (200)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      body: {
        email: "Raghu@lydia.com",
        password: "Lydia123"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
      cy.log("Response: " + JSON.stringify(response.body));
    });
  });

  
  it("POST /register - Should return 400 when password is missing", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      body: {
        email: "Raghu@lydia.com"
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body).to.have.property("error", "Missing password");
      cy.log("Response: " + JSON.stringify(response.body));
    });
  });

  
  it("GET /users/2 - Should retrieve user successfully (200)", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2`,
      headers
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
      cy.log("Response: " + JSON.stringify(response.body));
    });
  });

});
