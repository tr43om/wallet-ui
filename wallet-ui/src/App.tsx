import { ReactComponent as Logo } from "./assets/icons/other/logo.svg";
import { WelcomeScreen, CryptoScreen, Footer } from "./screens";
import { Container, TextArea } from "./components";
import { Input } from "components/ui/Input";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  return (
    <>
      <WelcomeScreen />
      <CryptoScreen />

      <Footer />
    </>
  );
}

export default App;
