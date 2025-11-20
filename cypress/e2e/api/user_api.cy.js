describe("Reqres API Testing - Register + Get User", () => {

  const baseUrl = "https://reqres.in/api";
  const apiKey = "reqres-free-v1";

  it("POST /register - Should create a user successfully (200)", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers: {
        "x-api-key": apiKey
      },
      body: {
        email: "eve.holt@reqres.in",
        password: "pistol"
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property("id");
      expect(response.body).to.have.property("token");
    });
  });

  it("POST /register - Should return 400 when password is missing", () => {
    cy.request({
      method: "POST",
      url: `${baseUrl}/register`,
      headers: {
        "x-api-key": apiKey
      },
      failOnStatusCode: false,
      body: {
        email: "eve.holt@reqres.in"
      }
    }).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("Missing password");
    });
  });

  it("GET /users/2 - Should retrieve user successfully (200)", () => {
    cy.request({
      method: "GET",
      url: `${baseUrl}/users/2`,
      headers: {
        "x-api-key": apiKey
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.id).to.eq(2);
    });
  });

});
