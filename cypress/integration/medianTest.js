describe('Median Test', function () {
    beforeEach(() => {
        cy.visit('http://localhost:3000/')
    })

    const input = [['10', '3,5'],['18', '7'],['0', ','],['2.79', '2'],['-621', ','],['10000000', '4751053']]
    input.forEach(dataset => {
    it(`should be able to get median for ${dataset[0]}`, () => {
        cy.get('input')
          .type(dataset[0])
          .should("have.value",dataset[0])
          .get('button').click()
        cy.get('h2').should('contain', dataset[1])
        })
    })

    it('should not get median for number greater than 10000000', () => {
        cy.get('input')
          .type('10000001')
          .should("have.value",'10000001')
          .get('button').click()
        cy.on("window:alert", (str) =>{
        expect(str).to.equal('Number exceeds limit')
     })     
    })
})