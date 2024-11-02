import { useState } from "react";
import "./App.css";
import { Col, Container, Row, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styled from "styled-components";
import { MdDelete } from "react-icons/md";

const FormControls = styled.input`
  display: block;
  width: 35%;
  padding: 0.395rem 0.75rem;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 1.5;
  border-radius: 5px;
  background-color: #697555;
  outline: none;
  border: 1px solid #006067;
  color: aliceblue !important;
`;

const ListItem = styled.li`
  border: 2px solid #3c3d37;
  width: 500px;
  display: flex;
  justify-content: space-between;
  margin: 15px auto;
  box-shadow: 0 1px 5px gray;
  padding: 10px;
  border-radius: 10px;
`;

const Button = styled.button`
  padding: 5px 18px;
  border: none;
  border-radius: 5px;
  color: aliceblue;
  box-shadow: 0 0 12px #6eacd3;
  cursor: pointer;
  background-color: #6eacda;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const deleteTodo = (id) => {
    setTodos(todos.filter((_, index) => index !== id));
  };
  const addTodo = () => {
    if (inputValue !== "") {
      const formattedInputValue = inputValue.toUpperCase();
      setTodos([...todos, formattedInputValue]);
      setInputValue("");
    }
  };
  return (
    <>
      <Container className="my-5 py-5">
        <div className="text-center mb-5">
          <h3>Yapılcaklar Listesi</h3>
        </div>
        <Row className="mb-4">
          <Col sm="12" lg="12" md="12" xxl="12">
            <div className="text-center">
              <Form className="d-flex justify-content-center column-gap-3">
                <FormControls
                  type="text"
                  onChange={(e) => setInputValue(e.target.value)}
                  value={inputValue}
                />
                <Button type="button" onClick={addTodo}>
                  Ekle
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col
            className="d-flex justify-content-center"
            sm="12"
            lg="8"
            md="8"
            xxl="8"
          >
            <ul className="list-unstyled">
              {todos &&
                todos.map((item, index) => (
                  <ListItem key={index}>
                    <div>{item}</div>
                    <div>
                      <MdDelete
                        className="delete-icon"
                        onClick={() => deleteTodo(index)}
                      />
                    </div>
                  </ListItem>
                ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default App;
