import Link from "next/link";
import Layout from "../components/Layout";
import { skills, experiences, projects } from "../profile";

const Index = () => (
  <Layout>
    {/**Header card */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="pablitoObelar.png"
                alt=""
                className="img-fluid"
                style={{
                  width: "250px",
                  height: "250px",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="col-md-8">
              <h1>Pablo Obelar</h1>
              <h3>FullStack Developer</h3>
              <p>
                Desde adolescente que me interese en el mundo de la informática,
                por curiosidad y por pasión. Con el tiempo tuve la oportunidad
                de aprender primero de modo autodidacta y luego tuve la
                posibilidad de hacer un curso en "ItMaster" para refinar mis
                conocimientos. Actualmente busco poder seguir aprendiendo en
                este maravilloso mundo.
              </p>
              <a href="contacto">Contratame</a>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/**Segunda seccion */}

    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Skills</h1>

            {skills.map(({ skill, percentage }, i) => (
              <div className="py-3" key={i}>
                <h5>{skill}</h5>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Estudios</h1>

            <ul>
              {experiences.map(
                ({ title, from, to, description, image }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>

                    <h5>
                      {from} - {to}
                    </h5>
                    <p>{description}</p>

                    <img
                      src={`/${image}`}
                      className="card-img-top py-2"
                      style={{ width: "200px" }}
                      alt={title}
                    />
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
    {/**Portfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-dark">
          <div className="row">
            <div className="col-md-12">
              <h1 className="text-center text-light">Portfolio</h1>
            </div>

            {projects.map(
              ({ name, description, image, url, developing }, index) => (
                <div className="col-md-4 py-2" key={index}>
                  <div className="card h-100">
                    <div className="overflow">
                      <img
                        src={`/${image}`}
                        className="card-img-top"
                        alt={name}
                      />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <p>{developing}</p>
                      <Link href={url} target="_blank">
                        Link Proyecto
                      </Link>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Index;
