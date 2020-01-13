import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Modal from "../../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions/index";

class StreamDelete extends React.Component {
  //react fragment is like an invisible element, functionally like a div
  //but doesn't produce html
  //use to return multiple elements
  //can do <> </> instead
  renderActions = () => (
    <React.Fragment>
      <button
        className="ui button negative"
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
      >
        Delete
      </button>
      <Link className="ui button" to="/">
        Cancel
      </Link>
    </React.Fragment>
  );

  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent = () => {
    if (!this.props.stream) {
      return "Confirm deletion of stream";
    }
    return `Confirm deletion of stream: ${this.props.stream.title}`;
  };

  render() {
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
