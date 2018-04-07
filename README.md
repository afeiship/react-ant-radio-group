# react-ant-radio-group
> React ant radio group.


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    template: PropTypes.func,
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    type: 'radio',
    template: null,
    onChange: noop
  };
  
```

## usage:
```jsx

// install: npm install afeiship/react-ant-radio-group --save
// import : import ReactAntRadioGroup from 'react-ant-radio-group'

class App extends React.Component{
  state = {
    items: nx.antBuildItems(['op1','op2','op3'],true)
  };

  constructor(props){
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
  }

  _onChange = e => {
    console.log(e);
  };

  render(){
    return (
      <div className="hello-react-ant-radio-group">
      <div>
        <ReactAntRadioGroup onChange={this._onChange} items={ this.state.items } ref='rc' />
      </div>
      <div>
        <ReactAntRadioGroup type='button' onChange={this._onChange} items={ this.state.items } ref='rc2' />
      </div>
    </div>
    );
  }
}

```

## customize style:
```scss
// customize your styles:
$react-ant-radio-group-options:(
);

@import '~node_modules/react-ant-radio-group/style.scss';
```
