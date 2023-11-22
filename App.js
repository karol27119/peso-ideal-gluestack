import { Text, Box, Heading, Center } from '@gluestack-ui/themed';

export default function App() {
  return (
    <Box h={'$full'} w={'$full'} display='flex' justifyContent='center' alignItems='center'>
      <Box bg='$amber400' p="$2" >
        <Heading>PESO IDEAL</Heading>
        <Text>Altura</Text>
      </Box>
    </Box>

  );
}