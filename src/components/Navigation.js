import { Box, Container, Link, useMediaQuery } from "@chakra-ui/react"
import MobileNavigation from "./MobileNavigation"
import NavigationListItems from "./NavigationListItems"
import SwitchColorMode from "./SwitchColorMode"

const Navigation = () => {
  const [isMobile] = useMediaQuery("(max-width: 720px)")
  console.log(isMobile)
  return (
    <Box position="fixed" py="3" w="100%" bg="whiteAlpha.800" zIndex="sticky">
      <Container
        display="flex"
        as="nav"
        maxW="container.lg"
        sx={{ "a:hover": { textDecoration: "none" } }}
        justifyContent="space-between"
      >
        <Link me="auto" href="/" fontWeight="bold" fontSize="2xl">
          Alyrakit
        </Link>
        {isMobile ? (
          <MobileNavigation>
            <NavigationListItems />
          </MobileNavigation>
        ) : (
          <NavigationListItems sx={{ display: "flex" }} />
        )}
        <SwitchColorMode />
      </Container>
    </Box>
  )
}

export default Navigation
