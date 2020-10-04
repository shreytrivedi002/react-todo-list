import React, { Component } from "react";
import { Alert } from "react-bootstrap";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="bg-dark p-4">
          {this.props.state[0] ? (
            <div>
              {this.props.state.map((item, i) => (
                <Alert key={i} variant="light">
                  <h4 className="text-dark">{item.entries.input}</h4>
                </Alert>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default List;
