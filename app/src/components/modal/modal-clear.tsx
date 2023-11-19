import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from '@chakra-ui/react'

type ModalClearProps = {
  handleModal: () => void
}

export const ModalClear = ({ handleModal }: ModalClearProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button bg={"red.500"} mt={"5px"} onClick={onOpen}>Clear</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Really?</ModalHeader>
          <ModalCloseButton />
          <ModalFooter>
            <Button variant='ghost' bg={"red.500"} onClick={() => {
              handleModal()
              onClose()
            }}>Clear</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}