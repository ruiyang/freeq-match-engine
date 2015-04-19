var LogicalExpressionComponent = React.createClass({
    getInitialState: function() {
      var type = this.props.expression.hasOwnProperty("AND") ? "AND" : "OR";
        return {
            type: type,
            expressionList: this.props.expression[type]
        };
    },

  renderExpressions: function (expressionList) {
    return expressionList.map(function(expression) {
      if (expression.hasOwnProperty("AND") || expression.hasOwnProperty("OR")) {
        return <div className="subExpression"><LogicalExpressionComponent expression = { expression}/></div>;
      } else if (expression.hasOwnProperty("FUNC_CALL")) {
        funcParams = expression["FUNC_CALL"];
        return <FunctionComponent funcName={funcParams[0]} paramLeft = {funcParams[1]} paramRight = {funcParams[2]} />;
      } else {
        return <div>Unknown</div>;
      }
    });
  },

    render: function() {
        var expressions = this.renderExpressions(this.state.expressionList);
        return (
            <div
          className= {this.state.type.toLowerCase()}>{expressions}</div>
        );
    },
});
