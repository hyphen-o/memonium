import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "@/theme"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='ja'>
        <Head>
          <title>MEMONIUM v1.1</title>
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
