import React, { Component } from 'react';


class Slider extends Component {
  render() {
    const label = this.props.label !== '' ?
      <label>{this.props.label} - {this.props.val}</label> : '';
    return (
      <div>
        <span className="label_risk"> {label} </span>
        <input
          type={this.props.type}
          min={this.props.min}
          max={this.props.max}
          defaultValue={this.props.val}
          onChange={(e) => {
            this.props.update(e.target.value);
          }}
        />

      </div>
    );
  }
}

Slider.propTypes = {
  min: React.PropTypes.number,
  max: React.PropTypes.number,
  val: React.PropTypes.number,
  label: React.PropTypes.string,
  update: React.PropTypes.func.isRequired,
  type: React.PropTypes.oneOf(['number', 'range']),
};

Slider.defaultProps = {
  min: 0,
  max: 0,
  val: 0,
  label: '',
  type: 'range',
};

export default Slider;
