## Wasm

[WebAssembly][1] (or Wasm) is a new portable, size as well as load-time efficient format suitable for compilation to the web. It is meant to execute code as nearly as fast as native machine code. Till now, we had been using [JavaScript][2] as the primary programming language in browsers for web development but it is not a compiled language and thus doesn't provide as much effieciency in terms of speed as compiled ones do! With WebAssembly, one can implement performance critical stuff & import it like a standard JavaScript module. Thus, WebAssembly is not meant to replace JS but to complement it wherever and whenever necessary.

## Pros

#### Languages Supported

- C/C++ (production ready support)
- Rust (good support)
- Java, C# (experimental support)

#### Advantages

- Efficient & Fast
- Safe
- Open & Debuggable
- Open Web Platform

## And JS?

**We need WebAssembly** because as flexible as JavaScript is, it’s still too hard to express many of the things we may want to in JavaScript, and the features we would need to make it easy might add complexity to a language that already confuses many users.

## Future

Wasm is a Google, Microsoft, Apple & Mozilla initiave that is intended to build a faster web. It's all open source so hop in, just read the docs & get started. Here's some useful resources:

- [Community Group][3]
- [GitHub Repo][4]


[1]: https://webassembly.org/
[2]: https://en.wikipedia.org/wiki/JavaScript
[3]: https://www.w3.org/community/webassembly/
[4]: https://github.com/WebAssembly