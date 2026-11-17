import { useEffect, useState } from "react";

function App() {
  const [titre, setTitre] = useState("");
  const [idees, setIdees] = useState([]);
  const [message, setMessage] = useState("");
  const [nombreAjouts, setNombreAjouts] = useState(0);

  useEffect(() => {
    if (nombreAjouts === 0) return;

    const minuterie = setTimeout(() => setNombreAjouts(0), 5000);
    return () => clearTimeout(minuterie);
  }, [nombreAjouts]);

  function ajouterIdee(evenement) {
    evenement.preventDefault();
    const nouveauTitre = titre.trim();

    if (!nouveauTitre) return;

    setIdees([...idees, nouveauTitre]);
    setTitre("");
    setMessage("Merci");
    setNombreAjouts((nombre) => nombre + 1);
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
        {nombreAjouts > 0 && (
          <span className="coeur-ajout" aria-hidden="true">
            ♥
          </span>
        )}
      </form>
      {message && <p role="status">{message}</p>}
      <ul>
        {idees.map((idee, index) => (
          <li key={`${idee}-${index}`}>{idee}</li>
        ))}
      </ul>
    </main>
  );
}

export default App;
