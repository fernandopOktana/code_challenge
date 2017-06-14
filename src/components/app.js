import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import DonutChart from 'react-donut-chart';
import Slider from './slider.js';
import { connect } from 'react-redux'
import * as actions from '../actions/index';
import data from '../data';

 class App extends Component {
  render() {
    let numbers =data[this.props.risk];
 
    return (
      <div>
      <h1>Investment Portfolio</h1>
      <hr/>
           <DonutChart
    data={[{
        label: 'Stocks',
        value:numbers[0],
    },
    {
        label: 'Bonds',
        value: numbers[1],
        
    },{
        label: 'Cash',
        value: numbers[2],
        
    },
    {
        label: 'Comodities',
        value: numbers[3],
        
    },
    {
        label: 'Fixed Income',
        value: numbers[4],
        
    }
    ]} />
     <h2>Risk</h2>
      <hr/>
    <Slider
          min={0}
          max={5}
          val={+this.props.risk}
          label="risk"
          update={this.props.update} />   
      </div>    
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    risk : state.risk,
  }
}

const mapDispatchToProps = (dispatch) => ({
    update: (risk) => {
      dispatch(actions.updateRisk(risk))
}})

export default connect(mapStateToProps, mapDispatchToProps)(App);

