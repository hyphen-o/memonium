import { StatLength } from "@/components/stat"
import { useLocalStorage } from "@/hooks/storage"
import { Flex, Textarea } from "@chakra-ui/react"
import React from "react"
import ResizeTextArea from "react-textarea-autosize"
import { ModalClear } from "@/components/modal"

export const Editor = () => {
  const { storedValue, setText, clearText } = useLocalStorage()

  return (
    <>
      <Flex>
        <StatLength length={storedValue.length} />
        <ModalClear handleModal={clearText} />
      </Flex>
      <Textarea
        as={ResizeTextArea}
        border={"solid 2px gray"}
        minH={"unset"}
        minRows={10}
        mt={"5px"}
        placeholder={"text"}
        resize={"none"}
        transition={"height .2s"}
        value={storedValue}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)}
      />
    </>
  )
}
