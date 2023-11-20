import { ContainerApp } from "@/components/container"
import { Editor } from "@/components/editor"
import { Header } from "@/components/header"
import { Preview } from "@/components/preview"

const Index = () => {
  return (
    <>
      <ContainerApp>
        <Header />
        <Editor />
        <Preview />
      </ContainerApp>
    </>
  )
}

export default Index
