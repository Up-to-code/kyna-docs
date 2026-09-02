/**
 * A comprehensive Prism grammar for the Kyna language.
 *
 * Registered as `kyna` and `ky`. Covers the full keyword set, built-in types,
 * standard-library builtins, functions (declarations & calls), strings,
 * numbers (dec/hex/bin/float), comments (# and //), and operators.
 */

export default function (Prism) {
  if (!Prism) return;

  const kyna = {
    comment: [
      {
        pattern: /(^|[^\\])#.*/,
        lookbehind: true,
        greedy: true,
      },
      {
        pattern: /(^|[^\\])\/\/.*/,
        lookbehind: true,
        greedy: true,
      },
      {
        pattern: /\/\*[\s\S]*?(?:\*\/|$)/,
        greedy: true,
      },
    ],
    string: {
      pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
      greedy: true,
    },
    'class-name': [
      {
        pattern: /(\b(?:class|intf|interface|extends|implements|new|struct|enum)\s+)[A-Za-z_]\w*/,
        lookbehind: true,
      },
      /\b[A-Z][A-Za-z0-9_]*\b/,
    ],
    keyword: /\b(?:var|const|fn|func|let|set|class|intf|interface|if|else|while|loop|for|in|break|continue|switch|case|default|await|async|match|try|catch|finally|throw|import|export|from|as|return|new|init|self|super|this|override|implements|extends|public|private|protected|static|type|struct|enum|yield)\b/,
    boolean: /\b(?:true|false)\b/,
    type: /\b(?:int|float|str|string|bool|boolean|null|nil|num|any|void|never|list|map|set|array|dict|Result|Option|Promise|Task)\b/,
    builtin: /\b(?:print|println|log|len|typeOf|error|call|push|pop|keys|values|unique|sort|bubbleSort|createQueue|enqueue|dequeue|peekQueue|queueIsEmpty|map|filter|reduce|find|any|all|fetch|fetchResult|httpGet|httpPost|http|parseIP|jsonParse|jsonStringify|tomlParse|tomlStringify|xmlParse|xmlStringify|textLower|textUpper|textTrim|textSplit|textReplace|textFind|textContains|textSlice|readFile|writeFile|readJsonFile|writeJsonFile|copyFile|createDirectory|fileExists|listDirectory|removePath|processEnv|processRun|build|osName|osArchitecture|osWorkingDirectory|terminalIsInteractive|terminalSupportsColor|clockMs|timeNow|timeSleep|cryptoSha256|measure|profileLog|sleep|wait|collectGarbage|gcStats|createApiStore|slogInfo|slogWarn|slogError|slog)\b/,
    function: [
      {
        pattern: /(?<=\b(?:fn|func)\s+)[A-Za-z_]\w*/,
        lookbehind: false,
      },
      /\b[A-Za-z_]\w*(?=\s*\()/,
    ],
    number: [
      /\b0x[0-9a-fA-F]+(?:_[0-9a-fA-F]+)*\b/,
      /\b0b[01]+(?:_[01]+)*\b/,
      /\b0o[0-7]+(?:_[0-7]+)*\b/,
      /\b\d+(?:_\d+)*(?:\.\d+(?:_\d+)*)?(?:[eE][+-]?\d+(?:_\d+)*)?\b/,
    ],
    operator: /=>|->|:=|::|\?\?|\?|:|\+\+|--|&&|\|\||[!=]==?|[<>]=?|[+\-*/%]=?|[+\-*/%&|^~=<>!]/,
    punctuation: /[{}[\];(),.:]/,
  };

  Prism.languages.kyna = kyna;
  Prism.languages.ky = kyna;

  return kyna;
}
