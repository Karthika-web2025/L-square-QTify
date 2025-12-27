import Navbar from "./Navbar/Navbar";
import Hero from "./Hero/Hero";
import Section from "./Section/Section";

function App() {
  return (
    <div className="App">
    <Navbar />
<Hero />

<Section
  title="Top Albums"
  apiEndpoint="https://qtify-backend.labs.crio.do/albums/top"
  type="album"
/>

<Section
  title="New Albums"
  apiEndpoint="https://qtify-backend.labs.crio.do/albums/new"
  type="album"
/>

<Section
  title="Songs"
  apiEndpoint="https://qtify-backend.labs.crio.do/songs"
  type="song"
/>

    </div>
  );
}

export default App;
