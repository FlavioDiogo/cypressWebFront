/// <reference types="cypress" />

var Chance = require ('chance')
var chance = new Chance()


describe('Cadastro', () => {
    it('Quando eu informar os dados e finalizar, então o cadastro deve ser efetuado', () => {
        cy.visit('https://form-agilizei.netlify.app')
        cy.get('input[name=firstName]').type(chance.first()) 
        cy.get('input[name=lastName]').type(chance.last()) 
        cy.get('textarea[name=adress]').type(chance.address()) 
        cy.get('input[name=emailAdress]').type(chance.email())
        cy.get('[type="radio"]').first().check()
        cy.get('#checkbox3').check()
        cy.get('select#countries').select('Japão', {force: true})
        cy.get('select#years').select('1987', {force: true})
        cy.get('select#months').select('Junho', {force: true})
        cy.get('select#days').select('3', {force: true})
        cy.get('#firstpassword').type('Mack1234')
        cy.get('#secondpassword').type('Mack1234')
        cy.get('#submitbtn').click()
        cy.url().should('contain', 'listagem')        
        
    });
});