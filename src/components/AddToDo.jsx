import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import  DisplayCount  from './DisplayCount'
import { addTodo } from '../redux/actions/todo'
import { connect } from 'react-redux'
import { v4 } from 'uuid'

const AddToDo = ({addTodo}) => {
    const [todo,setTodo]=useState({
        title:'',
        description:''
    })
    const handleSubmit=e=>{
        e.preventDefault()
        //add todo in store
        addTodo({...todo,id:v4})
        console.log(todo)
        setTodo({
            title:'',
            description:''
        })
    }
    return (
        <Container>
            <Row>
                <Col md={12}>
                    <Card className='shadow-sm'>
                        <Card.Body>
                            <h3>Add Todo Here!!</h3>
                            <DisplayCount/>
                            {/* form */}
                            <Form onSubmit={handleSubmit}>
                                {/* title */}
                                <Form.Group>
                                    <Form.Label>Todo Title </Form.Label>
                                    <Form.Control type='text' 
                                    placeholder='Enter here'
                                    value={todo.title}
                                    onChange={e=>setTodo({...todo,title:e.target.value})}/>
                                </Form.Group>
                                {/* description */}
                                <Form.Group className='mt-3'>
                                    <Form.Label>Todo Description </Form.Label>
                                    <Form.Control as={'textarea'} type='text' 
                                    placeholder='Enter here'
                                    value={todo.description}
                                    onChange={e=>setTodo({...todo,description:e.target.value})}/>
                                </Form.Group>
                                <Container className='text-center mt-3'>
                                    <Button type='submit' variant='primary'>
                                        Add Todo
                                    </Button>
                                </Container>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

const mapStateToProps=(state)=>({}) //for states present in store

const mapDispatchToProps=(dispatch)=>( //for action present in store
    {
        addTodo:todo=>(dispatch(addTodo(todo)))
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(AddToDo)