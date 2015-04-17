var LogicalExpressionComponent = React.createClass({
    getInitialState: function() {
        return {
            expressionsSupported: ["AND_EXPRESSION", "OR"],
            currentLogicalExpressionType: this.props.type,
            expressionList: this.props.expressionList
        };
    },

    renderFunctionList: function (functionCalls) {
        return functionCalls.map(function(funcCall) {
            var funcParams = funcCall["FUNC_CALL"];
            return <FunctionComponent funcName={funcParams[0]} paramLeft = {funcParams[1]} paramRight = {funcParams[2]} />
        });
    },

    render: function() {
        var functionCalls = this.renderFunctionList(this.state.expressionList);
        return (
            <div className="andExpression">{functionCalls}</div>
        );
    },
});

//var LogicalExpressionComponent = React.createFactory(FunctionComponentFactory);