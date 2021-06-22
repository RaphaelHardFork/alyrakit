export const styles = {
  global: (props) => ({
    "html, body": {
      color: "red.800",
      bg: props.colorMode === "light" ? "white" : "teal.800",
    },
  }),
}
