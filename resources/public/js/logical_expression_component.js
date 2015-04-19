var LogicalExpressionComponent = React.createClass({
    getInitialState: function() {
        return {
          expression: "",
          type: "",
          expressionList: []
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
      this.state.type = this.props.expression.hasOwnProperty("AND") ? "AND" : "OR";
      this.state.expressionList = this.props.expression[this.state.type];
      var expressions = this.renderExpressions(this.state.expressionList);
      return (
          <div className= {this.state.type.toLowerCase()}>{expressions}</div>
      );
    },
});
