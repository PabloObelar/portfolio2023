import Navbar from "./Navbar";
import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";
import PropTypes from "prop-types";
import NProgress from "nprogress";
import { redes } from "../profile";
import classNames from "classnames";

const Layout = ({ children, title, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    router.events.on("routeChangeError", () => nProgress.done());

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <div className={classNames({ "bg-dark": dark, "bg-light": !dark })}>
      <Navbar />

      <main className="container py-4">
        {title && (
          <h1 className={classNames("text-center", { "text-light": dark })}>
            {title}
          </h1>
        )}
        {children}
      </main>
      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container py-4">
            <h1>&copy; Pablo Ramón Obelar Porfolio</h1>
            <p>2020 - {new Date().getFullYear()}</p>
            {redes.map(({ urlRedes, name, icon }, item) => (
              <div key={item}>
                <img
                  src={`/${icon}`}
                  style={{ width: "20px" }}
                  className="card-img-top py-2 "
                />
                <Link href={urlRedes} target="_blank">
                  {name}
                </Link>
              </div>
            ))}
          </div>
        </footer>
      )}
    </div>
  );
};
Layout.proptypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.bool,
};

export default Layout;
