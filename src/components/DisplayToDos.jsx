import React, { useState } from 'react'
import { Card, Container,Col, ListGroup, ListGroupItem, Row, Button } from 'react-bootstrap'
import  DisplayCount  from './DisplayCount'
import { connect } from 'react-redux'
import { deleteTodo } from '../redux/actions/todo'


const DisplayToDos = ({todoos,deleteTodo}) => {
   // const [todos,setTodos]=useState([])

    return (
        <Container>
            <Row>
                <Col>
                    <Card className='shadow-sm mt-3'>
                        <Card.Body>
                            <h3>All Todos are here</h3>
                            <DisplayCount/>
                            <ListGroup>
                                {
                                    todoos.map((todo,index)=>
                                    <ListGroup.Item key={index}>
                                            <h4>{todo.title}</h4>
                                            <p>{todo.description}</p>
                                            <Button onClick={()=>deleteTodo(todo.id)} variant='danger' size='sm'>
                                                Delete</Button>
                                    </ListGroup.Item>
                                    )
                                }
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=state=>{
    console.log(state)
    return {todoos:state.todoos}
}
const mapDispatchToProps=dispatch=>({
    deleteTodo:id=>(dispatch(deleteTodo(id)))
})
export default connect(mapStateToProps,mapDispatchToProps)(DisplayToDos)