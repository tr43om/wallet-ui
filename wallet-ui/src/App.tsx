import { ContactForm } from "components/ContactForm";
import {
  WelcomeScreen,
  CryptoScreen,
  BlogScreen,
  LocationScreen,
  ContactScreen,
  Footer,
} from "./screens";

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
      <Footer />
    </>
  );
}

export default App;
