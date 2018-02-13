import './dev.scss';
import ReactAntRadioGroup from './main';
import NxAntBuildItems from 'next-ant-build-items';


/*===example start===*/

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
      <p>
        <ReactAntRadioGroup onChange={this._onChange} items={ this.state.items } ref='rc' />
      </p>
      <p>
        <ReactAntRadioGroup type='button' onChange={this._onChange} items={ this.state.items } ref='rc2' />
      </p>
    </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
