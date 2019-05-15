import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, name: "tag1", value: 5 },
      { id: 2, name: "tag2", value: 9 },
      { id: 3, name: "tag3", value: 3 }
    ]
  };

  handlerInc = counter => {
    this.setState(
      this.state.counters.reduce((current, item) => {
        if (item.id === counter.id) {
          item.value = counter.value + 1;
        }
        current.push(item);
        return current;
      }, [])
    );
  };

  render() {
    return (
      <ul>
        {this.state.counters.map(counter => (
          <li key={counter.id}>
            <Counter counter={counter} onInc={this.handlerInc} />
          </li>
        ))}
      </ul>
    );
  }
}

export default Counters;
