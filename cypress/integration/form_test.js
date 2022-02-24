describe("User Onboarding App", () => {
  beforeEach(() => {
    cy.visit("https://localhost:3000");
  });
});

const nameInput = () => cy.get("input[name=name]");
const emailInput = () => cy.get("input[name=email]");
const passwordInput = () => cy.get("input[name=password]");
const submitBtn = () => cy.get('button[id="submitBtn"]');
// const termsOfService

it("sanity check to make sure tests work", () => {
  expect(1 + 2).to.equal(3);
});

describe("Filling out the inputs", () => {
  it("name input test", () => {
    nameInput()
      .should("have.value", "")
      .type("sallie")
      .should("have.value", "sallie");
  });
  it("email test input", () => {
    emailInput()
      .should("have.value", "")
      .type("salliemckee7@gmail.com")
      .should("have.value", "salliemckee7@gmail.com");
  });
  it("password test input", () => {
    passwordInput()
      .should("have.value", "")
      .type("testingtesting")
      .should("have.value", "testingtesting");
  });
  it("termsOfService checkbox test", () => {
    cy.get("input[name=termsOfService]")
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });

  it("submit form test", () => {
    nameInput()
      .should("have.value", "")
      .type("sallie")
      .should("have.value", "sallie");

    emailInput()
      .should("have.value", "")
      .type("salliemckee7@gmail.com")
      .should("have.value", "salliemckee7@gmail.com");

    passwordInput()
      .should("have.value", "")
      .type("testingtesting")
      .should("have.value", "testingtesting");

    cy.get("input[name=termsOfService]")
      .should("not.be.checked")
      .check()
      .should("be.checked");
  });
});
