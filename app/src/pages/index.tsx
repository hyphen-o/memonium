import { ContainerApp } from "@/components/container"
import { DrawerPreview } from "@/components/drawer"
import { Editor } from "@/components/editor"
import { Header } from "@/components/header"

const Index = () => {
  return (
    <>
      <ContainerApp>
        <Header />
        <Editor />
        <DrawerPreview />
      </ContainerApp>
    </>
  )
}

export default Index
