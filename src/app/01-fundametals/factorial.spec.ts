import { factorial } from './factorial'; //clase de coddigo a provar

//it de pruevas factorial
describe('factorial',()=>{

    //prueva 1
    it('shoult return 1 if input is 0',()=>{

        const result = factorial(0);
        expect(result).toBe(1);
    })

    //prueva 2
    it('sould return 2 the input is 2',()=>{
        const result = factorial(2);
        expect(result).toBe(2);
    })

    //prueva 3
    it('sould return 24 the input is 4',()=>{
        const result = factorial(4);
        expect(result).toBe(24);
    })

    //prueva 4
    it('sould return 0 the input is >=10',()=>{
        const result = factorial(10);
        expect(result).toBe(-1);
    })
})