/**
 * All Tests Pass: Week 5 - Roman Numeral Interpreter
 *
 * Given a function romanNumeralInterpreter, convert the input into a numeric value.
 *
 * If the input isn't a valid Roman numeral, throw an error.
 *
 * `throw new Error('Invalid Input');`
 *
 * References:
 * https://en.wikipedia.org/wiki/Roman_numerals
 */

import { assert } from "./node_modules/chai/chai.js";

const romanNumeralInterpreter = (input) => {

}

describe("Week 5 - Roman Numeral Interpreter", function() {
    it ("Should handle simple characters", function() {
        assert.equal(romanNumeralInterpreter('I'), 1,"I == 1");
        assert.equal(romanNumeralInterpreter('V'), 5,"V == 5");
        assert.equal(romanNumeralInterpreter('X'), 10,"X == 10");
        assert.equal(romanNumeralInterpreter('L'), 50,"L == 50");
        assert.equal(romanNumeralInterpreter('C'), 100,"C == 100");
        assert.equal(romanNumeralInterpreter('D'), 500,"D == 500");
        assert.equal(romanNumeralInterpreter('M'), 1000,"M == 1000");
    });

    it ("Should handle malformed input", function() {
       // assert.equal(romanNumeralInterpreter('i'), 1, "Numbers don't have to be capitalized.");
       assert.throws(() => {
           romanNumeralInterpreter("b");
       }, "Invalid Input");
       assert.throws(() => {
           romanNumeralInterpreter(5);
       }, "Invalid Input");
    });

    it ("Should handle common subtractive notions", function() {
        assert.equal(romanNumeralInterpreter("IV", 4), "IV == 4");
        assert.equal(romanNumeralInterpreter("IX", 9), "IX == 9");
        assert.equal(romanNumeralInterpreter("XL", 40), "XL == 40");
        assert.equal(romanNumeralInterpreter("XC", 90), "XC == 90");
        assert.equal(romanNumeralInterpreter("CD", 400), "CD == 400");
        assert.equal(romanNumeralInterpreter("CM", 900), "CM == 900");
    });

    it ("Should handle complex numbers", function() {
        assert.equal(romanNumeralInterpreter("III", 3), "III == 3");
        assert.equal(romanNumeralInterpreter("XXVII", 27), "XXVII == 27");
        assert.equal(romanNumeralInterpreter("XXXVIII", 38), "XXXVII == 38");
        assert.equal(romanNumeralInterpreter("XLI", 41), "XLI == 41");
        assert.equal(romanNumeralInterpreter("XCIX", 99), "XCIX == 99");
        assert.equal(romanNumeralInterpreter("MCMLXXXIII", 1983), "MCMLXXXIII == 1983");
    });
});