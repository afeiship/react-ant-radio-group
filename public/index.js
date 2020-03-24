import ReactAntRadioGroup from '../src/main';
import ReactDOM from 'react-dom';
import React from 'react';
import { Radio } from 'antd';
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
        <div className="is-item">
          <ReactAntRadioGroup items={this.state.items} />
        </div>

        <div className="is-item">
          <ReactAntRadioGroup
            buttonStyle="solid"
            defaultValue={'k1'}
            items={this.state.items}
            template={({ item }) => {
              return (
                <Radio.Button value={item.value} key={item.value}>
                  {item.label}
                </Radio.Button>
              );
            }}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
