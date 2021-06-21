import { useState } from "react"
import PricingSwitch from "./PricingSwitch"
import {
  Box,
  Container,
  Heading,
  Text,
  Flex,
  Badge,
  Center,
  List,
  ListItem,
  ListIcon,
  Button,
} from "@chakra-ui/react"

import { CheckCircleIcon } from "@chakra-ui/icons"

const Pricing = () => {
  const config = {
    yearly: 29,
    monthly: 49,
  }
  const list = [
    "Rich, responsive landing pages",
    "100+ styled components",
    "Flexible, simple license",
    "Speedy build tooling",
    "6 months free support included",
  ]
  const [price, setPrice] = useState(config.yearly)
  const handleSwitchChange = (e) => {
    if (e.target.checked) {
      setPrice(config.monthly)
    } else {
      setPrice(config.yearly)
    }
  }

  return (
    <>
      <Box as="section" bg="gray.50" id="pricing" py="20">
        <Container maxW="container.md">
          <Heading mb="6" textAlign="center">
            Fair, simple pricing for all
          </Heading>
          <Text mb="6" maxW="60ch" fontSize="lg" textAlign="center">
            All types of businesses need access to development resources, so we
            give you the option to decide how much you need to use.
          </Text>
          <PricingSwitch onChange={handleSwitchChange} />
          <Flex d={["block", null, "flex"]} alignItems="center">
            <Box bg="white" shadow="lg" flex="1" zIndex="1" mb={[6, 6, 0]}>
              <Center pt="6">
                <Badge>Standard</Badge>
              </Center>
              <Center>
                <Text as="b" fontSize="6xl">
                  {price}
                </Text>
                /mo
              </Center>
              <List spacing="3" p="6">
                {list.map((elem, index) => {
                  return (
                    <ListItem key={index}>
                      <ListIcon color="teal.300" as={CheckCircleIcon} />
                      {elem}
                    </ListItem>
                  )
                })}
              </List>
              <Button
                size="lg"
                borderRadius="0"
                isFullWidth={true}
                colorScheme="teal"
              >
                Get it now
              </Button>
            </Box>
            <Box bg="white" shadow="lg" flex="1">
              <Center pt="6">
                <Badge>Entreprise</Badge>
              </Center>
              <Text textAlign="center" fontSize="xl" p="6">
                We offer variable pricing with discounts for larger
                organizations. Get in touch with us and we’ll figure out
                something that works for everyone.
              </Text>
              <p></p>
              <Button
                size="lg"
                borderRadius="0"
                isFullWidth={true}
                colorScheme="teal"
              >
                Contact us
              </Button>
            </Box>
          </Flex>
        </Container>
      </Box>
    </>
  )
}

export default Pricing
