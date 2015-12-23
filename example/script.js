import React, {PropTypes} from 'react';
import {render} from 'react-dom';
import Select from '../src/index';

class Application extends React.Component {
  state = {
    value: 1,
    multiValue: [1, 3]
  };

  handleChange(value) {
    this.setState({ value });
  }

  handleMultiChange(value) {
    this.setState({
      multiValue: value.length ? value.split(',') : []
    });
  }

  render() {
    return (
      <div>
        <h1>CloudFlare Select Component Example</h1>

        <Select
          label="Basic"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}/>

        <Select searchable
          label="Searchable"
          value={this.state.value}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleChange.bind(this)}/>

        <Select searchable multi
          label="Searchable Multi"
          value={this.state.multiValue}
          options={[
            { value: 1, label: 'One' },
            { value: 2, label: 'Two' },
            { value: 3, label: 'Three' }
          ]}
          onChange={this.handleMultiChange.bind(this)}/>
      </div>
    );
  }
}

render(<Application/>, document.getElementById('root'));
