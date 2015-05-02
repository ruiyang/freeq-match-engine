var LogicalExpressionComponent = React.createClass({
    getInitialState: function() {
        return {
          expression: "",
          type: "",
          expressionList: []
        };
    },

  renderExpressions: function (expressionList) {
    var index = 0;
    return expressionList.map(function(expression) {
      index = index + 1;
      if (expression.hasOwnProperty("AND") || expression.hasOwnProperty("OR")) {
        console.log(expression);
        return <div className="subExpression"><LogicalExpressionComponent expression = { expression} ref={"item" + index}/></div>;
      } else if (expression.hasOwnProperty("FUNC_CALL")) {
        funcParams = expression["FUNC_CALL"];
        return <FunctionComponent funcName={funcParams[0]} paramLeft = {funcParams[1]} paramRight = {funcParams[2]} ref={"item" + index}/>;
      } else {
        return <div>Unknown</div>;
      }
    });
  },

  _addExpression: function() {
    this.setState({type: this.state.type,
                   expressionList: this.state.expressionList.unshift({FUNC_CALL: ["equals", "boy.age", "girl.age"]})});
  },

  getExpression: function() {
    var expressions = [];
    for(key in this.refs) {
      expressions.push(this.refs[key].getExpression());
    }

    var expression = expressions.join(" " + this.state.type + " ");
    if (this.state.type === "OR") {
      expression = "(" + expression + ")";
    }
    return expression;
  },

  _alertExpression: function () {
  },

  render: function() {
    var Button = ReactBootstrap.Button;
      this.state.type = this.props.expression.hasOwnProperty("AND") ? "AND" : "OR";
      this.state.expressionList = this.props.expression[this.state.type];
    this.state.expressions = this.renderExpressions(this.state.expressionList);
      return (
          <div className={this.state.type.toLowerCase()}>
          <div className={"actionRow"}>
          <Button onClick={this._addExpression}>Add</Button>
          <Button onClick={this._addSubExpression}>Add Sub-Expression</Button>
          </div>

          <div className="">{this.state.expressions}</div>
          </div>
      );
    },
});
