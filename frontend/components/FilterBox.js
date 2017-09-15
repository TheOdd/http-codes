import React from 'react';

class FilterBox extends React.Component {
  // Function to handle updates in text box. Dispatches new event to Redux store.
  handleChange(e) {
    this.props.dispatch({
      text: e.target.value,
      type: "UPDATE_TEXT"
    });
  }
  // Prevent default action of redirecting user to the same page (reloading page)
  handleSubmit(e) {
    e.preventDefault()
  }
  render() {
    return (
      // TODO: Remove in-line styling for a more organized alternative
      <div className="search-codes" style={{marginLeft: '8%'}}>
        <form onSubmit={e => this.handleSubmit(e)}>
          <div className="form-group">
            <div className="input-group">
              <span className="input-group-addon"><i className="glyphicon glyphicon-search"></i></span>
              { /* TODO: Remove in-line styling for a more organized alternative */ }
              <input style={{width: '65%'}} placeholder="Start typing a response code number." type="text" className="form-control" onChange={e => this.handleChange(e)} value={this.props.text}></input>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default FilterBox;
