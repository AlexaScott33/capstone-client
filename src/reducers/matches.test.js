import matchesReducer from './matches';
// 

describe('matchesReducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const newState = matchesReducer(undefined, {
            type: '@@UNKNOWN'
        });
    });

    it('Should return the current state on an unknown action', () => {
        const state = {
            matches: [],
            loading: false,
            error: null
        };

        const newState = matchesReducer(state, {
            type: '@@UNKNOWN'
        });

        expect(newState).toEqual(state);
    });
});