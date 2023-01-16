import Greet  from './components/Greet';
import PersonDetails from './components/PersonDetails';
import './App.css';
import PersonList from './components/PersonList';

function App() {
  const nameDetails = [{
    fName: 'Himz',
    lName: 'Todoo'
  },
  {
    fName: 'Toodz',
    lName: 'Timmz'
  },

]
  return (
    <div className="App">
    <Greet name='Himanshu' noOfMessages={20} isLoggedIn={true} /> 
    {/* Name will only accepts string now which can save from error prone code     */}
    <PersonDetails name={{firstName: 'Himanshu', lastName: 'Raheja'}} />
    <PersonList names={nameDetails} />
    </div>
  );
}

export default App;
