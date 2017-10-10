var UnActiveProject = React.createClass ({
  render: function() {
    return (
      <div className="project_box">
        <div className="vert_line"></div>
        <div className="content_text">
          Здесь может быть ваш проект
        </div>
      </div>
    );
  }
});

var ActiveProject = React.createClass ({
  render: function() {
    return (
      <div className="project_box activ">
        <div className="content_text">
          <span className="blue">Сайт:</span>&nbsp;{this.props.WebsiteName}<br/> 
          <span className="blue">Время:</span>&nbsp;{this.props.days}&nbsp;<span className="red">дня</span><br/> 
          <span className="blue">Осталось:</span>&nbsp;{this.props.daysleft}&nbsp;<span className="red">дня</span>
        </div>
      </div>
    );
  }
});

var ProjectsList = React.createClass ({
  render: function() {
    return (
      <span>
        <div className="h1-item">Проекты в разработке</div>
        <div className="box_flex-wrap">
          //here projects are
          <UnActiveProject />
          <UnActiveProject />
          <ActiveProject WebsiteName="project.ru" days="5" daysleft="2.3" />
          //here projects are
        </div>
      </span>
    );
  }
})

const place = document.getElementById('projects');
ReactDOM.render(<ProjectsList />,place);