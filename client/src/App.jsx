import React from "react";
import { Routes, Route } from "react-router-dom";
import { publicRoutes } from "~/routes/routes";
import { LayoutDefault } from "./Layout/Layout";

const App = () => {
  return (
    <div className="App">
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
    </div>
  );
};

export default App;
