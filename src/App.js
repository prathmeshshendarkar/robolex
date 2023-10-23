import './App.css';
import React, { useEffect } from 'react';
import {useState} from 'react';
import SearchBox from './components/search-box.component';
import CardList from './components/card-list.component';

const App = () => {
  // Now in functional components to set a state or to initialize a state we use hooks
  // useState()
  const [searchField, setSearchField] = useState('');
  const [monsters, setmonsters] = useState([]);
  const [filtermonters, setfiltermonster] = useState(monsters);
  // How does above works? Well, the first field that returns from useState is the value of the key
  // That is an empty string for searchField key
  // Then comes a function(setSearchField), that function is used to set the state of searchfield valud

  console.log(filtermonters);
  useEffect(() => {
    console.log("Fetched");
    fetch('https://jsonplaceholder.typicode.com/users') // First fetch will get the response from api async request
      .then((response) => response.json()) // This request will return a promise with the response which is not in json format
      .then((users) =>  setmonsters(users));
  }, []) // There is no dependency because, once we fetch the values from the api we aren't updating our values with any different ones.
  // These are the same 10 users so no dependency

  useEffect(() => {
    const users = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    setfiltermonster(users);
    console.log("Set Monsters")
  }, [searchField, monsters])

  // Optimizing anonymous functions
  const onSearchChange = (event) => {
    setSearchField(event.target.value.toLowerCase());
  }
  console.log(searchField);

  return (
    <div>
      <h1>Hello World,</h1>
      <SearchBox searchBox='searchBox' placeholders='Search For Monsters' onChangeHandler={onSearchChange}/> 
      <CardList users={filtermonters}/>
    </div>
  );
}

export default App;
