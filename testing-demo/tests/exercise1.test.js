const lib = require('../exercise1');

describe('fizzBuzz', () => {
    it('should throw an exception if input is not a number', () => {
        ['a', undefined, null, {}].forEach(a => {
            expect(( ) => {
                lib.fizzBuzz(a).toThrow();
            })
        })
    })

    it('should return Fizzbuzz if input is divisible by 3 and 5', () => {
       expect(lib.fizzBuzz(15)).toBe('FizzBuzz');
    })

    it('should return Fizz if input is divisible by 3', () => {
        expect(lib.fizzBuzz(3)).toBe('Fizz');
     })

     it('should return buzz if input is divisible by 5', () => {
        expect(lib.fizzBuzz(5)).toBe('Buzz');
     })

     it('should return same if input is not divisible by 3 and 5', () => {
        expect(lib.fizzBuzz(7)).toBe(7);
     })

 
})