// add Chance
import Chance from 'chance'
const chance = new Chance()

// variables
const url = 'http://automationpractice.com'
const brandLogo = '.logo.img-responsive'
const pageHeading = '.page-heading'

// Sign up & Sign in variables
const signinButton = '.login'
const signinButtonVal = 'Sign in'

const signinHeadingVal = 'Authentication'

const emailCreateField = '#email_create'
const createAccountButton = '#SubmitCreate'
const createAccountError = '#create_account_error'

const emailField = '#email'
const passwordField = '#passwd'
const loginButton = '#SubmitLogin'

const emailVal = chance.email({ domain: 'mailinator.com' })
const emailInvalVal = chance.string()
const emailUnregVal = 'admin@google.com'

const passwordVal = '12345'
const passwordInvalVal = 'asdfasdf'

const accountHeadingVal = 'My account'

const signinError = '#center_column > :nth-child(2)'
const signOutButton = '.logout'

// Your personal informatioon variables
const genderField = '#id_gender1'

const firstnameField = '#customer_firstname'
const firstnameVal = chance.first()

const lastnameField = '#customer_lastname'
const lastnameVal = chance.last()

const passwordPersField = '#passwd'
const passwordPerVal = '12345'

const daysField = '#days'
const daysVal = chance.integer({ min: 1, max: 31 }).toString()

const monthField = '#months'
const monthVal = chance.month()

const yearField = '#years'
const yearVal = chance.year({ min: 1900, max: 2018 })

const addressField = '#address1'
const addressVal = chance.address({ short_suffix: true })

const cityField = '#city'
const cityVal = chance.city()

const stateField = '#id_state'
const stateVal = chance.state({ country: 'us', full: true })

const postcodeField = '#postcode'
const postcodeVal = chance.zip()

const phoneField = '#phone_mobile'
const phoneVal = chance.phone({ formatted: false })

const submitButton = '#submitAccount'

// Test Suite
describe('HOOQ: QA/SDET Take home project', function () {
    // Sign Up testing
    context.only('Sign Up testing', function () {
        // Before each test scenario
        beforeEach(function () {
            // visit website
            cy.visit(url)
            // verify website landing page
            cy.get(brandLogo)
                .should('be.visible')
            // verify and Click Sign in
            cy.get(signinButton)
                .should('contain', signinButtonVal)
                .click()
            cy.get(pageHeading)
                .should('contain', signinHeadingVal)
        })

        // Sign Up testing Test Scenario
        it.only('Scenario SU-01: Create An Account', function () {
            // Fill out the field and submit
            cy.get(emailCreateField)
                .type(emailVal)
            cy.get(createAccountButton)
                .click()

            // Fill out the persnoal information field and submit
            cy.get(genderField)
                .click()
            cy.get(firstnameField)
                .type(firstnameVal)
            cy.get(lastnameField)
                .type(lastnameVal)
            cy.get(passwordPersField)
                .type(passwordPerVal)
            cy.get(daysField)
                .select(daysVal)
            cy.get(monthField)
                .select(monthVal)
            cy.get(yearField)
                .select(yearVal)
            cy.get(addressField)
                .type(addressVal)
            cy.get(cityField)
                .type(cityVal)
            cy.get(stateField)
                .select(stateVal)
            cy.get(postcodeField)
                .type(postcodeVal)
            cy.get(phoneField)
                .type(phoneVal)
            cy.get(submitButton)
                .click()

            // Verify create an account success
            cy.get(pageHeading)
                .should('contain', accountHeadingVal)
        })

        // Sign Up testing Test Scenario
        it.skip('Scenario SU-02: Create An Account with registered Email on My Store', function () {
            // Fill out the field and submit
            cy.get(emailCreateField)
                .type(emailVal)
            cy.get(createAccountButton)
                .click()

            // Verify create an account failed
            cy.get(createAccountError)
                .should('be.visible')
        })

        // Sign Up testing Test Scenario
        it.skip('Scenario SU-03: Create An Account with invalid Email Address format', function () {
            // Fill out the field and submit
            cy.get(emailCreateField)
                .type(emailInvalVal)
            cy.get(createAccountButton)
                .click()

            // Verify create an account failed
            cy.get(createAccountError)
                .should('be.visible')
        })
    })

    // Sign In & Sign Out testing
    context('Sign In & Sign Out testing', function () {
        // Before each test scenario
        beforeEach(function () {
            // visit website
            cy.visit(url)
            // verify website landing page
            cy.get(brandLogo)
                .should('be.visible')
            // verify and Click Sign in
            cy.get(signinButton)
                .should('contain', signinButtonVal)
                .click()
            cy.get(pageHeading)
                .should('contain', signinHeadingVal)
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-01: Sign in with registered user', function () {
            // Fill out the field and submit
            cy.get(emailField)
                .type(emailVal)
            cy.get(passwordField)
                .type(passwordVal)
            cy.get(loginButton)
                .click()

            // Verify login success
            cy.get(pageHeading)
                .should('contain', accountHeadingVal)
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-02: Sign in with unregistered Email Address', function () {
            // Fill out the field and submit
            cy.get(emailField)
                .type(emailUnregVal)
            cy.get(passwordField)
                .type(passwordInvalVal)
            cy.get(loginButton)
                .click()

            // Verify login failed
            cy.get(signinError)
                .should('be.visible')
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-03: Sign in with wrong Password', function () {
            // Fill out the field and submit
            cy.get(emailField)
                .type(emailVal)
            cy.get(passwordField)
                .type(passwordInvalVal)
            cy.get(loginButton)
                .click()

            // Verify login failed
            cy.get(signinError)
                .should('be.visible')
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-04: Sign in with empty Email Address field', function () {
            // Fill out the field and submit
            cy.get(passwordField)
                .type(passwordInvalVal)
            cy.get(loginButton)
                .click()

            // Verify login failed
            cy.get(signinError)
                .should('be.visible')
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-05: Sign in with empty Password field', function () {
            // Fill out the field and submit
            cy.get(passwordField)
                .type(passwordVal)
            cy.get(loginButton)
                .click()

            // Verify login failed
            cy.get(signinError)
                .should('be.visible')
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-06: Sign in with empty Email Address & Password field', function () {
            // Fill out the field and submit
            cy.get(loginButton)
                .click()

            // Verify login failed
            cy.get(signinError)
                .should('be.visible')
        })

        // Sign In & Sign Out testing Test Scenario
        it('Scenario SI-07: Sign out from logged in account', function () {
            // Fill out the field and submit
            cy.get(emailField)
                .type(emailVal)
            cy.get(passwordField)
                .type(passwordVal)
            cy.get(loginButton)
                .click()

            // Verify and Click Sign out
            cy.get(signOutButton)
                .should('be.visible')
                .click()

            // Verify logged out success
            cy.get(pageHeading)
                .should('contain', signinHeadingVal)
        })
    })
})
