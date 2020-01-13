import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  //instead of arrow func in onsubmit, can do arrow here to resolve issue
  onFormSubmit = event => {
    event.preventDefault(); //will need in all react projects
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
