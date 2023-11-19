import { ContainerApp } from "@/components/container"
import { Editor } from "@/components/editor"
import { Header } from "@/components/header"
import {Box} from "@chakra-ui/react"

const Index = () => {
  return (
    <>
      <ContainerApp>
        <Header />
        <Editor />
      </ContainerApp>
    </>
  )
}

export default Index
