import Form from "./Form"
import {
  Text,
  Button,
  Center,
  Container,
  useDisclosure,
} from "@chakra-ui/react"

const Sample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div id="sample">
      <Container>
        <Text fontSize="xl" mb="6" textAlign="center">
          Using AlyraKit to build your site means never worrying about designing
          another page or cross browser compatibility. Our ever-growing library
          of components and pre-designed layouts will make your life easier.
        </Text>
        <Center>
          <Button onClick={onOpen} colorScheme="teal" size="lg">
            Download a Sample
          </Button>
        </Center>
        <Form isOpen={isOpen} onClose={onClose} />
      </Container>
    </div>
  )
}

export default Sample
