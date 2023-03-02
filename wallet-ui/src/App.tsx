import { ReactComponent as Logo } from "./assets/icons/other/logo.svg";
import { WelcomeScreen, CryptoScreen } from "./screens";
import { Container } from "./components";

function App() {
  return (
    <>
      <WelcomeScreen />
      <CryptoScreen />
    </>
  );
}

export default App;
