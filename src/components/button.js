import React from 'react';

class Button extends React.Component {
  getFavoriteColor() {
    return 'blue';
  }

  render() {
    return (
      <button className="btn" onClick={this.props.onClick}>
        {this.props.children}
      </button>
    );
  }
}

export default Button;
