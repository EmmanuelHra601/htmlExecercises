import {
  Button,
  Flex,
  NativeSelect,
  NumberInput,
  Text,
  TextInput,
} from "@mantine/core";

function FormRegistrarCancha(props) {
  const { nextStep, prevStep } = props;

  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      maw="464px"
      h="auto"
      gap="56px"
    >
      <Flex
        direction="column"
        align="center"
        gap="16px"
        w="100%"
        h="57px"
        p="0px"
      >
        <Text
          ff="greycliff-cf, sans-serif"
          fs="normal"
          fw="700"
          fz="25px"
          lh="25px"
          w="100%"
          h="25px"
          ta="center"
        >
          Registra una Cancha
        </Text>
        <Text
          ff="greycliff-cf, sans-serif"
          fs="normal"
          fw="500"
          fz="16px"
          lh="16px"
        >
          ¿Dónde se va a jugar tu torneo?
        </Text>
      </Flex>
      <Flex
        direction="column"
        align="flex-start"
        p="0"
        gap="16px"
        w="100%"
        maw="464px"
        h="245px"
      >
        <TextInput
          label="Nombre de la cancha"
          placeholder="Nombre de la cancha"
          radius="md"
          size="md"
          w="100%"
        />
        <TextInput
          placeholder="Ubicación"
          label="Ubicación"
          radius="md"
          size="md"
          w="100%"
        />
        <NumberInput
          defaultValue={1}
          label="¿Cuántos campos tiene tu cancha?"
          max={100}
          min={1}
          radius="md"
          size="md"
          w="100%"
        />
      </Flex>
      <Flex
        direction="row"
        justify="end"
        align="flex-start"
        w="100%"
        h="42px"
        gap="10px"
      >
        <Button
          variant="omit"
          size="md"
          radius="md"
          w="100%"
          maw="95px"
          onClick={prevStep}
        >
          Omitir
        </Button>
        <Button
          variant="continue"
          size="md"
          radius="md"
          w="100%"
          maw="130px"
          onClick={nextStep}
        >
          Continuar
        </Button>
      </Flex>
    </Flex>
  );
}

export default FormRegistrarCancha;
