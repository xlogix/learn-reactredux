import React from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions/index";
import StreamForm from "./StreamForm";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = formValues => {
    this.props.editStream(this.props.match.params.id, formValues);
  };

  render() {
    if (this.props.stream) {
      return (
        <div>
          <h3>Edit a Stream</h3>
          <StreamForm
            initialValues={_.pick(this.props.stream, "title", "description")}
            onSubmit={this.onSubmit}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
