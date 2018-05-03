import {  
    fetchMatchesSuccess, 
    FETCH_MATCHES_SUCCESS,
    fetchMatches
} from './matches';

import { loadAuthToken } from '../local-storage';

describe('fetchMatchesSuccess', () => {
    it('Should return the action', () => {
        const matches = [
            {
                "id": "000000000000000000000000",
                "date": "04-01-18",
                "home": "NYRC",
                "away": "SD Surfers",
                "score": "22-17",
                "comments": ["222222222222222222222200"]
            },
            {
                "id": "000000000000000000000001",
                "date": "04-07-18",
                "home": "Glendale",
                "away": "Chicago",
                "score": "5-35",
                "comments": ["222222222222222222222201"]
            }];
        
            const action = fetchMatchesSuccess(matches);
            expect(action).toEqual({
                type: FETCH_MATCHES_SUCCESS,
                matches
            });
    });
});

// describe('fetchMatches', () => {
//     it('Should dispatch fetchMatches', () => {
//         const matches = [
//             {
//                 "id": "000000000000000000000000",
//                 "date": "04-01-18",
//                 "home": "NYRC",
//                 "away": "SD Surfers",
//                 "score": "22-17",
//                 "comments": ["222222222222222222222200"]
//             },
//             {
//                 "id": "000000000000000000000001",
//                 "date": "04-07-18",
//                 "home": "Glendale",
//                 "away": "Chicago",
//                 "score": "5-35",
//                 "comments": ["222222222222222222222201"]
//             }];

//         global.fetch = jest.fn().mockImplementation(() =>
//             Promise.resolve({
//                 ok: true,
//                 json() {
//                     return matches;
//                 }
//             })
//         );

//         const dispatch = jest.fn();
//         return fetchMatches()(dispatch).then(() => {
//             expect(fetch).toHaveBeenCalledWith('/matches');
//             expect(dispatch).toHaveBeenCalledWith(fetchMatchesSuccess(matches));
//         });
//     });
// });