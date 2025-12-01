import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Statustareas from './assets/components/Statustareas'
import './App.css'
import EliminarTarea from './assets/components/EliminarTarea'
EliminarTarea

function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: 'Aprender react',
      estado: 'todo',
    },
    {
      id: 2,
      nombre: 'Aprender Angular',
      estado: 'todo',
    },
    {
      id: 3,
      nombre: 'Aprender Vue',
      estado: 'indev',
    },
  ])

  const [nuevaTarea, setNuevaTarea] = useState('');

  function registrarTarea() {
    if(nuevaTarea.trim() === '') {
      alert("Escriba la tarea");
      return;
    }
    setTareas([
      ...tareas,
      {
        id: tareas.length +1,
        nombre: nuevaTarea,
        estado: 'todo',
      },
    ])
    setNuevaTarea('')
  }

  function moverTarea(id, estadoActual) {
    let nuevoEstado = estadoActual;
    
    switch (estadoActual) {
      case 'todo':
        nuevoEstado = 'indev';
        break;
      case 'indev':
        nuevoEstado = 'done';
        break;

      default:
        return;
    }

    const nuevasTareas = tareas.map(tarea =>
      tarea.id === id ? { ...tarea, estado: nuevoEstado } : tarea
    );
    setTareas(nuevasTareas);
  }
  
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      registrarTarea();
    }
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <img src={reactLogo} className="logo react" alt="React logo" />
        <img src={viteLogo} className="logo vite" alt="Vite logo" />
        <h1>Gestor de Tareas 📋</h1>
      </header>

      <div className="nueva-tarea-container">
        <h2 className="section-title">Nueva tarea</h2>
        <div className="input-group">
          <input
            type="text"
            className="input-tarea"
            value={nuevaTarea}
            onChange={(e) => setNuevaTarea(e.target.value)}
            onKeyDown={handleKeyDown} // Agregado el manejador de tecla Enter
            placeholder='Ingrese el nombre de la tarea'
          />
          <button className="btn btn-registrar" onClick={registrarTarea}>
            Registrar Tarea
          </button>
        </div>
      </div>

      <hr className="divider" />

      <div className="estado-tareas-container">
        <h2 className="section-title">Estado de Tareas:</h2>
        <div className="status-columns">
          {/* Componentes Statustareas con props de funciones y clases */}
          <Statustareas
            tareas={tareas}
            status='todo'
            eliminarTarea={eliminarTarea}
            moverTarea={moverTarea}
          />
          <Statustareas
            tareas={tareas}
            status='indev'
            eliminarTarea={eliminarTarea}
            moverTarea={moverTarea}
          />
          <Statustareas
            tareas={tareas}
            status='done'
            eliminarTarea={eliminarTarea}
            moverTarea={moverTarea}
          />
        </div>
      </div>
    </div>
  );
}

export default App