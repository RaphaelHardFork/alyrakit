import { Box, useColorMode, Button, IconButton } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useEffect } from "react"

const SwitchColorMode = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <>
      <IconButton
        ms="4"
        borderRadius="5"
        variant="outline"
        onClick={toggleColorMode}
        aria-label="Toggle color mode"
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
    </>
  )
}

export default SwitchColorMode
