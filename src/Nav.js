import React, { Component } from 'react'

//이벤트 버블링 이슈  e.stopPropagation()로 해결

import "./assets/css/main.css";
class Nav extends Component {
  render() {
    return (
      <div className="Main">
        <nav id="nav">
          <ul className="container">
            <li><a href="#Standard" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('standard');
            }.bind(this)}>Standard</a></li>

            <li><a href="#Salad" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('salad');
            }.bind(this)}>Salad</a></li>

            <li><a href="#Signature" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('signature');
            }.bind(this)}>Signature</a></li>

            <li><a href="#Pasta" onClick={function (e) {

              e.stopPropagation();
              this.props.onChangeMode('pasta');
            }.bind(this)}>pasta</a></li>

            <li><a href="#Pizza" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('pizza');
            }.bind(this)}>Pizza</a></li>

            <li><a href="#Steak" onClick={function (e) {

              e.stopPropagation();
              this.props.onChangeMode('steak');
            }.bind(this)}>Steak</a></li>

          </ul>
        </nav>
      </div>
    )
  }
}


export default Nav