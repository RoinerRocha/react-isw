import React, { useState } from "react";
import './Table.css';

function Table(props) {
    const [lista, setLista] = useState([{ nombre: 'Luis', curso: 'Mate', edad: '34' },
    { nombre: 'Juan', curso: 'Sociales', edad: '40' }, { nombre: 'Mateo', curso: 'Ciencias', edad: '45' },]);

    const removeItem = (index) => {
        setLista(lista.filter(item => item !== lista[index]));
    };

    return (
        <div className="tablapersona">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cursos</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    {lista.length && (
                        lista.map((person, index) => (
                            <tr>
                                <td>{person.nombre}</td>
                                <td>{person.curso}</td>
                                <td>{person.edad}</td>
                                <td><button onClick={() => removeItem(index)}>Remove Item</button></td>
                            </tr>
                            ))
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Table;