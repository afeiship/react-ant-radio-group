# react-ant-radio-group
> React ant radio group.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install -S @jswork/react-ant-radio-group
```

## properties
| Name      | Type   | Required | Default | Description                           |
| --------- | ------ | -------- | ------- | ------------------------------------- |
| className | string | false    | -       | The extended className for component. |
| value     | any    | false    | -       | Default value.                        |
| onChange  | func   | false    | noop    | The change handler.                   |
| items     | array  | false    | []      | Value/label pairs.                    |
| template  | func   | false    | noop    | The template.                         |


## usage
1. import css
  ```scss
  @import "~@jswork/react-ant-radio-group/dist/style.css";

  // or use sass
  @import "~@jswork/react-ant-radio-group/dist/style.scss";

  // customize your styles:
  $react-ant-radio-group-options: ()
  ```
2. import js
  ```js
  import ReactDemokit from '@jswork/react-demokit';
  import React from 'react';
  import ReactDOM from 'react-dom';
  import ReactAntRadioGroup from '@jswork/react-ant-radio-group';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-radio-group/


## license
Code released under [the MIT license](https://github.com/afeiship/react-ant-radio-group/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/react-ant-radio-group
[version-url]: https://npmjs.org/package/@jswork/react-ant-radio-group

[license-image]: https://img.shields.io/npm/l/@jswork/react-ant-radio-group
[license-url]: https://github.com/afeiship/react-ant-radio-group/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/react-ant-radio-group
[size-url]: https://github.com/afeiship/react-ant-radio-group/blob/master/dist/react-ant-radio-group.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/react-ant-radio-group
[download-url]: https://www.npmjs.com/package/@jswork/react-ant-radio-group
