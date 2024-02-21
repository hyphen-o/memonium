import { StatLength } from "@/components/stat"
import { useLocalStorage } from "@/hooks/storage"
import { Flex, Textarea } from "@chakra-ui/react"
import React from "react"
import ResizeTextArea from "react-textarea-autosize"
import { ModalClear } from "@/components/modal"
import { countGrapheme } from "@/utils"

export const Editor = () => {
  const { storedValue, setText, clearText } = useLocalStorage()

  return (
    <>
      <Flex>
        <StatLength length={countGrapheme(storedValue)} />
        <ModalClear handleModal={clearText} />
      </Flex>
      <Textarea
        _focusVisible={{
          border: "none",
          borderTop: "solid 2px gray",
          borderBottom: "solid 2px gray",
        }}
        as={ResizeTextArea}
        border={"none"}
        borderBottom={"solid 2px gray"}
        borderRadius={0}
        borderTop={"solid 2px gray"}
        minH={"unset"}
        minRows={10}
        mt={"5px"}
        outline={"none"}
        placeholder={"text"}
        resize={"none"}
        transition={"height .2s"}
        value={storedValue}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>): void => setText(e.target.value)}
      />
    </>
  )
}
