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
          <span className="blue">Сайт:</span>{this.props.WebsiteName}<br/> 
          <span className="blue">Время:</span>{this.props.days}<span className="red">дня</span><br/> 
          <span className="blue">Осталось:</span>{this.props.daysleft}<span className="red">дня</span>
        </div>
      </div>
    );
  }
});

const place = document.getElementById('projects_list');
ReactDOM.render(<ActiveProject WebsiteName=" project.ru" days=" 5 " daysleft=" 2.3 " />,place);