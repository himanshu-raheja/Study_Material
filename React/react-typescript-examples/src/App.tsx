import Greet  from './components/Greet';
import PersonDetails from './components/PersonDetails';
import './App.css';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Button } from './components/Button';
import { Input } from './components/Input';
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
    {/* <Greet name='Himanshu' noOfMessages={20} isLoggedIn={true} /> 
    {/* Name will only accepts string now which can save from error prone code     */}
    {/* <PersonDetails name={{firstName: 'Himanshu', lastName: 'Raheja'}} />
    <PersonList names={nameDetails} /> */}
    
    <Content>
        <Header>I am using this site</Header>
    </Content>
    <Status message='Loading' />
    
    
    <Button handleClick={(event, id) => {
      console.log('Clicked', id)
    }}/>
    <Input handleChange={(event) => {
      console.log('Changed')
    }}
    value={'I am strict'}
    /> 
    </div>
  );
}

export default App;
