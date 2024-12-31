function Header(props) {
  return (
    <header>
      <h1>My {props.data} App</h1> {/*props.data is the variable name passed from App.js*/}
    </header>
  );
}

export default Header;

{/*import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>My {this.props.data} App</h1>   //*this.props.data is the variable name passed from App.js*
      </header>
    );
  }
}
*/}