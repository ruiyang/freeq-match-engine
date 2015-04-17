var FunctionParameters = {
  getSourceFields: function () {
    return  ["boy.age", "boy.name"]; //["bankTransaction.description", "bankTransaction.date", "bankTransaction.amount"];
  },

  getTargetFields: function () {
    return ["girl.age", "girl.name"]; // ["journal.description", "journal.amount"];
  }
}
