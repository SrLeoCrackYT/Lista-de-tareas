import React from 'react';

 export default function EliminarTarea(id) {
    const nuevosTodos = tareas.filter(tarea => tarea.id !== id);
    setTareas(nuevosTodos);
 }
