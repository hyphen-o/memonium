import { StatLength } from "@/components/stat"
import { useStorage } from "@/hooks/storage"
import { Textarea } from "@chakra-ui/react"
import React from "react"
import ResizeTextArea from "react-textarea-autosize"
import { ModalClear } from "@/components/modal"

export const Editor = () => {
  const { localText, setText, clearText } = useStorage()

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
      <StatLength length={localText.length} />
      <Textarea
        as={ResizeTextArea}
        border={"solid 2px gray"}
        minH={"unset"}
        minRows={10}
        mt={"5px"}
        placeholder={"text"}
        resize={"none"}
        transition={"height .2s"}
        value={localText}
        onChange={handleTextChange}
      />
      <ModalClear handleModal={clearText} />
    </>
  )
}
