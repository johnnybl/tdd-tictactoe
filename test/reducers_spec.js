import {expect} from 'chai'
import reducer from '../src/reducers'
import sinon from 'sinon'
import 'isomorphic-fetch'

describe('addMove',()=>{
    let state = reducer(undefined, {type:null});
    it('generates a new object each time',()=>{
        reducer(state,{type:'ADD_MOVE',idx:1, player:'X'}).should.not.equal(state);
    })
    it('places current player at the specified location',()=>{
        let newState = reducer(state,{type:'ADD_MOVE',idx:1,player:'X'});

        newState.moves.should.deep.equal(
            [null,'X',null,null,null,null,null,null,null]
        );
    })
    it('switches the player',()=>{
        state.currentPlayer.should.equal('X');
        reducer(state,{type:'ADD_MOVE', idx:4, player:'X'}).currentPlayer.should.equal('0')
    })

    it('should have called server', ()=>{
        var xhr = sinon.stub();
        var reqs = [];
        xhr.onCreate = function(xhr){
            reqs.push(xhr);
            console.log("asdfasdfasdfasdf")
        }
        reducer(state,{type:'ADD_MOVE', idx:4, player:'X'}).currentPlayer.should.equal('0')
        reqs.should.have.length.of.at.least(1);
    })
})