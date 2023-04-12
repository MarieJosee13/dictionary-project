import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>

        <main>
          <Dictionary defaultKeyword="forest" />
        </main>
        <footer className="App-footer">
          Coded by <span>Marie-Josée Dubé</span>, and is an
          <a
            href="https://github.com/MarieJosee13/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open source project on GitHub!{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

App();
