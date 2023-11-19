import { StatLength } from "@/components/stat"
import { useStorage } from "@/hooks/storage"
import { Textarea } from "@chakra-ui/react"
import React from "react"
import ResizeTextArea from "react-textarea-autosize"
import { ModalClear } from "@/components/modal"

export const Editor = () => {
  const {localText, setText, clearText} = useStorage()

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  return (
    <>
      <StatLength length={localText.length}/>
      <Textarea 
      value={localText} 
      onChange={handleTextChange} 
      resize={"none"}
      minH={"unset"}
      placeholder={"text"} 
      mt={"5px"}
      minRows={10}
      as={ResizeTextArea}
      border={"solid 2px gray"}
      transition={"height .2s"}
      />
      <ModalClear handleModal={clearText}/>
    </>
  )
}
