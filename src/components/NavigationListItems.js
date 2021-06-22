import { Box, List, ListItem, Link } from "@chakra-ui/react"

const NavigationListItems = ({ sx }) => {
  return (
    <List
      sx={{
        textTransform: "uppercase",
        a: { p: 3, display: "inline-block" },
        ...sx,
      }}
    >
      <ListItem>
        <Link href="/">Sample</Link>
      </ListItem>
      <ListItem>
        <Link href="/">Pricing</Link>
      </ListItem>
      <ListItem>
        <Link fontWeight="bold" href="/">
          Buy now
        </Link>
      </ListItem>
    </List>
  )
}

export default NavigationListItems
