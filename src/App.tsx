import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { ProjectMains } from "./components/ProjectMains";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <>
        <Header />
        <Home />
        <ProjectMains/>
        <GlobalStyle/>
    </>
  );
}