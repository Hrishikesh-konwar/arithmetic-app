import React, { Component } from 'react';
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    Container
} from 'reactstrap';

class Home extends Component {
    state = {
        result: 0,
        operand1: 0,
        operand2: 11,
        operator: 'add'
    }

    onChangeInput = (e) => {
        const name = e.target.name;
        this.setState({
            [name]: e.target.value
        });
    }

    onSubmit = () => {
        const { operand1, operand2, operator } = this.state;

        fetch('http://localhost:4000/add', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "operand1": Number(operand1),
                "operand2": Number(operand2),
                "operator": operator
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    result: data.result
                });
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    render() {

        return (
            <Container>
                <Form>
                    <FormGroup>
                        <Label for="operand1">Operand 1</Label>
                        <Input type="number" name="operand1" id="operand1" placeholder="with a placeholder" onChange={this.onChangeInput} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="operand2">Operand 2</Label>
                        <Input type="number" name="operand2" id="operand2" placeholder="password placeholder" onChange={this.onChangeInput} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="operator">Operator</Label>
                        <Input type="select" name="operator" id="operator" onChange={this.onChangeInput}>
                            <option value="add">+</option>
                            <option value="sub">-</option>
                            <option value="multi">*</option>
                            <option value="div">/</option>
                        </Input>
                    </FormGroup>
                    <Button color="primary" type="button" onClick={this.onSubmit}>Submit</Button>{' '}
                    <Button color="danger" type="button">Cancel</Button>
                </Form>
                <div>{this.state.result}</div>
            </Container>
        );
    }
}

export default Home;