import monitor from "../assets/monitor.svg"
import { Container, Heading, Text, Button, Box, Stack } from "@chakra-ui/react"

const Header = () => {
  return (
    <Container as="header" maxW="container.lg" pt="28" pb="10">
      <Stack direction={["column-reverse", null, "row"]} sx={{ gap: "2rem" }}>
        <Box>
          <Heading as="h1" mb="6">
            Welcome to{" "}
            <Text as="span" color="teal">
              Alyrakit
            </Text>
            Develop anything.
          </Heading>
          <Text fontSize="xl" mb="6">
            Build a beautiful, modern website with React and Chakra UI.
          </Text>
          <Button as="a" href="#buy-now" size="lg" colorScheme="teal">
            Buy it now
          </Button>
        </Box>
        <Box>
          <img
            src={monitor}
            alt="Illustration with a computer on the desk"
            width="500"
            height="378"
          />
        </Box>
      </Stack>
    </Container>
  )
}

export default Header
