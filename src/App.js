import { Container } from "@chakra-ui/react";
import "./App.css";
import MainRoutes from "./Pages/MainRoutes";

function App() {
  return (
    <Container minWidth="6xl">
      <MainRoutes />
    </Container>
  );
}

export default App;
