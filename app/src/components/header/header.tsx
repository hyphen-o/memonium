import { Box, Text, Heading, Flex, useColorMode } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { VERSION } from "@/constants"

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Flex align={"center"} justify={"center"} py={"30px"}>
      <Heading>MEMONIUM</Heading>
      <Text mr={"20px"} mt={"auto"}>
        v{VERSION}
      </Text>
      <Box cursor={"pointer"} onClick={toggleColorMode}>
        {colorMode == "dark" ? <SunIcon /> : <MoonIcon />}
      </Box>
    </Flex>
  )
}
