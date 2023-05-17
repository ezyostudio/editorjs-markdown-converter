<h3 align="center">EditorJS Markdown Converter</h3>

<p align="center">
A data model converter between Markdown string and EditorJS data blocks.
</p>

## Table of Contents

- [About the Project](#about-the-project)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About The Project

This is a converter between markdown string and EditorJS data blocks. Not plugins for EditorJS, it's just a tool.

### Built With

- [Remark](https://remark.js.org/)

## Getting Started

To get a local copy up and running follow these simple steps.

## Usage

- Load up the bundled file (`dist/index.js`) in you document.
- Use it where you need to convert

```js
// to markdown string
EditorJSMarkdownConverter.toMarkdown(data = OutputData['blocks'])

// markdown to blocks
EditorJSMarkdownConverter.toBlocks(data = Markdown String)

```

### Prerequisites

- yarn

### Installation

1. Clone the repo

```sh
git clone https://github.com/stejul/editorjs-markdown-parser
```

2. Install packages

```sh
yarn
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Acknowledgements

- [Lukas Gabsi](https://github.com/gabsii) - Helped me with his JS expertise
