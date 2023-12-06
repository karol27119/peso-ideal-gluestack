import { GluestackUIProvider, Text, Box, Center, Heading, FormControl, FormControlLabel, FormControlLabelText, Input, InputField, HStack, Button, ButtonText } from "@gluestack-ui/themed"
import { config } from "@gluestack-ui/config"
import { Switch } from 'react-native';
import { useState } from "react";


export default function Main() {
  const [peso, setPeso] = useState("72")
  const [altura, setAltura] = useState("1.70")
  const [sexo, setSexo] = useState(false)
  const [resultado, setResultado] = useState("")

  const calcularHandle = () => {
    let alturaConvertida = parseInt(altura)
    let result = 0

    if (altura >= 2.2) {
      setResultado("Altura deve ser menor que 2.2")
    }
    if (sexo) {
      result = (62.1 * alturaConvertida) - 44.7
    } else {
      result = (72.7 * alturaConvertida) - 58
    }
    setResultado(Math.round(result))
  }

  const limparHandle = () => {
    setResultado("")
    setSexo(false)
    setPeso("72")
    setAltura("1.70")
  }
  return (
    <GluestackUIProvider config={config}>
      <Box bg="#E2F9B8" p="$7" h={"$full"} w={"$full"}  justifyContent="center" alignItems="center">
        <Heading paddingBottom={15} color="#D16014" >Peso Ideal</Heading>
        <FormControl >
          <FormControlLabel>
            <FormControlLabelText color="#D16014">Peso</FormControlLabelText>
          </FormControlLabel>
          <Input w={"$full"} borderColor="#313715">
            <InputField value={peso} onChangeText={setPeso} keyboardType="numeric" color="#313715"/>
          </Input>
          <FormControlLabel>
            <FormControlLabelText color="#D16014" >Altura</FormControlLabelText>
          </FormControlLabel>
          <Input w={"$full"} borderColor="#313715">
            <InputField value={altura} onChangeText={setAltura} keyboardType="numeric" color="#313715"/>
          </Input>
          <FormControlLabel>
            <FormControlLabelText>Sexo</FormControlLabelText>
          </FormControlLabel>
          <HStack width={"$full"} space="md" justifyContent="center" alignItems="center">
            <FormControlLabelText>Homem</FormControlLabelText>
            <Switch value={sexo} onValueChange={setSexo} />
            <FormControlLabelText>Mulher</FormControlLabelText>
          </HStack>
          <Box justifyContent="space-around" display="flex" flexDirection="row">
            <Button onPress={calcularHandle}>
              <ButtonText>Calcular</ButtonText>
            </Button>
            <Button onPress={limparHandle}>
              <ButtonText>Limpar</ButtonText>
            </Button>
          </Box>
          <Box justifyContent="space-around" alignItems="center" height={100} flexDirection="row" display="flex">
            <Text>Resultado:</Text>
            <Text fontWeight="$bold">{resultado}</Text>
          </Box>
        </FormControl>
      </Box>
    </GluestackUIProvider>
  )
}