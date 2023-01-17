import Layout from "../components/Layout";
import Formulario from "./formulario";
import emailjs from "@emailjs/browser";

const contacto = () => {
  const sendEmail = (events) => {
    events.preventDefault();

    emailjs
      .sendForm(
        "service_uh6kp5d",
        "template_qevz07j",
        events.target,
        "muy5CcfUmuGumCpmY"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <Layout title="Contactos" footer={false} light>
      <Formulario />
    </Layout>
  );
};

export default contacto;
