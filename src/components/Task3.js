import React, { Component } from 'react';

class Task3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showColors: false,
          selectedColor: '',
        };
      }
    
      handleButtonClick = () => {
        this.setState((prevState) => ({
          showColors: !prevState.showColors,
        }));
      };
    
      handleColorClick = (color) => {
        this.setState({
          selectedColor: color,
          showColors: false,
        });
      };
    
      render() {
        const { colors } = this.props;
        const { showColors, selectedColor } = this.state;
    
        return (
          <div className="color-picker">
            <button className="color-button" onClick={this.handleButtonClick}>
              Pick a color
            </button>
            {showColors && (
              <ul className="color-list">
                {colors.map((color, index) => (
                  <li
                    key={index}
                    className="color-item"
                    style={{ backgroundColor: color }}
                    onClick={() => this.handleColorClick(color)}
                  >
                    {color}
                  </li>
                ))}
              </ul>
            )}
            {selectedColor && <p>You picked: {selectedColor}</p>}
          </div>
        );
      }
    }
export default Task3;
