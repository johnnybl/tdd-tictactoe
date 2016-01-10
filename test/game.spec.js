import {expect} from 'chai'

import vm from '../src/vm'

let g = ()=> {
    return {
        cells: [null,null,null,null,null,null,null,null,null],
            currentPlayer: "X",
        placeMove:function(location){
        this.cells[location] = this.currentPlayer;
        this.currentPlayer = "0"
    }
    }
};

describe('newGame', ()=> {

    it("has 9 empty cells", () => {
        expect(g().cells).to.have.length(9);
        expect(g().cells).to.have.all.equal(null);
    })

    it("start with X as current player", () => {
        expect(g().currentPlayer).to.equal("X");
    })

})

describe ("first player move", () => {
    it("places first player token on desired location", () => {
        let game = g();
        game.placeMove(3);
        expect(game.cells[3]).to.equal("X");
    })

    it("changes current player to Y", ()=>{
        let game = g();
        game.placeMove(3);
        expect(game.currentPlayer).to.equal("0");
    })
})