import React, { Component } from "react";

class List extends Component {
  render() {
    
    return (
    <div>
        <ul>
          {this.props.listr.map(letter =>
            <li key={letter.rank}>
              {letter.city} - {letter.state}
            </li>
          )}
        </ul>
    </div>
    );
    
  }
}
export default List;