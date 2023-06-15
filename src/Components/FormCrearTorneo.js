import { Button, Flex, NativeSelect, Text, TextInput } from "@mantine/core";

function FormCrearTorneo(props) {
  const { nextStep, prevStep } = props;

  return (
    <Flex
      direction="column"
      align="center"
      w="100%"
      maw="464px"
      h="auto"
      gap="56px"
      p="0"
    >
      <Flex
        direction="column"
        /*bg="red"*/
        align="center"
        gap="16px"
        w="100%"
        maw="305px"
        h="57px"
      >
        <Text
          /*bg="blue"*/
          ff="greycliff-cf, sans-serif"
          fs="normal"
          fw="700"
          fz="25px"
          lh="25px"
          c="#0D0D0D"
          w="100%"
          ta="center"
        >
          Crea tu primer torneo
        </Text>
        <Text
          /*bg="green"*/
          ff="greycliff-cf, sans-serif"
          fs="normal"
          fw="500"
          fz="16px"
          lh="16px"
          c="#0D0D0D"
          w="100%"
        >
          Vamos a configurar tu primer competición
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
        /*bg="blue"*/
      >
        <TextInput
          placeholder="Nombre del torneo"
          label="Dale un nombre"
          radius="md"
          size="md"
          w="100%"
        />
        <NativeSelect
          data={[
            { value: "1", label: "Liga" },
            { value: "2", label: "Grupos" },
            { value: "3", label: "Eliminatorias" },
          ]}
          label="¿Cuál es el tipo de competencia?"
          radius="md"
          size="md"
          w="100%"
        />
        <NativeSelect
          data={[
            { value: "1", label: "Sub-15" },
            { value: "2", label: "Sub-16" },
            { value: "3", label: "Sub-17" },
          ]}
          label="Reglamento"
          radius="md"
          size="md"
          w="100%"
        />
      </Flex>
      <Flex
        direction="row"
        justify="end"
        align="flex-start"
        /*bg="red"*/
        w="100%"
        maw="464px"
        h="42px"
        gap="10px"
      >
        <Button
          variant="omit"
          radius="md"
          size="md"
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
          className="btnContinuar"
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

export default FormCrearTorneo;
