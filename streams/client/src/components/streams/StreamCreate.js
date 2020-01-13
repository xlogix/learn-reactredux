import React from "react";
import { connect } from "react-redux";
import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    //onSubmit automatically does preventdefault for us
    this.props.createStream(formValues);
  };

  render() {
    //handlesubmit provided by redux-form
    //button implicitly is of type submit by default
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);
