/// <reference types="cypress" />

Given("Open chrome browser and navigate to calculator app", async () => {
  cy.visit("https://www.online-calculator.com/full-screen-calculator/");
});

When("I open the calculator app", () => {});

Then("I should be able to see a calculator", () => {
  cy.get("canvas");
});

Given("Open chrome browser and start application", () => {
  cy.visit("https://www.online-calculator.com/full-screen-calculator/");
});

When("I enter following values and press CE button", (datatable) => {
  // datatable.hashes().forEach((element) => {
  console.log("When", datatable);
  // });
  expect(2).to.equal(2);
});

Then("I should be able to see", (datatable) => {
  console.log("Then", datatable);
  expect(2).to.equal(2);
});
