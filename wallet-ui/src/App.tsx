import { ReactComponent as Logo } from "./assets/icons/other/logo.svg";
import { WelcomeScreen, CryptoScreen, Footer } from "./screens";
import { Container } from "./components";

function App() {
  return (
    <>
      <WelcomeScreen />
      <CryptoScreen />
      <Footer />
    </>
  );
}

export default App;
