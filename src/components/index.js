import noop from '@jswork/noop';
import { Radio } from 'antd';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import ReactList from '@jswork/react-list';
import RctplAntRadio from '@jswork/rctpl-ant-radio';

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
     * The handle when search confirm.
     */
    onSearch: PropTypes.func,
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
    template: RctplAntRadio,
    onChange: noop,
    onSearch: noop
  };

  handleChange = (inEvent) => {
    const { onChange, onSearch } = this.props;
    onChange(inEvent);
    onSearch(inEvent);
  };

  render() {
    const { className, items, template, onChange, onSearch, ...props } =
      this.props;
    return (
      <Radio.Group
        data-component={CLASS_NAME}
        className={classNames(CLASS_NAME, className)}
        onChange={this.handleChange}
        {...props}>
        <ReactList virtual items={items} template={template} />
      </Radio.Group>
    );
  }
}
