import { useState } from 'react';
import './index.css';

function Semaforo() {
  const [colores, setColores] = useState(['rojo', 'amarillo', 'verde']);
  const [colorActivo, setColorActivo] = useState(null);
  const [mostrarPurpura, setMostrarPurpura] = useState(false);
  const [indice, setIndice] = useState(0);

  const alternarColor = () => {
    const nuevoIndice = (indice + 1) % colores.length;
    setIndice(nuevoIndice);
    setColorActivo(colores[nuevoIndice]);
  };

  const togglePurpura = () => {
    const estaPurpura = colores.includes('purpura');
    setColores(estaPurpura ? colores.filter(c => c !== 'purpura') : [...colores, 'purpura']);
    if (estaPurpura && colorActivo === 'purpura') setColorActivo(null);
    setMostrarPurpura(!estaPurpura);
  };

  return (
    <div className="contenedor">
      <div className="semaforo">
        {colores.map(c => (
          <div
            key={c}
            className={`luz ${c} ${colorActivo === c ? 'activo' : ''}`}
            onClick={() => setColorActivo(c)}
          ></div>
        ))}
      </div>

      <div className="botonera">
        < br />
        <button onClick={alternarColor}>Crazy</button>
        <button onClick={togglePurpura}>
          {mostrarPurpura ? 'Hide' : 'Show'}
        </button>
      </div>
    </div>
  );
}

export default Semaforo;
