import { Divider } from "@chakra-ui/react"
import { useLocalStorage } from "@/hooks/storage"
import { parseMarkedHtml } from "@/utils"

export const Preview = () => {
  const { storedValue } = useLocalStorage()
  const html = parseMarkedHtml(storedValue)

  return (
    <>
      <Divider mb={"1.5rem"} />
      <div dangerouslySetInnerHTML={html}></div>
    </>
  )
}
