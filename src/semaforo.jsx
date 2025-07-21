import { useState } from 'react';
import './index.css';

function Semaforo() {
  const [color, setColor] = useState("rojo");

  const activarLuz = (nuevoColor) => {
    setColor(nuevoColor);
  };

  return (
    <div className="semaforo">

      <div className={`luz rojo ${color === 'rojo' ? 'activo' : ''}`} onClick={() => activarLuz('rojo')}>
      </div>

      <div className={`luz amarillo ${color === 'amarillo' ? 'activo' : ''}`} onClick={() => activarLuz('amarillo')}>
      </div>

      <div className={`luz verde ${color === 'verde' ? 'activo' : ''}`} onClick={() => activarLuz('verde')}>
      </div>
    
    </div>
  );
}

export default Semaforo;
