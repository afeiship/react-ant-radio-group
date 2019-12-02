import ReactAntRadioGroup from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items: [
      {
        value: 'k1',
        label: 'k111'
      },
      {
        value: 'k2',
        label: 'k222'
      }
    ]
  };
  render() {
    return (
      <div className="app-container">
        <ReactAntRadioGroup items={this.state.items} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
