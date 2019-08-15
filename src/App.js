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
      mode: 'standard',
      contents: [
        { id: 1, title: 'standard', desc: '시칠리아에서 꾸준히 사랑받는 음식으로 부담없이 맛있게 즐기실 수 있습니다' },
        { id: 2, title: 'salad', desc: '입맛을 돋우는 샐러드로 건강과 맛을 동시에 생각했습니다' },
        { id: 3, title: 'signature', desc: '시칠리아만의 특별한 요리로 다른 곳에서는 드실 수 없는 맛을 선물하겠습니다' },
        { id: 4, title: 'pasta', desc: '세계 최대의 파스타면 생산기업 이탈리아 Baria 사의 스파게티 면과 이탈리아 남단에서 재배된 토마토종을 사용하여 당과 산의 비율이 최적화된 롱고바디 토마토홀' },
        { id: 5, title: 'pizza', desc: '이탈리아산 최상품 밀가루만을 조합해 직접 반죽하고 24시간이상 저온숙성해 485°C 화덕에 구워낸 나폴리 정통 피자' },
        { id: 6, title: 'steak', desc: '호주산 청정우 안심필렛과 일주일간 끓여낸 Fonde veau와 port wine을 배합, 뉴질랜드산 앵커버터로 풍미를 끓어올린 port wine sauce 사용' },
      ]
    }
  }

  componentDidMount() { // render() 가 완료된 후에 _getMovies()를 호출하여 Api를 받아온다
    this._getMenues();
  }

  _renderMenues = () => {
    const menues = this.state.menues.map(menu => {
      return (
        <Menu
          name={menu.name}
          img={menu.img}
          key={menu.id}
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
      "https://api.myjson.com/bins/sizk7"  //  call myjson api
    )
      .then(res => res.json())
      .then(json => json[mode])
      //.then(aa => console.log(aa))
      .catch(err => console.log(err));
  };

  getContent() {

    var _title, _desc = null;
    var _article = null; // 리턴할 객체
    var key = null;
    if (this.state.mode === 'standard') { //standard 모드일 경우
      _title = this.state.contents[0].title;
      _desc = this.state.contents[0].desc;
      key = this.state.contents[0].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    } else if (this.state.mode === 'salad') { //salad 모드일 경우
      _title = this.state.contents[1].title;
      _desc = this.state.contents[1].desc;
      key = this.state.contents[1].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    } else if (this.state.mode === 'signature') { //signature 모드일 경우
      _title = this.state.contents[2].title;
      _desc = this.state.contents[2].desc;
      key = this.state.contents[2].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    } else if (this.state.mode === 'pasta') { //pasta 모드일 경우
      _title = this.state.contents[3].title;
      _desc = this.state.contents[3].desc;
      key = this.state.contents[3].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    } else if (this.state.mode === 'pizza') { //pizza 모드일 경우
      _title = this.state.contents[4].title;
      _desc = this.state.contents[4].desc;
      key = this.state.contents[4].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    } else if (this.state.mode === 'steak') { //steak 모드일 경우
      _title = this.state.contents[5].title;
      _desc = this.state.contents[5].desc;
      key = this.state.contents[5].id;
      _article = <Header title={_title} _desc={_desc} key={key} > </Header>
    }
    return _article;
  }

  render() {
    const { menues } = this.state;
    return (
      <div className="Main">
        <div className="App__Main">
          <Nav
            onChangeMode={
              function (_mode) {
                console.log(_mode)
                this.setState({
                  mode: _mode
                });

              }.bind(this)}>
            {this._getMenues()} {/*onChangeMode가 끝나고 나서 메뉴를 보여줘야 함.. 이부분을 왜이렇게 힘들어 했을까*/}
          </Nav>

          {this.getContent()} {/* Header 컴포넌트 호출 */}

          <div className={menues ? "App" : "App--loading"}>
            {menues ? this._renderMenues() : "Loading"}
          </div>
        </div>
      </div>

    );
  }
}

export default App;
