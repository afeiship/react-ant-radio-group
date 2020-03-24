# react-ant-radio-group
> React ant radio group.

## installation
```shell
npm install -S @feizheng/react-ant-radio-group
```

## update
```shell
npm update @feizheng/react-ant-radio-group
```

## properties
| Name      | Type   | Default | Description                           |
| --------- | ------ | ------- | ------------------------------------- |
| className | string | -       | The extended className for component. |
| value     | any    | -       | Default value.                        |
| onChange  | func   | noop    | The change handler.                   |
| items     | array  | []      | Value/label pairs.                    |
| template  | func   | -       | The template.                         |


## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-radio-group/dist/style.scss";

  // customize your styles:
  $react-ant-radio-group-options: ()
  ```
2. import js
  ```js
  import ReactAntRadioGroup from '@feizheng/react-ant-radio-group';
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

  ```

## documentation
- https://afeiship.github.io/react-ant-radio-group/
