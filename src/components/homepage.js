import React from 'react';

export default class HomePage extends React.Component {
    render() {
        const matchArray = this.props.matches.map((match, index) => (
            <li key={index}>
                {match}
            </li>
        ))
        return (
          <div>
            <ul>
                {matchArray}
            </ul>
          </div>  
        )
    }
}