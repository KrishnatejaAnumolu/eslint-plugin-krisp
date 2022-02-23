module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of styled prefix when declaring variables",
    },
    messages: {
      noStyled:
        "Name of the components should be based on their usage, not their styles. '{{name}}' is not a recommended naming convention",
    },
  },
  create(context) {
    return {
      VariableDeclaration(node) {
        if (
          node.declarations[0].id.name &&
          node.declarations[0].id.name.toLowerCase().includes("styled")
        ) {
          return context.report({
            node,
            messageId: "noStyled",
            data: { name: node.declarations[0].id.name },
          });
        }
        return null;
      },
    };
  },
};
