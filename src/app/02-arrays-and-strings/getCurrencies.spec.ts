import { getCurrencies } from './getCurrencies';

describe ('getCurrencies',()=>{
    it ('return the suppurted currencies',()=>{
        const result = getCurrencies();
        expect(result).toContain('USD');
        expect(result).toContain('AUD');
        expect(result).toContain('EUR');
    })
});