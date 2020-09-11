# react-ant-radio-group
> React ant radio group.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @feizheng/react-ant-radio-group
```

## update
```shell
npm update @feizheng/react-ant-radio-group
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | any    | false    | -       | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| items     | array  | false    | []      | Value/label pairs.                    |
| template  | func   | false    | -       | The template.                         |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-radio-group/dist/style.scss";

  // customize your styles:
  $react-ant-radio-group-options: ()
  ```
2. import js
  ```js
  import NxOfflineSw from '@feizheng/next-offline-sw';
  import ReactGithubCorner from '@feizheng/react-github-corner';
  import ReactSwUpdateTips from '@feizheng/react-sw-update-tips';
  import { Radio } from 'antd';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntRadioGroup from '@feizheng/react-ant-radio-group';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-radio-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-radio-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@feizheng/react-ant-radio-group
[version-url]: https://npmjs.org/package/@feizheng/react-ant-radio-group

[license-image]: https://img.shields.io/npm/l/@feizheng/react-ant-radio-group
[license-url]: https://github.com/afeiship/react-ant-radio-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@feizheng/react-ant-radio-group
[size-url]: https://github.com/afeiship/react-ant-radio-group/blob/master/dist/react-ant-radio-group.min.js

[download-image]: https://img.shields.io/npm/dm/@feizheng/react-ant-radio-group
[download-url]: https://www.npmjs.com/package/@feizheng/react-ant-radio-group
