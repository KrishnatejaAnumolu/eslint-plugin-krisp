var abbreviationsList = [
  "acc",
  "arg",
  "args",
  "arr",
  "attr",
  "attrs",
  "btn",
  "cb",
  "conf",
  "ctx",
  "cur",
  "curr",
  "db",
  "def",
  "dest",
  "dev",
  "dir",
  "dirs",
  "dist",
  "doc",
  "docs",
  "dst",
  "e",
  "el",
  "elem",
  "env",
  "envs",
  "err",
  "ev",
  "evt",
  "ext",
  "exts",
  "fn",
  "func",
  "i",
  "idx",
  "j",
  "len",
  "lib",
  "mod",
  "msg",
  "num",
  "obj",
  "opts",
  "param",
  "params",
  "pkg",
  "prev",
  "prod",
  "prop",
  "props",
  "ref",
  "refs",
  "rel",
  "req",
  "res",
  "ret",
  "retval",
  "sep",
  "src",
  "stdDev",
  "str",
  "tbl",
  "temp",
  "tit",
  "tmp",
  "val",
  "var",
  "vars",
  "ver",
];
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow use of abbreviations",
    },
    messages: {
      noStyled:
        "Abbreviations are not recommended. Try not to use '{{name}}' as a variable name.",
    },
  },
  create(context) {
    return {
      VariableDeclaration(node) {
        if (
          node.declarations[0].id.name &&
          abbreviationsList.some((abbreviation) =>
            node.declarations[0].id.name.toLowerCase().includes(abbreviation)
          )
        ) {
          return context.report({
            node,
            messageId: "noAbbreviations",
            data: { name: node.declarations[0].id.name },
          });
        }
        return null;
      },
    };
  },
};
