import {
  WelcomeScreen,
  CryptoScreen,
  BlogScreen,
  LocationScreen,
  ContactScreen,
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
    </>
  );
}

export default App;
