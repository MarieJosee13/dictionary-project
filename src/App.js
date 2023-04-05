import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Hello</header>
        <button className="btn btn-primary">Go</button>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">Coded by Marie-Josée Dubé</footer>
      </div>
    </div>
  );
}

App();
