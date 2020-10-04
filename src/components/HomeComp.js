import React, { PureComponent } from "react";
import { Button } from "react-bootstrap";
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      input: null,
      error: null,
    };
  }
  add() {
    if (this.state.input) {
      this.props.addtolist({ input: this.state.input });
    } else {
      this.setState({
        error: "Entry Can't be Empty",
      });
    }
  }
  render() {
    // console.warn("comp", this.props.state[0]);
    return (
      <div className="container p-4">
        <h1 className="text-light mb-3">To-Do List</h1>
        {this.state.error ? (
          <span style={{ color: "red", height: "12px" }}>
            {this.state.error}
          </span>
        ) : (
          <div></div>
        )}
        <input
          onChange={(e) => {
            this.setState({
              input: e.target.value,
              error: "",
            });
          }}
        />
        <br />
        <Button
          className="m-3"
          onClick={() => {
            this.add();
          }}
        >
          Add
        </Button>
        {/* <div style={{ border: "4px white solid" }}></div> */}
      </div>
    );
  }
}

export default Home;
