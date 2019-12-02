# react-ant-radio-group
> React ant radio group.

## installation
```shell
npm install -S @feizheng/react-ant-radio-group
```
## properties
| property        | type | description |
| --------------- | ---- | ----------- |
| className       | -    | -           |
| value           | -    | -           |
| onChange        | -    | -           |
| items        | -    | -           |
| template        | -    | -           |

## usage
1. import css
  ```scss
  @import "~@feizheng/react-ant-radio-group/dist/style.scss";

  // customize your styles:
  $react-ant-radio-group-options: ()
  ```
2. import js
  ```js
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
  ```

## documentation
- https://afeiship.github.io/react-ant-radio-group/
