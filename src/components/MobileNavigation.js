import { Box, useDisclosure, Button, Fade, IconButton } from "@chakra-ui/react"
import { HamburgerIcon } from "@chakra-ui/icons"

const MobileNavigation = ({ children }) => {
  const { isOpen, onToggle } = useDisclosure()
  return (
    <>
      <Button
        as={IconButton}
        icon={<HamburgerIcon />}
        variant="outline"
        onClick={onToggle}
      ></Button>
      <Box
        shadow="md"
        position="absolute"
        left="0"
        right="0"
        top="100%"
        bg="whiteAlpha.800"
      >
        <Fade unmountOnExit={true} in={isOpen}>
          <Box p="4">{children}</Box>
        </Fade>
      </Box>
    </>
  )
}

export default MobileNavigation
