var expressionList = [
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.age",
                        "girl.age"
                    ]
                },
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.name",
                        "girl.age"
                    ]
                },
                {
                    "FUNC_CALL": [
                        "equal",
                        "boy.name",
                        "'John'"
                    ]
                }
            ];

var functionComponent = React.render(
  <LogicalExpressionComponent type="AND_EXPRESSION" expressionList={expressionList}/>,
  document.getElementById('container')
);

var generateExpressionButton = document.getElementById('generateButton');

generateExpressionButton.onclick = function (e) {
  document.getElementById('expression').textContent = functionComponent.getExpression();
};
