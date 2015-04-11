var functionComponent = React.render(
  <FunctionComponent parseTree={["contains", "bankTransaction.amount", "journal.amount"]}/>,
  document.getElementById('container')
);

var generateExpressionButton = document.getElementById('generateButton');

generateExpressionButton.onclick = function (e) {
  document.getElementById('expression').textContent = functionComponent.getExpression();
};
