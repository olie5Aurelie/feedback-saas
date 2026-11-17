import { useState } from "react";

function App() {
  const [titre, setTitre] = useState("");
  const [idees, setIdees] = useState([]);

  function ajouterIdee(evenement) {
    evenement.preventDefault();
    const nouveauTitre = titre.trim();

    if (!nouveauTitre) return;

    setIdees([...idees, nouveauTitre]);
    setTitre("");
  }

  return (
    <main>
      <h1>{import.meta.env.VITE_app_name}</h1>
      <form onSubmit={ajouterIdee}>
        <label htmlFor="titre-idee">Titre de l'idée</label>
        <input
          id="titre-idee"
          type="text"
          value={titre}
          onChange={(evenement) => setTitre(evenement.target.value)}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
      <ul>
        {idees.map((idee, index) => (
          <li key={`${idee}-${index}`}>{idee}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
