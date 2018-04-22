import React from 'react';

export default function PredictionForm() {
    return (
        <div>
            <h3>Who will win?</h3>
           <form>
                <label>Home</label>
                <input type="radio" name="prediciton" value="home"></input>
                <label>Away</label>
                <input type="radio" name="prediciton" value="away"></input>
                <label>Tie</label>
                <input type="radio" name="prediciton" value="tie"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}