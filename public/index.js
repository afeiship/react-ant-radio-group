import NxOfflineSw from '@feizheng/next-offline-sw';
import ReactGithubCorner from '@feizheng/react-github-corner';
import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
import { Radio } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactAntRadioGroup from '../src/main';
import './assets/style.scss';

class App extends React.Component {
  state = {
    hasUpdate: false,
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

  componentDidMount() {
    NxOfflineSw.install({
      onUpdateReady: () => {
        this.setState({ hasUpdate: true });
      }
    });
  }

  render() {
    return (
      <div className="p-3 app-container">
        {/* Core components usage start */}
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
        {/* Core components usage end */}
        <ReactSwUpdateTips value={this.state.hasUpdate} />
        <ReactGithubCorner value="https://github.com/afeiship/react-ant-radio-group" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
