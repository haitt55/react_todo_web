import React, { Component, PropTypes } from 'react'

const ReactCSSTransitionGroup = React.addons.CSSTransitionGroup

class TodoDetail extends Component {
  render() {
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={5000}
      transitionEnterTimeout={5000}
      transitionLeaveTimeout={5000}>
      let {viewingTodo} = this.props;
      if (viewingTodo) {
        return (
          <div className="todo-detail">
            Viewing: {viewingTodo.title} ({viewingTodo.id})
          </div>
        );
      }
    </ReactCSSTransitionGroup>
    return false;
  }
}

TodoDetail.propTypes = {
  viewingTodo: PropTypes.any,
}

export default TodoDetail;
