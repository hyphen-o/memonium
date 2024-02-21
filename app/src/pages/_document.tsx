import { ColorModeScript } from "@chakra-ui/react"
import NextDocument, { Html, Head, Main, NextScript } from "next/document"
import { theme } from "@/theme"
import { VERSION } from "@/constants"

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>MEMONIUM v{VERSION}</title>
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
