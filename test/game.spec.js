import {expect} from 'chai'

import vm from '../src/vm'

describe('newGame', ()=> {
    let game = [2]
    describe('cells', ()=> {
        it('have 1 cell', ()=> {
            expect(game).to.have.length(1)
        })

        it('generates each cell with 2',()=>{
            expect(game).to.all.deep.equal(2)
        })

        it('has text',()=>{
            expect(vm().someText()).to.equal(10);
        })
    })
})
