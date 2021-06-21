import { Image, Text, Heading, Box } from "@chakra-ui/react"

const Feature = ({ icon, title, text }) => {
  return (
    <Box>
      <Image boxSize="64px" src={icon} alt="" />
      <Heading fontSize="xl" mb="4">
        {title}
      </Heading>
      <Text color="gray.600">{text}</Text>
    </Box>
  )
}

export default Feature
