import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntRadioGroup from '../src/main';
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
      <ReactDemokit
        className="p-3 app-container"
        url="https://github.com/afeiship/react-ant-radio-group">
        <div className="is-item mb-4">
          <ReactAntRadioGroup
            onChange={(e) => {
              console.log(e.target.value);
            }}
            items={this.state.items}
          />
        </div>

        <div className="is-item">
          <ReactAntRadioGroup
            buttonStyle="solid"
            defaultValue={'k1'}
            onChange={(e) => {
              console.log(e.target.value);
            }}
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
      </ReactDemokit>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
