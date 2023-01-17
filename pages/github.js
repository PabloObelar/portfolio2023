import Layout from "../components/Layout";
import Link from "next/link";
import Error from "./_error";

const Github = ({ user, statusCode }) => {
  if (statusCode) {
    return <Error statusCode={statusCode} />;
  }

  return (
    <Layout footer={false} dark>
      <div className="row">
        <div className="col-md-4 offset-md-4">
          <div className="card card-body text-center">
            <h1>{user.name}</h1>
            <img src={user.avatar_url} alt={user.name} />
            <p>{user.bio}</p>
            <Link
              href={user.blog}
              target="_blank"
              className="btn btn-outline-secondary my-2"
            >
              {" "}
              Facebook
            </Link>
            <Link
              href={user.html_url}
              target="_blank"
              className="btn btn-outline-secondary"
            >
              {" "}
              GitHub
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/PabloObelar");
  const data = await res.json();

  const statusCode = res.status > 200 ? res.status : false;

  console.log(data);
  return {
    props: { user: data, statusCode },
  };
}

export default Github;
