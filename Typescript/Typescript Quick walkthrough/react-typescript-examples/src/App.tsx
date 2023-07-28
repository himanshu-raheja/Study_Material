import GreetHello from './components/GreetHello';
import Greet from './components/Greet';
import PersonDetails from './components/PersonDetails';
import './App.css';
import PersonList from './components/PersonList';
import { Status } from './components/Status';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { StyleProps } from './components/StyleProps';
import PersonDetailsExportTypes from './components/PersonDetailsExportTypes';
// import {PersonDetailsUnitProps} from './components/PersonDetails.Types'
import Logged from './components/stateComponents/Logged';

function App() {
  const nameDetails = [
  {
    firstName: 'Jogendra',
    lastName: 'Singh'
  },
  {
    firstName: 'Sandeep',
    lastName: 'Jamwal'
  },
  {
    firstName: 'Himanshu',
    lastName: 'Raheja'
  }
  ]

  const name = {
    firstName: 'Himanshu',
    lastName: 'Raheja'
  }
  return (
    <div className="App">
      <GreetHello />
      <Greet name='Himanshu' noOfMessages={20} /> 
    {/* Name will only accepts string now which can save from error prone code     */}
      {/* <PersonDetails name={name} />
    <PersonList names={nameDetails} />

      {/* <Content>
        <Header>I am using this site</Header>
    </Content>
    <Status message='Loading' /> */}


      <Button handleClick={(event, id) => {
      console.log('Clicked', id)
    }}/>
    <Input handleChange={(event) => {
      console.log('Changed')
    }}
    value={'I am strict'}
    /> 

      <StyleProps styles={{ display: 'flex', border: '1px solid grey', padding: '5px' }} />

      {/* You can import the types from other files as well for reusability purpose. */}
      {/* <PersonDetailsExportTypes name={{ firstName: 'Himanshu', lastName: 'Raheja' }} /> */}

  <Logged />
    </div>
  );
}

export default App;
