var FunctionComponent = React.createClass({
  mixins: [FunctionParameters],

  getInitialState: function() {
    return {
      functions: ["equal", "contains"],
      srcFields: this.getSourceFields(),
      targetFields: this.getTargetFields(),
      paramLeft: this.props.paramLeft,
      funcName: this.props.funcName,
      paramRight: this.props.paramRight
    };
  },

  renderDropdown: function (fieldName, selectedValue, onchange) {
    var Input = ReactBootstrap.Input;
    var options = this.state[fieldName].map(function (field) {
      return <option key={"option-" + fieldName +"-" + field} value={field}>{field}</option>;
    });
    return <Input key={"select-" + fieldName} type='select' value={selectedValue} onChange={onchange}>{options}</Input>;
  },

  handleSrcFieldChange: function (e) {
    this.setState({paramLeft: e.target.value});
  },

  handleFunctionChange: function (e) {
    this.setState({funcName: e.target.value});
  },

  handleTargetFieldChange: function (e) {
    this.setState({paramRight: e.target.value});
  },

  render: function() {
    var Grid = ReactBootstrap.Grid;
    var Row = ReactBootstrap.Row;
    var Col = ReactBootstrap.Col;
    return (
        <div>
        <Grid>
        <Row className='show-grid'>
        <Col xs={4}>{this.renderDropdown("srcFields", this.state.paramLeft, this.handleSrcFieldChange)}</Col>
      <Col xs={4}>{this.renderDropdown("functions", this.state.funcName, this.handleFunctionChange)}</Col>
      <Col xs={4}>{this.renderDropdown("targetFields", this.state.currenttargetField, this.handleTargetFieldChange)}</Col>
      </Row>
        </Grid>
        </div>
    );
  },

  getExpression: function () {
    return this.state.funcName + "(" + this.state.paramLeft + ", " +  this.state.paramRight + ")";
  }
});

var FunctionComponentFactory = React.createFactory(FunctionComponent);
