import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag us"
          onClick={() => this.context.onLanguageChange("english")}
        />
        <i
          className="flag es"
          onClick={() => this.context.onLanguageChange("spanish")}
        />
      </div>
    );
  }
}

export default LanguageSelector;
