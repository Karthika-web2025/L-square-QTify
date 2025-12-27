import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />

      {/* TOP ALBUMS */}
      <Section
        title="Top Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
      />

      {/* NEW ALBUMS */}
      <Section
        title="New Albums"
        apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
      />
    </div>
  );
}

export default App;
