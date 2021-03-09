describe('Form', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
    cy.get('.yes-button').click()
  });

  it('Have correct url', () => {
    cy.url().should('include','form')
  })

  it('Show the duck', () => {
    cy.get('svg').should('have.class', 'duck')
  })

  it('Should call user by name', () => {
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').click()
    cy.get('form').find('label').contains("How would you describe the trouble you're having Cypress, duck-friend?")
  })

  it('Should refer to users specific problem', () => {
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').as('next').click()
    cy.get('form').find('.problem-type-select').select("big bad bug")
    cy.get('@next').click()
    cy.get('form').find('.tech-type-select').select("crunchy")
    cy.get('@next').click()
    cy.get('form').find('label').contains("OK, Cypress with the crunchy problem, tell me more.")
  })

  it('Should be able to fill out all inputs', () => {
    cy.get('form').find('.name-input').type('cypress')
    cy.get('@next').click()
    cy.get('form').find('.problem-type-select').select("big bad bug")
    cy.get('@next').click()
    cy.get('form').find('.tech-type-select').select('everything')
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('@next').click()
    cy.get('form').find('.days-input').type('1')
    cy.get('@next').click()
    cy.get('form').find('.hours-input').type('1')
    cy.get('@next').click()
    cy.get('form').find('.progress-time-input').select('hours')
    cy.get('@next').click()
    cy.get('form').find('.current-time-input').select('11')
    cy.get('@next').click()
    cy.get('form').find('.break-input').select('yesterday')
    cy.get('@next').click()
    cy.get('form').find('.eat-input').select('minutes')
    cy.get('@next').click()
    cy.get('form').find('.multi').select('adventurous')
    cy.get('@next').click()
    cy.get('form').find('.feeling-input').select('1')
    cy.get('@next').click()
    cy.get('form').find('.penult-button').click()
    cy.get('form').find('.submit-button').click().wait(2000)
  })

  it('Should be able to go back', () => {
    cy.get('form').find('.name-input').type('cypress')
    cy.get('form').find('.forward-button').as('next').click()
    cy.get('form').find('.back-button').click()
    cy.get('form').find('.name-input')
  })
});
