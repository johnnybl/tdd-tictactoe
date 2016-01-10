import {expect} from 'chai'

import vm from '../src/vm'

let g = {
    cells: [null,null,null,null,null,null,null,null,null],
    currentPlayer: "X",
    firstMove:function(location){
        this.cells[location]="X";
        this.currentPlayer = "0"
    }
};

describe('newGame', ()=> {

    it("has 9 empty cells", () => {
        expect(g.cells).to.have.length(9);
    })

    it("start with X as current player", () => {
        expect(g.currentPlayer).to.equal("X");
    })

    it("has all cells empty", () => {
        expect(g.cells).to.have.all.equal(null);
    })

})

describe ("first player move", () => {
    it("places first player token on desired location", () => {
        g.firstMove(3);
        expect(g.cells[3]).to.equal("X");
    })

    it("changes current player to Y", ()=>{
        g.firstMove(3);
        expect(g.currentPlayer).to.equal("0");
    })
})