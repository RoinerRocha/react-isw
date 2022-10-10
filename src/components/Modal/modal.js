import React from "react";
import { Modal, Button } from 'react-bootstrap';
import List from "../list/List";

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            showModal: false
        }
    }

    handleModal() {
        this.setState({ showModal: !this.state.showModal })
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.handleModal()}>abrir Modal</Button>
                <Modal show={this.state.showModal} onHide={()=>this.handleModal()} >
                    <Modal.Header closeButton>
                        Modal Header
                    </Modal.Header>
                    <Modal.Body>
                        <List />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button>Aceptar</Button>
                        <Button onClick={() => this.handleModal()}>Cancelar</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

export default App;