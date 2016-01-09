//import {ADD_MOVE} from 'actionTypes'
import {combineReducers} from 'redux'
import 'isomorphic-fetch'


const emptyRow = [null, null, null]
const initialState = {
    moves: emptyRow.concat(emptyRow).concat(emptyRow),
    currentPlayer: 'X'
}

function moves(state = initialState.moves, action) {
    fetch('api')
        .then(res=>res.json())
        .then(res=>console.log(res));
    switch (action.type) {
        case 'ADD_MOVE':
            let newState = [
                ...state.slice(0, action.idx),
                action.player,
                ...state.slice(action.idx + 1)
            ];

            console.log(newState)
            return newState
        default:
            return state
    }
}

function currentPlayer(state = initialState.currentPlayer, action) {
    switch (action.type) {
        case 'ADD_MOVE':
            return state === 'X' ? '0' : 'X'
        default:
            return state;
    }
}

const ticTacToeApp = combineReducers({
    moves,
    currentPlayer
});

export default ticTacToeApp;