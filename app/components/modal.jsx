var React= require('react');
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

var exports = module.exports = React.createClass({
  render: function(){
    if(this.props.isOpen){
      return (
        <ReactCSSTransitionGroup transitionName = {this.props.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={300}>
          <div id="modaler" className = "modal reactModal">
            {this.props.children}
          </div>
        </ReactCSSTransitionGroup>
      );
    } else {
      return <ReactCSSTransitionGroup transitionName = {this.props.transitionName} transitionEnterTimeout={500} transitionLeaveTimeout={300} />;
    }
  }
});
