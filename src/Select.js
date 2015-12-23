import React from 'react';
import ReactSelect from 'react-select';

export default class Select extends React.Component {
  static propTypes = {
    label: React.PropTypes.string,

    onChange: React.PropTypes.func.isRequired,
    onBlur: React.PropTypes.func,
    onFocus: React.PropTypes.func,

    multi: React.PropTypes.bool,
    searchable: React.PropTypes.bool,

    value: React.PropTypes.any,
    options: React.PropTypes.arrayOf(React.PropTypes.shape({
      label: React.PropTypes.string.isRequired,
      value: React.PropTypes.any.isRequired
    })),
    placeholder: React.PropTypes.string
  };

  static defaultProps = {
    multi: false,
    searchable: false
  };

  render() {
    return (
      <div className="cf-select">
        {this.props.label && <label>{this.props.label}</label>}
        <ReactSelect
          // Simplify if this isnt a searchable select
          searchable={this.props.searchable}
          clearable={this.props.searchable}
          backspaceRemoves={this.props.searchable}

          onChange={this.props.onChange}
          onBlur={this.props.onBlur}
          onFocus={this.props.onFocus}

          multi={this.props.multi}
          value={this.props.value}
          options={this.props.options}
          placeholder={this.props.placeholder}/>
      </div>
    );
  }
}
