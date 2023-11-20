import { Heading, Divider } from "@chakra-ui/react"
import { useLocalStorage } from "@/hooks/storage"
import { parseMarkedHtml } from "@/utils"

export const Preview = () => {
  const { storedValue } = useLocalStorage()
  const html = parseMarkedHtml(storedValue)
  return (
    <>
      <Heading fontSize={"24px"} my={"20px"}>
        Preview
      </Heading>
      <Divider />
      <div dangerouslySetInnerHTML={html}></div>
    </>
  )
}
