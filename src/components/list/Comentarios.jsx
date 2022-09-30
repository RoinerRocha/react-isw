import React, { Fragment }from 'react';

const Comentarios = ({sujeto}) => {
    return (
        <Fragment>
            <h1>hola</h1>
            <hr />
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cursos</th>
                        <th scope="col">Universidad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>{sujeto.nombre}</td>
                        <td>{sujeto.cursos}</td>
                        <td>{sujeto.universidad}</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>{sujeto.nombre2}</td>
                        <td>{sujeto.cursos2}</td>
                        <td>{sujeto.universidad2}</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>{sujeto.nombre3}</td>
                        <td>{sujeto.cursos3}</td>
                        <td>{sujeto.universidad3}</td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
}

export default Comentarios;