import * as React from 'react';

class ClickCounter extends React.Component {
  constructor(props) {
      super(props);
      this.state = {count: 0};
      this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
      this.setState((state) => {
          return {count: state.count + 1};
      });
  }
  
  componentDidUpdate() {}

  render() {
      return [
          <button key="1" onClick={this.handleClick}>Update counter</button>,
          <span key="2">{this.state.count}</span>
      ]
  }
}

export default ClickCounter;
