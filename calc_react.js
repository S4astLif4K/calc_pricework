var Item = React.createClass ({
  render: function() {
    return (
      <li className="line"><div className="numb">{this.props.number}</div><div className="item">{this.props.name}</div></li>
    );
  }
});

var Description = React.createClass ({
  render: function() {
    return (
    <li><div className="line_block"><span className="blue">{this.props.name}</span> - {this.props.description}</div></li>
    );
  }
});

var Time = React.createClass({render: function() {return (<option>{this.props.children}</option>);}});

var Calc = React.createClass ({
  getInitialState: function() {
    return {
      times: [{n:3,k:1},{n:5,k:1.2},{n:8,k:1.5},{n:12,k:1.8},{n:24,k:2}],
      qualitys: [
        {n:'Стандартная',k:1,d:'Стандартное качество кода'},
        {n:'Средняя',k:1.2,d:'Минимализация js,css,изображений и "прогон" через валидаторы'},
        {n:'Глубокая',k:1.5,d:'Всевозможные методы для улучшения скороси сайта вплоть до настройки сервера'},
      ],timeN:3,timeK:1,qualityK:1
    }
  },
  timeClick: function() {
    var mas = this.state.times;
    var element = this.refs.times.value;
    var k,n;
    mas.map (function (i){if (element == i.n){k = i.k;n = i.n;}})
    this.setState ({timeK: k,timeN: n});
  },
  qualClick: function() {
    var mas = this.state.qualitys;
    var element = this.refs.qualitys.value;
    var k,n,d;
    mas.map (function (i){if (element == i.n){k = i.k;n = i.n;d = i.d;}})
    this.setState ({qualityK: k});
    this.refs.qN.innerText = n;
    this.refs.qD.innerText = d;
  },
  eachO: function (i) {return (<Time value={i.k}>{i.n}</Time>);},
  render: function() {
    var Hp = 2000;
    var p = this.props.t * Hp * this.state.timeK * this.state.qualityK;
    var time = this.props.t / this.state.timeN;
    time = time.toFixed(0);
 		return (
      <li>
        <div className="line_block">
          <span className="blue">Стоимость: </span>
          <span ref="price">{p}</span>
          <span className="red"><i className="uk-icon-rub"></i></span>
        </div>
        <div className="line_block box_flex">
          <div className="col_left">
            <span className="blue">Время: </span>
            <span ref="time">{time}</span>
            <span className="red"> дня</span>
          </div>
          <div className="col_center">
            <select ref="times" onClick={this.timeClick}>
              {this.state.times.map (this.eachO)}
            </select>
          </div>
          <div className="col_right" id="timetext">
            <span className="blue" >Время работы в сутки:</span><br/>
            <span ref="h">{this.state.timeN}</span> <span className="red">часа</span>
          </div>
        </div>
        <div className="line_block box_flex">
          <div className="col_left">
            <span className="blue">Глубина разработки: </span>
            <span ref="qN">{this.state.qualitys[0].n}</span>
          </div>
          <div className="col_center">
            <select ref="qualitys" onClick={this.qualClick}>
              {this.state.qualitys.map (this.eachO)}
            </select>
          </div>
          <div className="col_right">
            <span className="blue">В разработку входит:</span><br/>
            <span ref="qD">{this.state.qualitys[0].d}</span>
          </div>
        </div>
        <div className="line_block">
          <span className="blue">Используемые технологии: </span> 
          <div className="link">HTML5</div>
          <div className="link">CSS3</div>
          <div className="link">SCSS</div>
          <div className="link">Java Script</div>
          <div className="link">Uikit</div>
          <div className="link">CMS MODX Revo</div>
        </div>
        <div className="line_block">
          <span className="blue">Рекомендации: </span> 
          <div className="link">Хостинг Jino.ru</div>
        </div>
      </li>
 		);
  }
});

var Field = React.createClass({
  getInitialState: function() {
    return {
      items: [
        {n:'Лендинг',t:'15',d:'Описание из википедии'},
        {n:'Сайт визитка',t:'20',d:'Описание из википедии'},
        {n:'Копоративный сайт',t:'30',d:'Описание из википедии'},
        {n:'Веб сервис',t:'60',d:'Описание из википедии'}
      ]
    }
  },
  eachI: function (i,n) {return (<Item number={n} name={i.n} />);},
  eachC: function (i) {return (<Calc t={i.t} />);},
  eachD: function (i) {return (<Description name={i.n} description={i.d} />);},
  render: function() {
    return (
      <div className="box_flex">
        <ul className="col_dop" data-uk-switcher="{connect:'#my-id-one, #my-id-two'}">
          {this.state.items.map (this.eachI)}
        </ul>
        <ul id="my-id-one" className="uk-switcher">
          {this.state.items.map (this.eachC)}
        </ul>
        <ul id="my-id-two" className="uk-switcher col_dop">
          {this.state.items.map (this.eachD)}
        </ul>
      </div>
  	);
  }
});
const place = document.getElementById('root');
ReactDOM.render(<Field />,place);
