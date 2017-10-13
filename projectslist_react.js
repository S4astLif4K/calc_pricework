var UnActiveProject = React.createClass ({
  render: function() {
    return (
      <a className="project_box" href="#call-modal" data-uk-modal>
        <div className="vert_line"></div>
        <div className="content_text">
          <div className="default">Здесь может быть ваш проект</div>
          <div className="hover"><span className="blue">Кликните</span>чтобы заказать проект</div>
        </div>
      </a>
    );
  }
});

var ActiveProject = React.createClass ({
  render: function() {
    return (
      <a className="project_box activ">
        <div className="content_text">
          <span className="blue">Сайт:</span>&nbsp;{this.props.WebsiteName}<br/> 
          <span className="blue">Время:</span>&nbsp;{this.props.days}&nbsp;<span className="red">дня</span><br/> 
          <span className="blue">Осталось:</span>&nbsp;{this.props.daysleft}&nbsp;<span className="red">дня</span>
        </div>
      </a>
    );
  }
});

var ProjectsList = React.createClass ({
  render: function() {
    return (
      <span>
        <div className="h1-item"><i className="uk-icon-cubes"></i> Проекты в разработке</div>
        <div className="box_flex-wrap">
          {/*here projects are START*/}
          <UnActiveProject />
          <UnActiveProject />
          <ActiveProject WebsiteName="project.ru" days="5" daysleft="2.3" />
          {/*here projects are END*/}
        </div>
      </span>
    );
  }
})

const place = document.getElementById('projects');
ReactDOM.render(<ProjectsList />,place);