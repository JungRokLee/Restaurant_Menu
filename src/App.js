import React, { Component } from "react";
import "./App.css";
import "./assets/css/main.css";
import Menu from "./Menu";
import Header from "./Header";
import Nav from "./Nav";


class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // Update componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()

  constructor(props) {
    super(props);
    
    this.state = {
      mode: 'standard'
    }
  }


  componentDidMount() { // render가 완료된 후에 _getMovies()를 호출하여 Api를 받아온다
    this._getMenues();
  }



  _renderMenues = () => {
    const menues = this.state.menues.map(menu => {

      return (

        <Menu
          name={menu.name}
          img={menu.img}
          id={menu.id}
          desc={menu.desc}
          Origin_price={menu.Origin_price}
          DC_price={menu.DC_price}
        />
      );
    });
    return menues;
  };

  _getMenues = async () => {  // 비동기로 await하여 _callApi()호출
    const menues = await this._callApi(); //_callApi() 하여 받아온 json을 movies에 저장
    this.setState({
      menues //menues: menues
    });

  };

  _callApi = () => { //promise -> then -> catch
    var mode = this.state.mode;
    return fetch(
      "https://api.myjson.com/bins/14151b"
    )
      .then(res => res.json())
      .then(json => json[mode])
      //.then(aa => console.log(aa))
      .catch(err => console.log(err));
  };

  render() {

    const { menues } = this.state;

    return (

      <div className="Main">
        <div className="App__Main">
          <Nav
           onChangeMode={
              function (_mode) {
                this.setState({
                  mode: _mode
                });
              this._getMenues();
              }.bind(this)}> 
              </Nav>
             
          <Header> </Header>
         

          <div className={menues ? "App" : "App--loading"}>

            {menues ? this._renderMenues() : "Loading"}

          </div>

        </div>

      </div>


    );
  }
}

export default App;
