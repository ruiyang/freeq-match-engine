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

var expressionComponent = React.render(
  <LogicalExpressionComponent type="AND" expression={parserTree}/>,
  document.getElementById('container')
);

var generateExpressionButton = document.getElementById('visualIt');

generateExpressionButton.onclick = function (e) {
  var expression = $('#expression').val();
  $.ajax({
    type: "POST",
    url: "/parse",
    data: JSON.stringify({ rule: expression}),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: function (data) {
      React.render(
          <LogicalExpressionComponent type="AND" expression={data}/>,
        document.getElementById('container')
      );
    }
  })
};
