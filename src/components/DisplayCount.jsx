import React from 'react'
import { Card } from 'react-bootstrap'
import { connect } from 'react-redux'

const DisplayCount = ({todoos}) => {
    return (
        <Card className='shadow-sm border border-0'>
            <Card.Body>
                <h4>Number of todos: {todoos.length}</h4>
                
            </Card.Body>
        </Card>
    )
}
const mapStateToProps = (state) => ({
    todoos: state.todoos,
  });
//const mapDispatchToProps=dispatch=>({})
export default connect(mapStateToProps,null)(DisplayCount) 