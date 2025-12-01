import React from 'react';

export default function Statustareas({ tareas, status, eliminarTarea, moverTarea }) {

    const getStatusInfo = (status) => {
        switch (status) {
            case 'todo':
                return { title: 'Pendientes 🎯', className: 'columna-todo' };
            case 'indev':
                return { title: 'En Progreso 🚧', className: 'columna-indev' };
            case 'done':
                return { title: 'Terminadas ✅', className: 'columna-done' };
            default:
                return { title: status, className: '' };
        }
    };

    const { title, className } = getStatusInfo(status);
    const tareasFiltradas = tareas.filter((tarea) => tarea.estado === status);

    return (
        <div className={`status-column ${className}`}>
            <h3 className="column-title">{title} ({tareasFiltradas.length})</h3>
            
            <ul className="task-list">
                {tareasFiltradas.length === 0 && (
                    <li className="no-tasks">No hay tareas en esta sección.</li>
                )}
                {tareasFiltradas.map((tarea) => (
                    <li key={tarea.id} className={`task-item task-item-${status}`}>
                        <span className="task-name">{tarea.nombre}</span>
                        
                        <div className="task-actions">
                            {/* Botón para mover la tarea (no visible si ya está en 'done') */}
                            {status !== 'done' && (
                                <button 
                                    className="btn btn-mover" 
                                    onClick={() => moverTarea(tarea.id, tarea.estado)}
                                    title="Mover a la siguiente etapa"
                                >
                                    ▶️
                                </button>
                            )}
                            
                            <button 
                                className="btn btn-eliminar" 
                                onClick={() => eliminarTarea(tarea.id)}
                                title="Eliminar tarea"
                            >
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}