import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";

class Nav2 extends Component {
  render() {
    return (
      <div>
        <Nav

        fill
          activeKey="/home"
          onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
        >
          <Nav.Item>
            <Nav.Link href="/home">Active</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Nav2;