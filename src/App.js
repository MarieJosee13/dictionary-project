import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary;</header>

        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          Coded by Marie-Josée Dubé,{" "}
          <a
            href="https://github.com/MarieJosee13/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            open source project{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}

App();
