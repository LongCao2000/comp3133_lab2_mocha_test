const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../src/app');
const { sub } = require('../src/app');
const { mul } = require('../src/app');
const { div } = require('../src/app');


describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(5,2);
        assert.equal(result, 7);
        //expect(result).to.be.eq(8);
        
    });
});

describe('the add function', () => {
    it('should add 2 numbers together', () => {
        const result = add(5,2);
        assert.equal(result, 8);
        
    });
});

describe('the subtract function', () => {
    it('should subtract 2 numbers together', () => {
        const result = sub(5,2);
        assert.equal(result, 3);
        
    });
});

describe('the subtract function', () => {
    it('should subtract 2 numbers together', () => {
        const result = sub(5,2);
        assert.equal(result, 5);
        
    });
});

describe('the mutiply function', () => {
    it('should mutiply 2 numbers together', () => {
        const result = mul(5,2);
        assert.equal(result, 10);
        
    });
});

describe('the mutiply function', () => {
    it('should subtract 2 numbers together', () => {
        const result = mul(5,2);
        assert.equal(result, 12);
        
    });
});

describe('the divide function', () => {
    it('should divide 2 numbers together', () => {
        const result = div(10,2);
        assert.equal(result, 5);
        
    });
});

describe('the divide function', () => {
    it('should divide 2 numbers together', () => {
        const result = div(10,2);
        assert.equal(result, 2);
        
    });
});
