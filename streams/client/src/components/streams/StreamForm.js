import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends React.Component {
  renderError({ error, touched }) {
    if (touched && error) {
      return (
        <div className="ui error message">
          <div className="header">{error}</div>
        </div>
      );
    }
  }
  //extract input from formprops
  renderInput = ({ input, label, meta }) => {
    //... here is attaching all .input props to input element
    const className = `field ${meta.error && meta.touched ? "error" : ""}`;
    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    //onSubmit automatically does preventdefault for us
    this.props.onSubmit(formValues);
  };

  render() {
    //handlesubmit provided by redux-form
    //button implicitly is of type submit by default
    return (
      <form
        className="ui form error"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field name="title" component={this.renderInput} label="Enter Title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "Must enter title";
  }
  if (!formValues.description) {
    errors.description = "Must enter description";
  }

  return errors;
};

export default reduxForm({
  form: "streamForm",
  validate
})(StreamForm);
