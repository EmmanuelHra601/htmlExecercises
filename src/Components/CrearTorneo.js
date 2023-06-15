import { Header, Stepper } from "@mantine/core";
import Simbolo from "../images/Simbolo.svg";
import Logotipo from "../images/Logotipo.svg";
import { useState } from "react";
import FormCrearTorneo from "./FormCrearTorneo";
import FormRegistrarCancha from "./FormRegistrarCancha";
import '../Styles/torneoStyles.css'
import '../Styles/stepperStyles.css'
import '../Styles/inputStyles.css'

function CrearTorneo() {
  const [active, setActive] = useState(0);
  const nextStep = () =>
    setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () =>
    setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div className="divCrearTorneo">
      <Header className="HeaderCascarapp">
        <div className="branding-caskarapp">
          <img src={Simbolo} alt="Simbolo caskarapp" />
          <img src={Logotipo} alt="Logotipo caskarapp"></img>
        </div>
      </Header>
      <div className="divContentStepper">
        <Stepper
          active={active}
          onStepClick={setActive}
          breakpoint="xs"
          radius="md"
          size="md"
        >
          <Stepper.Step label="Crear Torneo" description="Description">
            <FormCrearTorneo nextStep={nextStep} prevStep={prevStep} />
          </Stepper.Step>
          <Stepper.Step label="Registrar Cancha" description="Description">
            <FormRegistrarCancha nextStep={nextStep} prevStep={prevStep} />
          </Stepper.Step>
          <Stepper.Step
            label="Registrar Equipos"
            description="Description"
          ></Stepper.Step>
          <Stepper.Step
            label="¡Listo!"
            description="Description"
          ></Stepper.Step>
          <Stepper.Completed></Stepper.Completed>
        </Stepper>
      </div>
    </div>
  );
}

export default CrearTorneo;
