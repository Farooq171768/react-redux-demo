import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import  AddToDo  from './components/AddToDo';
import  DisplayToDos  from './components/DisplayToDos';
import { Provider } from 'react-redux';
import store from './redux/reducers/store';

function App() {
  return (
    <Provider store={store}>
      <Container className='py-3'>
      <AddToDo/>
      <DisplayToDos/>
    </Container>
    </Provider>
    
  );
}

export default App;
