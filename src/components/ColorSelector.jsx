import React, { Component } from "react";

class ColorSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedColor: props.colors[0],
    };
  }

  handleChange = (event) => {
    this.setState({ selectedColor: event.target.value });
  };

  render() {
    const { colors } = this.props;
    const { selectedColor } = this.state;

    return (
      <div>
        <select onChange={this.handleChange} value={selectedColor}>
          {colors.map((color, index) => (
            <option key={index} value={color}>
              {color}
            </option>
          ))}
        </select>
        <div
          style={{
            marginTop: "20px",
            width: "100px",
            height: "100px",
            backgroundColor: selectedColor,
          }}
        ></div>
      </div>
    );
  }
}

export default ColorSelector;
