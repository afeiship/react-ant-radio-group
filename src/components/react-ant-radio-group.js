import React,{PureComponent} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import { Radio } from 'antd';

const TYPE_MAP = {
  radio: Radio,
  button: Radio.Button
};

export default class extends PureComponent{
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    items: PropTypes.array,
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  static defaultProps = {
    items: [],
    type: 'radio',
    onChange: noop
  };
  /*===properties end===*/

  _onChange = e =>{
    const { onChange } = this.props;
    const value = e.target.value;
    onChange(value);
  };

  render(){
    const { className, items, type, onChange, ...props } = this.props;
    const Component = TYPE_MAP[ type ];
    return (
      <Radio.Group {...props} onChange={ this._onChange } className={classNames('react-ant-radio-group',className)}>
      {
        (items.length > 0) && items.map((item)=>{
          return (
            <Component className="react-ant-radio-item" key={item.value} value={item.value}>{ item.label }</Component>
          )
        })
      }
      </Radio.Group>
    );
  }
}
