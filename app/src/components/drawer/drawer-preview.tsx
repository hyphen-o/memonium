import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react"
import { Preview } from "@/components/preview"
import { ViewIcon } from "@chakra-ui/icons"

export const DrawerPreview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button
        bgColor={"teal.500"}
        borderBottomRightRadius={0}
        borderTopRightRadius={0}
        h={"20rem"}
        position={"absolute"}
        right={"0"}
        top={"50vh"}
        transform={"translateY(-10rem)"}
        onClick={onOpen}
      >
        <ViewIcon />
      </Button>
      <Drawer isOpen={isOpen} placement='right' size={"lg"} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Preview</DrawerHeader>

          <DrawerBody>
            <Preview />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
