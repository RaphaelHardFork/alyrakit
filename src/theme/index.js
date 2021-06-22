import { extendTheme } from "@chakra-ui/react"
import { fonts } from "./foundations/fonts"
import { Badge } from "./components/Badge"
import { styles } from "./styles"

const overrides = {
  styles,
  fonts,
  components: { Badge },
}

export default extendTheme(overrides)
