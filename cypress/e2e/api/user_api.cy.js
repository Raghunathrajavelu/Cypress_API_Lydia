/// <reference types="cypress" />

describe("Reqres API Testing - Register + Get User", () => {
  
  const baseUrl = "https://reqres.in/api";

  // Headers (no API key since reqres POST requires one)
  const headers = {
    "Content-Type": "application/json",cd C:\Users\DELL\cypress-api-test
code .

  };

  it("POST /register - Should attempt to register (expected 401 for fake API)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      body: { email: "test@example.com", password: "123456" },
      failOnStatusCode: false   // allow 401 but mark test as failed by assertion
    }).then((response) => {
      expect(response.status).to.eq(200);   // <-- This will fail normally
      cy.log("Response:", JSON.stringify(response.body));
    });
  });

  it("POST /register - Missing password should return 400 (API now returns 401)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers,
      body: { email: "test@example.com" },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(400);   // <-- This will fail normally
      cy.log("Response:", JSON.stringify(response.body));
    });
  });

  it("GET /users/:id - Should retrieve user details successfully (200)", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2`,
      headers
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.have.property("id", 2);
      cy.log("Response:", JSON.stringify(response.body));
    });
  });

});
