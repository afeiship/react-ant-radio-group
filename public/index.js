import ReactDemokit from '@jswork/react-demokit';
import React from 'react';
import ReactDOM from 'react-dom';
import RctplAntRadioButton from '@jswork/rctpl-ant-radio-button';
import ReactAntRadioGroup from '../src/main';
import { Radio } from 'antd';
import './assets/style.scss';

class App extends React.Component {
  state = {
    items2: [
      {
        value: 'k2-1',
        label: 'k2111'
      },
      {
        value: 'k2-2',
        label: 'k2222'
      }
    ],
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
        <div className="is-item">
          <div className="py-2">
            <ReactAntRadioGroup
              buttonStyle="solid"
              defaultValue={'k1'}
              onChange={(e) => {
                console.log('radio button tmpl:', e.target.value);
              }}
              items={this.state.items}
              template={RctplAntRadioButton}
            />
          </div>

          <div className="py-2">
            <ReactAntRadioGroup
              buttonStyle="solid"
              defaultValue={'k2'}
              onChange={(e) => {
                console.log('radio tmpl:', e.target.value);
              }}
              items={this.state.items}
            />
          </div>

          <ReactAntRadioGroup
            items={this.state.items2}
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
