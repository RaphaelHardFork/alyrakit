import working from "../assets/working.svg"
import {
  Box,
  Image,
  Heading,
  List,
  ListItem,
  ListIcon,
  Flex,
} from "@chakra-ui/react"
import { CheckCircleIcon } from "@chakra-ui/icons"

const ListFeatures = () => {
  const list = [
    "Lifetime updates",
    "Tons of assets",
    "Tech support",
    "Integration ready",
  ]
  return (
    <Flex
      alignItems="center"
      flexDirection={{ base: "column", lg: "row" }}
      bg="gray.50"
      py="20"
    >
      <Box px="5">
        <Image
          h="295"
          w="400"
          src={working}
          alt="Illustration with a computer on the desk"
        />
      </Box>
      <Flex p="5" flexDirection="column">
        <Heading>The most useful resource ever created for designers</Heading>
        <List
          gridGap="1"
          gridTemplateColumns="1fr 1fr"
          display="grid"
          spacing={3}
          p="6"
        >
          {list.map((el, index) => {
            return (
              <>
                <ListItem mt="auto" key={index}>
                  <ListIcon as={CheckCircleIcon} color="teal.300" />
                  {el}
                </ListItem>
              </>
            )
          })}
        </List>
      </Flex>
    </Flex>
  )
}

export default ListFeatures
