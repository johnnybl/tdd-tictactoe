import vm from '../src/vm'
import assert from 'assert'

describe("DOM Tests", function () {
    it("test", ()=>{
        let rez = vm().someText;
        console.log(rez());
        assert.equal(rez(),10);
    })
});