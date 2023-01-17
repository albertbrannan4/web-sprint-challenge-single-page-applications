describe('template spec', () => {
  beforeEach('resets page', () => {
    cy.visit('http://localhost:3000/pizza')
  })


  it("sanity check to make sure tests work", () => {
    expect(9).not.to.equal("9");
    expect(2 + 2).not.equal(5);
})


  const NameInput = ()=> cy.get("input[name=name]");
  const pepperoni =()=> cy.get('input[name=pepperoni]');
  const sausage =()=> cy.get('input[name=sausage]');
  const greenPepper =()=> cy.get('input[name=greenPepper]');
  const submitButton = ()=> cy.get('input[id=order-button]');
  const size =()=> cy.get('select[name=size]');
  const orginalRed= ()=> cy.get('input[name=sauce]');
  const specialInput = ()=> cy.get('input[name=specialInstructions]');
  it("can type value into name input",()=>{
    NameInput().should('have.value','');
    NameInput().type('Butchy Brannan');
    NameInput().should('have.value','Butchy Brannan');
  })


  it("can select multiple toppings",()=>{
    pepperoni().should('exist');
    pepperoni().check();
    sausage().check();
    greenPepper().check();
  })


  it('can submit the form',()=>{
    submitButton().should('be.disabled');

    NameInput().type('Albert Brannan');

    size().should('have.value','');
    size().select('Large');

    orginalRed().first().check();

    pepperoni().check();
    sausage().check();
    greenPepper().check();

    specialInput().type('Make it quick for a big tip');

    submitButton().should('not.be.disabled');

    submitButton().click();

  })

})