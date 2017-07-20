import React from 'react';

class FilterBox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }
  handleChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      <div className="search-codes">
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
              <input type="text" className="form-control" onChange={e => this.handleChange(e)} value={this.state.text}></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBox;
