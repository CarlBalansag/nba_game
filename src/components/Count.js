import React, { Component } from "react";
import Clock from "./Clock";

class App extends Component {
constructor(props) {
    super(props);
    this.state = { deadline: "October, 24, 2023 4:30:00 PM" };
}
    render() {
        return (
            <div className="App">
                <Clock deadline={this.state.deadline} />
            </div>
        );
    }
    }
export default App;
