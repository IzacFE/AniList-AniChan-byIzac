import { ApolloProvider } from "@apollo/client";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "../components/Layout";
import { Collection } from "../pages/Collection";
import { CollectionDetail } from "../pages/CollectionDetail";
import { Detail } from "../pages/Detail";
import { Home } from "../pages/Home";
import client from "../graphQl/ApolloClientHandler";
import { MantineProvider } from "@mantine/core";
import { Check } from "../pages/Check";

export const WebRoutes: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <MantineProvider withGlobalStyles>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Home />} />
              <Route path="/detail/:id" element={<Detail />} />
              <Route path="/collection" element={<Collection />} />
              <Route
                path="/collection-detail/:name"
                element={<CollectionDetail />}
              />
            </Route>
            <Route path="/check" element={<Check />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ApolloProvider>
  );
};
