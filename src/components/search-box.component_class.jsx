import { Component } from "react";
import './search-box.styles.css'

class SearchBox extends Component {
    render(){
        // console.log('search-box component');
        return (
            <input className={`search-box ${this.props.searchBox}`} placeholder={this.props.placeholders} type='search' onChange={this.props.onChangeHandler}/>
        );
    }
}

export default SearchBox