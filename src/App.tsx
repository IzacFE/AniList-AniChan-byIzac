import React from "react";
import "./style/Global.css";
import { MantineProvider, Text } from "@mantine/core";
import styled from "@emotion/styled";
import { WebRoutes } from "./routes/WebRoutes";

let hello: string = "Hello Izac Welcome TypeScript";

const Styled = styled.div<{}>`
  color: red;
  fontweight: bold;
`;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MantineProvider withGlobalStyles>
          <WebRoutes />
        </MantineProvider>
      </header>
    </div>
  );
}

export default App;
