import { FormControl, FormLabel, Switch, Text } from "@chakra-ui/react"
const PricingSwitch = ({ onChange }) => {
  return (
    <FormControl display="flex" alignItems="center">
      <FormLabel htmlFor="pricing-option" mb="0">
        Enable{" "}
        <Text textTransform="uppercase" as="span">
          monthly
        </Text>
        pricing
      </FormLabel>
      <Switch id="pricing-option" colorScheme="teal" onChange={onChange} />
    </FormControl>
  )
}

export default PricingSwitch
