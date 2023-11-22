import { extendTheme } from "@chakra-ui/react"

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
}

const styles = {
  global: {
    h1: {
      fontSize: "3xl",
      fontWeight: "bold",
    },
    h2: {
      fontSize: "2xl",
      fontWeight: "bold",
    },
    h3: {
      fontSize: "lg",
      fontWeight: "bold",
    },
    h4: {
      fontSize: "md",
      fontWeight: "bold",
    },
  },
}

const theme = extendTheme({ config, styles })

export { theme }
