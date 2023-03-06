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
      <CryptoScreen />

      <Footer />
    </>
  );
}

export default App;
