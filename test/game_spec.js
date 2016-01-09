import {expect} from 'chai'

describe('newGame', ()=> {
    let game = [2]
    describe('cells', ()=> {
        it('have 1 cell', ()=> {
            game.should.have.length(1)
        })

        it('generates each cell with 2',()=>{
            game.should.all.deep.equal(2)
        })
    })
})
