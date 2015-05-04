var LogicalExpressionComponent = React.createClass({
  getInitialState: function() {
    return this._getStateFromExpression(this.props.expression);
  },

  renderExpressions: function (expressionList) {
    var index = 0;
    return expressionList.map(function(expression) {
      index = index + 1;
      if (expression.hasOwnProperty("AND") || expression.hasOwnProperty("OR")) {
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
    this.state.expressionList.unshift({FUNC_CALL: ["equals", "boy.age", "girl.age"]});
    this.setState({type: this.state.type,
                   expressionList: this.state.expressionList});
  },

  _addAndSubExpression: function() {
    this.state.expressionList.unshift({"AND": [{FUNC_CALL: ["equals", "boy.age", "girl.age"]}]});
    this.setState({type: this.state.type,
                   expressionList: this.state.expressionList});
  },

  _addOrSubExpression: function() {
    this.state.expressionList.unshift({"OR": [{FUNC_CALL: ["equals", "boy.age", "girl.age"]}]});
    this.setState({type: this.state.type,
                   expressionList: this.state.expressionList});
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

  componentWillReceiveProps: function(nextProp) {
    this.setState(this._getStateFromExpression(nextProp.expression));
  },

  _getStateFromExpression: function(expression) {
    var type = expression.hasOwnProperty("AND") ? "AND" : "OR";
    return{
      type: type,
      expressionList: expression[type]
    };
  },

  render: function() {
    var Button = ReactBootstrap.Button;
    var expressions = this.renderExpressions(this.state.expressionList);
    return (
        <div className={this.state.type.toLowerCase()}>
        <div className={"actionRow"}>
        <Button onClick={this._addExpression}>Add</Button>
        <Button onClick={this._addAndSubExpression}>Add AND-Expression</Button>
        <Button onClick={this._addOrSubExpression}>Add OR-Expression</Button>
        </div>
        <div className="">{expressions}</div>
        </div>
    );
  }
});
