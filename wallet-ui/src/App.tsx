import {
  WelcomeScreen,
  CryptoScreen,
  BlogScreen,
  LocationScreen,
  ContactScreen,
  Footer,
} from "./screens";
import { ReactComponent as Logo } from "./assets/icons/other/logo.svg";
import { Container } from "./components";

function App() {
  return (
    <>
      <WelcomeScreen />
      <main>
        <CryptoScreen />
        <BlogScreen />
        <LocationScreen />
        <ContactScreen />
      </main>
      <CryptoScreen />
      <Footer />
    </>
  );
}

export default App;
