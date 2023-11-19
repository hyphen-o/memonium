import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"

const Memonium = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider resetCSS={true}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default Memonium
