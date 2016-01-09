import vm from '../src/vm'
import assert from 'assert'
import {expect} from 'chai'

describe("DOM Tests", function () {
    it("test", ()=>{
        let rez = vm().someText;
        assert.equal(rez(),10);
        expect(rez()).to.equal(10);
    })
});