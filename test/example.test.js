// IMPORT MODULES under test here:
// import { example } from '../example.js';

import { renderParticipant } from '../render-utils.js';

const test = QUnit.test;

test('renderParticipant(participant) should return a DOM node', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const testParticipant = {
        name: 'Tilly',
        contact_email: 'test@testy.com'
    };

    const expected = 'Tilly: test@testy.com';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderParticipant(testParticipant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected.outerHTML);
});
