import { Button, Card, Header, Text } from "@mantine/core";
import Simbolo from "../images/Simbolo.svg";
import SimboloOrganizador from "../images/SimboloOrganizador.svg";
import SimboloJugador from "../images/SimboloJugador.svg";
import Logotipo from "../images/Logotipo.svg";
import "../Styles/seleccionUsuarioStyles.css";

function SeleccionUsuario(props) {
  const { createRolUser } = props;

  const btnOrganizador = (value) => {
    createRolUser(value);
  };

  return (
    <div className="SeleccionUsuarioContainer">
      <Header className="HeaderCascarapp">
        <div className="branding-caskarapp">
          <img src={Simbolo} alt="Simbolo caskarapp" />
          <img src={Logotipo} alt="Logotipo caskarapp"></img>
        </div>
      </Header>
      <div className="contentMain">
        <div className="ContentForm">
          <div className="TipoUsuario">
            <Text className="titleSelection">¿Que tipo de usuario eres?</Text>
            <Text className="dUsuario">
              Cuéntanos de que manera te quieres involucrar en el torneo
            </Text>
          </div>
          <div className="ContainerCards">
            <Card className="cardRol" shadow="md">
              <div className="headerCard organizer">
                <img src={SimboloOrganizador} alt="Simbolo Organizador" />
                <Text className="descriptionCard descriptionOrg">
                  El Organizador es el dueño de la pelota, el que arma las
                  retas.
                </Text>
              </div>
              <form className="bodyCard">
                <div className="contentDescription">
                  <h5 className="titleCard">Organizador</h5>
                  <Text className="descriptionRol">
                    Crea torneos, administra equipos, calendariza partidos y
                    registra resultados.
                  </Text>
                </div>
                <Button
                  radius="md"
                  size="sm"
                  className="btnElegir"
                  value="Organizador"
                  onClick={(e) => btnOrganizador("Organizador")}
                >
                  Elegir
                </Button>
              </form>
            </Card>
            <Card className="cardRol" shadow="md">
              <div className="headerCard jugador">
                <img src={SimboloJugador} alt="Simbolo Organizador" />
                <Text className="descriptionCard descriptionJug">
                  El jugador es el centro del espectáculo.
                </Text>
              </div>
              <div className="bodyCard">
                <div className="contentDescription">
                  <h5 className="titleCard">Jugador</h5>
                  <Text className="descriptionRol">
                    Únete a un equipo, para estar al tanto de lo que pasa en el
                    torneo.
                  </Text>
                </div>
                <Button
                  radius="md"
                  size="sm"
                  className="btnElegir"
                  onClick={(e) => btnOrganizador("Jugador")}
                >
                  Elegir
                </Button>
              </div>
            </Card>
          </div>
          <Text className="legend">Esto lo puedes cambiar más adelante</Text>
        </div>
      </div>
    </div>
  );
}
export default SeleccionUsuario;
