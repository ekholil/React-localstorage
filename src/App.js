import './App.css';
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Person from './components/person/Person';

function App() {
  return (
    <div className='container'>
      <Header />
      <Person />
    </div>
  );
}

export default App;
