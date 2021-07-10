import noop from '@jswork/noop';
import { Radio } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';

const CLASS_NAME = 'react-ant-radio-group';

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
    template: noop,
    onChange: noop
  };

  render() {
    const { className, items, template, ...props } = this.props;
    return (
      <Radio.Group
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        {...props}>
        <ReactList virtual items={items} template={template} />
      </Radio.Group>
    );
  }
}
