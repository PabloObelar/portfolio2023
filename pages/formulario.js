import { Formik, Field, ErrorMessage } from "formik";
import { useState } from "react";

const Formulario = () => {
  const [formulario, setFormulario] = useState(false);
  return (
    <>
      <Formik
        initialValues={{
          mensaje: "",
          nombre: "",
          correo: "",
          corre2: "pabloobelar@gmail.com",
        }}
        validate={(valores) => {
          let errores = {};

          if (!valores.nombre) {
            errores.nombre = "Por favor poner un nombre";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.nombre = "El nombre solo puede contener letras y espacios";
          }

          if (!valores.correo) {
            errores.correo = "Por favor ingresar un correo electronico";
          } else if (
            !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-.]+$/.test(valores.correo)
          ) {
            errores.correo =
              "El correo solo puede contener letras, numeros, puntos, guiones y guion bajo";
          }
          if (!valores.mensaje) {
            errores.mensaje = "Por favor poner un comentario";
          } else if (!/^[a-zA-ZÁ-ÿ\s]{1,40}$/.test(valores.nombre)) {
            errores.mensaje =
              "El mensaje solo puede contener letras y espacios";
          }

          return errores;
        }}
        onSubmit={(valores, { resetForm }) => {
          resetForm();

          console.log("Formulario enviado!");
          setFormulario(true);
          setTimeout(() => setFormulario(false), 5000);
        }}
      >
        {/*
        {({ values, errors, handleBlur }) => (
          <Form className="formulario">
            {console.log(errors)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <Field
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre..."
              />

              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
              <div className="col-md-4">
                <label>Mensaje</label>
                <Field
                  name="textarea"
                  cols="40"
                  row="10"
                  style={{ width: "400px", height: "400px" }}
                ></Field>
              </div>
            </div>
            <div>
              <label htmlFor="correo">Tu Email</label>
              <Field type="text" name="correo" id="correo" placeholder="" />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <label htmlFor="corre">Email</label>
              <input
                type="text"
                name="correo"
                id="correo"
                placeholder=""
                value={values.corre2}
                onBlur={handleBlur}
              />
            </div>
        */}

        {({
          values,
          handleSubmit,
          handleChange,
          handleBlur,

          errors,
          touched,
        }) => (
          <form className="formulario" onSubmit={handleSubmit}>
            {console.log(errors)}
            <div>
              <label htmlFor="nombre">Nombre</label>
              <input
                type="text"
                name="nombre"
                id="nombre"
                placeholder="Nombre..."
                value={values.nombre}
                onChange={handleChange}
                onBlur={handleBlur}
              />

              <ErrorMessage
                name="nombre"
                component={() => <div className="error">{errors.nombre}</div>}
              />
            </div>
            <div>
              <Field
                name="mensaje"
                as="textarea"
                placeholder="Mensaje..."
              ></Field>
              <ErrorMessage
                name="mensaje"
                component={() => <div className="error">{errors.mensaje}</div>}
              />
            </div>

            <div>
              <label htmlFor="correo">Tu Email</label>
              <input
                type="text"
                name="correo"
                id="correo"
                placeholder=""
                value={values.correo}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <ErrorMessage
                name="correo"
                component={() => <div className="error">{errors.correo}</div>}
              />
            </div>
            <div>
              <label htmlFor="corre">Email</label>
              <input
                type="text"
                name="correo"
                id="correo"
                placeholder=""
                value={values.corre2}
                onBlur={handleBlur}
              />
            </div>

            <button type="submit">Enviar</button>
            {formulario && (
              <p className="exito">Formulario enviado con exito</p>
            )}
          </form>
        )}
      </Formik>
    </>
  );
};
export default Formulario;
