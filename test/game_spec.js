import { newGame } from '../src/tic_tac_toe_game'
import {expect} from 'chai'

describe('newGame', ()=> {
    let game = newGame()
    describe('cells', ()=> {
        it('groups them in 3 rows', ()=> {
            game.cells.should.have.length(3)
        })

        it('generates each row with null tokens',()=>{
            game.cells.should.all.deep.equal([null,null,null])
        })
    })
    describe('next player',()=>{
        it('should always be X',()=>{
            game.currentPlayer().should.equal('X')
        })
    })
})

describe('addMoveAt()',()=>{
    let game = newGame()
    game.addMoveAt(0,0)

    it("should add next player at specified position",()=> {
        game.cells[0].should.eql(['X', null, null])
    })
    it("should maintain the rest of cells the same",()=> {
        game.cells.slice(1).should.all.eql([null, null, null])
    })
    it("should switch player to '0'",()=>{
        game.currentPlayer().should.equal('0')
    })
})