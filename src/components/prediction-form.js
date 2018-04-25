// import React from 'react';
// import { connect } from 'react-redux';
// import { addPrediction } from '../actions/predictions';

// export class PredictionForm extends React.Component {
//     // componentDidMount() {
//     //     this.props.dispatch(addPredictions());
//     // }
//     render() {
//         return (
//             <div>
//                 <h3>Who will win?</h3>
//             <form onSubmit={(e) => {
//                 e.preventDefault();
//                 const predValue = e.target.prediction.value;
//                 e.target.prediction.value='';
//                 this.props.dispatch(addPrediction(predValue));
//                 }}>
//                     <label>Home</label>
//                     <input 
//                         type="radio" 
//                         name="prediction" 
//                         value="home">
//                         {/* // onChange={this.props.handleChange}> */}
//                     </input>
//                     <label>Away</label>
//                     <input 
//                         type="radio" 
//                         name="prediction" 
//                         value="away">
//                         {/* // onChange={this.props.handleChange}> */}
//                     </input>
//                     <label>Tie</label>
//                     <input 
//                         type="radio" 
//                         name="prediction" 
//                         value="tie">
//                         {/* // onChange={this.props.handleChange}> */}
//                     </input>
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         )
//     }
// }

// const mapStateToProps = (state) => ({
//     prediction: state.predictionReducer.prediction
// });

// export default connect(mapStateToProps)(PredictionForm);