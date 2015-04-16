var LogicalExpressionComponent = React.createClass({
  getInitialState: function() {
    return {
      expressionsSupported: ["AND", "OR"],
      currentLogicalExpressionType: this.props.type,
      expressionList: this.props.parseTree[0],
      currentTargetField: this.props.parseTree[2]
    };
  },

  render: function() {
    return (
      <div>
        {this.renderDropdown("srcFields", this.state.currentSrcField, this.handleSrcFieldChange)}
      {this.renderDropdown("functions", this.state.currentFunction, this.handleFunctionChange)}
      {this.renderDropdown("targetFields", this.state.currenttargetField, this.handleTargetFieldChange)}
      </div>
    );
  },

  getExpression: function () {
    return this.state.currentFunction + "(" + this.state.currentSrcField + ", " +  this.state.currentTargetField + ")";
  }
});

var FunctionComponentFactory = React.createFactory(FunctionComponent);
