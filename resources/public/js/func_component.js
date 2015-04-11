var FunctionComponent = React.createClass({
  getInitialState: function() {
    return {
      functions: ["equal", "contains"],
      srcFields: ["bankTransaction.description", "bankTransaction.date", "bankTransaction.amount"],
      targetFields: ["journal.description", "journal.amount"],
      currentSrcField: this.props.parseTree[1],
      currentFunction: this.props.parseTree[0],
      currentTargetField: this.props.parseTree[2]
    };
  },

  renderDropdown: function (fieldName, selectedValue, onchange) {
    var options = this.state[fieldName].map(function (field) {
      return <option key={"option-" + fieldName +"-" + field} value={field}>{field}</option>;
    });
    return <select key={"select-" + fieldName} value={selectedValue} onChange={onchange}>{options}</select>;
  },

  handleSrcFieldChange: function (e) {
    this.setState({currentSrcField: e.target.value});
  },

  handleFunctionChange: function (e) {
    this.setState({currentFunction: e.target.value});
  },

  handleTargetFieldChange: function (e) {
    this.setState({currentTargetField: e.target.value});
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
