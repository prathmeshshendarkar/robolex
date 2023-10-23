import { Component } from "react";
import './card-list.styles.css'

const CardList = ({users}) => {
    return (
        <div className="card-list">
            {users.map((monster) => {
                const {name, id, email} = monster; // Destructuring the reused object names.
                return (
                    // When we use map, we need to keep track of individual elements that gets rendered
                    // To do that, the parent element inside the map function should have a key value. So we are going to add div function and add a key element to it
                    // The key element should be unique in the state, and should not overlap, like ID or something.
                    <div className='card-container' key={id}>
                        <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
                        <h1>{name}</h1>
                        <h2>{email}</h2>
                    </div>
                )
            })}
        </div>
    );
}

// class CardList extends Component {
//     render(){
//         const {users} = this.props;

//         return (
            // <div className="card-list">
            //     {users.map((monster) => {
            //         const {name, id, email} = monster; // Destructuring the reused object names.
            //         return (
            //             // When we use map, we need to keep track of individual elements that gets rendered
            //             // To do that, the parent element inside the map function should have a key value. So we are going to add div function and add a key element to it
            //             // The key element should be unique in the state, and should not overlap, like ID or something.
            //             <div className='card-container' key={id}>
            //                 <img alt={name} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
            //                 <h1>{name}</h1>
            //                 <h2>{email}</h2>
            //             </div>
            //         )
            //     })}
            // </div>
//         );
//     }
// }

export default CardList