import { useState } from "react"
import {
  Modal,
  ModalBody,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalFooter,
  Button,
  FormControl,
  FormLabel,
  Input,
  Alert,
  AlertIcon,
} from "@chakra-ui/react"

const Form = ({ isOpen, onClose }) => {
  const [sampleRequest, setSampleRequest] = useState(false)
  const handleFormSubmit = (e) => {
    e.preventDefault()
    // get the data
    // do sth with the data
    setSampleRequest(true)
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Title</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {!sampleRequest ? (
            <>
              <FormControl onSubmit={handleFormSubmit} id="name">
                <FormLabel>Your name</FormLabel>
                <Input id="name" placeholder="Joe Doe" required />
              </FormControl>
              <FormControl id="e-mail">
                <FormLabel>Your e-mail</FormLabel>
                <Input id="e-mail" placeholder="Joe@Doe.com" required />
              </FormControl>
            </>
          ) : (
            <Alert>
              <AlertIcon />
              Thank you! You will receive your sample soon!
            </Alert>
          )}
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" type="submit">
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default Form
