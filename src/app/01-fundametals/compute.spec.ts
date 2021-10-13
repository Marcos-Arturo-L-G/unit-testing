import { compute } from './compute'; //clase que tiene el codigo a provar

//suit de pruevas
describe('compute', ()=>{
    //prueva 1
    it('should return 0 if inut is negative', ()=>{
        const result = compute(-1);
        expect(result).toBe(0)
    })

    //prueva 2
    it('should return 0 if inut is negative', ()=>{
        const result = compute(1);
        expect(result).toBe(2)
    })
})