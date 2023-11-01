import { Text, Box, Center, Heading, FormControl, FormControlLabel, FormControlLabelText } from "@gluestack-ui/themed"

export default function App() {
  return (
      <Box bg="$primary100" p="$2" h={200} w={300}>
        <Center h={"$full"}>
          <Heading>Peso Ideal</Heading>
          <FormControl>
            <FormControlLabel>
              <FormControlLabelText>
                Peso
              </FormControlLabelText>
            </FormControlLabel>
          </FormControl>
        </Center>
      </Box>
  )
}