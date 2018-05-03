import {  
    fetchMatchSuccess, 
    FETCH_MATCH_SUCCESS
} from './match';

describe('fetchMatchSuccess', () => {
    it('Should return the action', () => {
        const match = 
            {
                "id": "000000000000000000000000",
                "date": "04-01-18",
                "home": "NYRC",
                "away": "SD Surfers",
                "score": "22-17",
                "comments": ["222222222222222222222200"]
            };
        
            const action = fetchMatchSuccess(match);
            expect(action).toEqual({
                type: FETCH_MATCH_SUCCESS,
                match
            });
    });
});