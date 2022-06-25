function debugOperator() {
  const operators = [
    { operator: "( )", description: "Expression grouping", example: "(3+4)" },
    { operator: ".", description: "Member", example: "user.name" },
    { operator: "[]", description: "Member", example: "user['name']" },
    { operator: "()", description: "Function call", example: "yourFunction()" },
    { operator: "new", description: "Create", example: "new Date()" },
    { operator: "!", description: "Logical not", example: "!(x==y)" },
    { operator: "typeof", description: "Type", example: "typeof x" },
    {
      operator: "instanceof",
      description: "Instance of Object",
      example: "instanceof Array",
    },
    {
      operator: "in",
      description: "Property in Object",
      example: "'PI' in Math",
    },
    { operator: "??", description: "Nullish Coalescing", example: "x ?? y" },
    {
      operator: "?:",
      description: "Condition ternary",
      example: "?'Yes':'No'",
    },
    { operator: "==", description: "Equal", example: "x == y" },
    { operator: "===", description: "Strict equal", example: "x === y" },
    { operator: "!=", description: "Unequal", example: "x!=y" },
    { operator: "!==", description: "Strict unequal", example: "x!==y" },
  ];
  console.table(operators);
}

module.exports = debugOperator;
