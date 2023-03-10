import Layout from "../components/Layout";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_uh6kp5d",
        "template_qevz07j",
        form.current,
        "muy5CcfUmuGumCpmY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <>
      <Layout title="Contactos" footer={false} light>
        <contacto />

        <section>
          <div className="formulario">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="--form-control--card"
            >
              <input
                type="text"
                placeholder="Nombre..."
                name="user_name"
                required
              />
              <input
                type="email"
                placeholder="Email..."
                name="user_email"
                required
              />
              <h4 className="text-center">Comentario</h4>
              <textarea name="user_message" cols="30" rows="10"></textarea>
              <button type="submit">Enviar</button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default contacto;
