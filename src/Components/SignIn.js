import { Button, Divider, PasswordInput, Text, TextInput } from "@mantine/core";
import Simbolo from "../images/Simbolo.svg";
import Logotipo from "../images/Logotipo.svg";
import Google from "../images/Google.svg";
import Facebook from "../images/Facebook.svg";
import { IconAt } from "@tabler/icons-react";
import { IconAsterisk } from "@tabler/icons-react";
import { useNavigate } from "react-router-dom";
import { useForm } from "@mantine/form";

function SignIn() {
  const form = useForm({
    initialValues: { email: "", password: "" },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Email invalido"),
      password: (value) =>
        value.length < 8 ? "La contraseña  debe ser mayor a 8" : null,
    },
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(form.values.email)
    navigate("/seleccionDeUsuario");
  };

  return (
    <div className="loginContent">
      <div className="contentForm">
        <div className="headerLogin">
          <div className="branding-caskarapp">
            <img src={Simbolo} alt="Simbolo caskarapp" />
            <img src={Logotipo} alt="Logotipo caskarapp"></img>
          </div>
        </div>
        <div className="bodyRight">
          <div className="login">
            <div className="titleDescription">
              <Text className="textIniciaSesion">Inicia Sesión</Text>
              <Text className="textindicaciones">
                Continua con tu cuenta de Google, Facebook o ingresa tus datos
              </Text>
            </div>
            <div className="groupButton">
              <Button
                className="BotonGoogle"
                color="dark"
                size="md"
                radius="md"
                leftIcon={
                  <img src={Google} alt="Google" height="18px" width="18px" />
                }
              >
                Iniciar sesión con Google
              </Button>
              <Button
                className="BotonGoogle"
                color="dark"
                size="md"
                radius="md"
                leftIcon={
                  <img src={Facebook} alt="Google" height="18px" width="18px" />
                }
              >
                Iniciar sesión con Facebook
              </Button>
            </div>
            <div className="divider">
              <Divider
                size="xs"
                label="O"
                labelPosition="center"
                labelProps={{ color: "#868E96" }}
                color="#868E96"
              />
            </div>
            <form
              className="divFormLogin"
              onSubmit={form.onSubmit(handleSubmit)}
            >
              <div className="InputWrapper">
                <label>
                  <span className="InputLabel">Correo</span>
                </label>
                <TextInput
                  name="email"
                  {...form.getInputProps("email")}
                  className="InputCorreo"
                  placeholder="hola@correo.com"
                  radius="md"
                  size="md"
                  icon={<IconAt size="16px" color="#5C5F66" />}
                />
              </div>
              <div className="InputWrapper">
                <label>
                  <span className="InputLabel">Contraseña</span>
                </label>
                <PasswordInput
                  {...form.getInputProps("password")}
                  className="InputContraseña"
                  placeholder="********"
                  radius="md"
                  size="md"
                  icon={<IconAsterisk size="16px" color="#5C5F66" />}
                />
              </div>
              <Button variant="iniciarSesion" type="submit">Iniciar sesión</Button>
            </form>
            <div className="divNoCount">
              <Text className="textNoCount">¿No tienes cuenta?</Text>
              <a href="/">
                <Text className="LinkNoTienesCuenta">Crea una</Text>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContent"></div>
    </div>
  );
}

export default SignIn;
