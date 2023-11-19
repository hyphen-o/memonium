import { Container } from "@chakra-ui/react"
import type { ReactNode } from "react"

type ContainerAppProps = {
  children?: ReactNode
}

export const ContainerApp = ({ children }: ContainerAppProps) => {
  return <Container>{children}</Container>
}
