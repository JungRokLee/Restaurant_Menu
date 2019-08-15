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
              this.props.onChangeMode('standard'); // 모드를 standard로 변경
            }.bind(this)}>Standard</a></li>

            <li><a href="#Salad" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('salad');  // 모드를 salad로 변경
            }.bind(this)}>Salad</a></li>

            <li><a href="#Signature" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('signature');  // 모드를 signature로 변경
            }.bind(this)}>Signature</a></li>

            <li><a href="#Pasta" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('pasta');  // 모드를 pasta로 변경
            }.bind(this)}>pasta</a></li>

            <li><a href="#Pizza" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('pizza');  // 모드를 pizza로 변경
            }.bind(this)}>Pizza</a></li>

            <li><a href="#Steak" onClick={function (e) {
              e.stopPropagation();
              this.props.onChangeMode('steak');  // 모드를 steak로  변경
            }.bind(this)}>Steak</a></li>

          </ul>
        </nav>
      </div>
    )
  }
}


export default Nav