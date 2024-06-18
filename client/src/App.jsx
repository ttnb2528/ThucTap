/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes, privateRoutes } from "~/routes/routes";
import { LayoutDefault } from "./Layout/Layout";

const App = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  return (
    <div className="App">
      {user ? (
        <Routes>
          {privateRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = LayoutDefault;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = <></>;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      ) : (
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;

            let Layout = LayoutDefault;

            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = <></>;
            }

            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      )}
    </div>
  );
};

export default App;
