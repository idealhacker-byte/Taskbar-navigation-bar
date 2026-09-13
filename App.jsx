import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="page-content">
        <p className="eyebrow">Responsive React Navbar</p>
        <h1>A simple layout that adapts to every screen.</h1>
        <p className="intro">
          Resize the browser to see the desktop, tablet, and mobile versions
          of the navigation.
        </p>
      </main>
    </div>
  );
}

export default App;
