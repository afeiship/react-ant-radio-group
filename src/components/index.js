import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from '@feizheng/noop';
import objectAssign from 'object-assign';
import { Radio } from 'antd';

const CLASS_NAME = 'react-ant-radio-group';
const DEFAULT_TEMPLATE = ({ item }) => {
  return (
    <Radio key={item.value} value={item.value}>
      {item.label}
    </Radio>
  );
};

export default class ReactAntRadioGroup extends Component {
  static displayName = CLASS_NAME;
  static version = '__VERSION__';
  static propTypes = {
    /**
     * The extended className for component.
     */
    className: PropTypes.string,
    /**
     * Default value.
     */
    value: PropTypes.any,
    /**
     * The change handler.
     */
    onChange: PropTypes.func,
    /**
     * Value/label pairs.
     */
    items: PropTypes.array,
    /**
     * The template.
     */
    template: PropTypes.func
  };

  static defaultProps = {
    items: [],
    template: DEFAULT_TEMPLATE,
    onChange: noop
  };

  get childView() {
    const { items, template } = this.props;
    return items.map((item, index) => {
      return template({ item, index });
    });
  }

  render() {
    const { className, items, template, ...props } = this.props;
    return (
      <Radio.Group
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        {this.childView}
      </Radio.Group>
    );
  }
}
