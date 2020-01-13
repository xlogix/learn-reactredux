import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Abhi"
          timeAgo="Today at 1:00PM"
          avatar={faker.image.avatar()}
          content="Hello"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Damn"
          timeAgo="Today at 2:00PM"
          avatar={faker.image.avatar()}
          content="World"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Woah!"
          timeAgo="Today at 3:00PM"
          avatar={faker.image.avatar()}
          content="Is Cool"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
