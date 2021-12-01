import {findEvenIndex} from './utility'

describe('Performing ECS Engineer in Test Tech Test', () => {

    before(() => {
        cy.visit('http://localhost:3000')
        cy.get('[id=home]').should('be.visible')
    })

    it('Click button to render the challenge', () => {
        cy.get('[data-test-id=render-challenge]').click()
        cy.get('[id=challenge]').should('be.visible')
    })

    it('Submit challenge 1', () => {
        submitChallenge(1)
    })

    it('Submit challenge 2', () => {
        submitChallenge(2)
    })

    it('Submit challenge 3', () => {
        submitChallenge(3)
    })

    const CANDIDATE_NAME = 'Marcus Sanders'

    it('Enter candidate name: ' + CANDIDATE_NAME, () => {
        cy.get(`[data-test-id="submit-4"]`).type(CANDIDATE_NAME)
    })

    it('Submit answers', () => {
        cy.get('[data-test-id="submit-answers"]').click()
    })

    it('Which was successful', () => {
        cy.get('[class="dialog"]')
            .should('be.visible')
            .contains('Congratulations')
    })
})

function submitChallenge(challenge) {
    cy.get(`[data-test-id*="array-item-${challenge}-"]`)
        .then(($elem) => {
            return Array.from($elem, el => parseInt(el.innerText));
        }).then((arr) => {
            cy.get(`[data-test-id="submit-${challenge}"]`).type(findEvenIndex(arr))
        }
    )
}



