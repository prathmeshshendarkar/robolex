import './App.css';
import React, { Component } from 'react';


// Lets now call the monsters from this.state using map function
class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters : [], // First we used the hardcoded objects consisting of names and ID inside the monsters array
      // Now we want to fetch the users from an API and list them
      // Why we are starting with an empty array? well we don't want users to view just half of the monsters
      // First we will fetch the monsters and then update them to the state.

      searchField:"",
    };
  }

  // Now, to fetch the names from an API react gives us a lifecycle method
  // We want to render as soon as the component is loaded i.e. as soon as component is mounted
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users') // First fetch will get the response from api async request
      .then((response) => response.json()) // This request will return a promise with the response which is not in json format
      .then((users) =>  this.setState(() => { // After converting to json format, we can update the state with users
        return {monsters:users}; // next we are using the function method of setState rather than directly setting the state with an object
      }, () => {
        console.log(this.state); // Since we have used the function method, there is a call back function always available to us, we will determine if the result is correct or not
      }));

  };

  // Optimizing anonymous functions
  onSearchChange = (event) => {
    this.setState(() => {
      return {searchField: event.target.value};
    })
  }

  render(){

    // Use of variables
    const {onSearchChange} = this
    const {monsters, searchField} = this.state

    const users = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className='App'>
        {/* <input className='search-box' placeholder='search-monsters' type='search' onChange={(event) => {
          console.log(event.target.value);
          this.setState(() => {
            const users = this.state.monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(event.target.value)
            });
            return {monsters:users}; // Why is this bad???
            Well because we are storing the users directly to the state, that means there is no way we can get back to original state
            we need a system that will store the filtered array into a object and then will update that to the original list.
          }, () => {
            console.log("Succes");
          })
        }}/> */}
        <input className='search-Field' placeholder='Search for Monsters' type='search' onChange={onSearchChange}/>


        {
          users.map((monster) => {
            return (
               // When we use map, we need to keep track of individual elements that gets rendered
              // To do that, the parent element inside the map function should have a key value. So we are going to add div function and add a key element to it
              // The key element should be unique in the state, and should not overlap, like ID or something.
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            )
          })
        }
      </div>
    );
  }
}


// We are going to convert the functional component to a class component

// class App extends Component {
//   constructor(){
//     super();

//     this.state = {
//       name: 'Prathamesh',
//     };
//   }
//   render(){
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             My name is {this.state.name}
//           </p>
//           <button onClick={() => { // onClick is calling the call back function, without that it won't work
//             this.setState(() => { // this.state is working synchronously by calling callback function after state is updated
//               return {
//                 name:'Andrei' // Change the state to something else.
//               }
//             },
//             () => { // This is the call back function for setState, so we are consoling the state after state is updated
//               console.log(this.state);
//             });
//           }}>Change the persona</button>

//           {/* <button onClick={() => {
//             this.setState({name: 'Yen'}); // This is asynchronous call 
//             console.log(this.state);
//           }}>Change the persona</button> */}
//         </header>
//       </div>
//     );
//   }
// }

export default App;
