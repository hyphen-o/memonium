import { AppProps } from "next/app"
import { ChakraProvider } from "@chakra-ui/react"
import { LocalStorageProvider } from "@/hooks/storage"
import { theme } from "@/theme"

const Memonium = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <LocalStorageProvider>
        <Component {...pageProps} />
      </LocalStorageProvider>
    </ChakraProvider>
  )
}

export default Memonium
