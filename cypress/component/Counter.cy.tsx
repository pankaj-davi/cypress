import React from 'react';
import Counter from '../../src/componets/Counter';

describe('Counter.cy.tsx', () => {
  it('playground', () => {
    cy.mount(<Counter />);
    cy.get('#count-display').should('contain', 0);
  });

  it('increment count when increment button is clicked', () => {
    cy.mount(<Counter />);
    cy.get('button').contains('INCREMENT').click();
    cy.get('#count-display').should('contain', 1);
  });

  it('decrement count when decrement button is clicked', () => {
    cy.mount(<Counter />);
    cy.get('button').contains('INCREMENT').click();
    cy.get('button').contains('DECREMENT').click();
    cy.get('#count-display').should('contain', 0);
  });

  it('increments and decrements count multiple times', () => {
    cy.mount(<Counter />);
    cy.get('button').contains('INCREMENT').click().click();
    cy.get('#count-display').should('contain', '2');
    cy.get('button')
      .contains('DECREMENT')
      .click()
      .click()
      .click()
      .click()
      .click()
      .click()
      .click();
    cy.get('#count-display').should('contain', 0);
  });

  // it('does not allow count to go below 0 when decrementing from 0', () => {
  //   cy.mount(<Counter />);
  //   cy.get('button').contains('DECREMENT').click();
  //   cy.get('#count-display').should('contain', '0');
  // });
});
