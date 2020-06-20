// Contains a form with the input element and the search button, 
// contains functions that handle the input element and resets the field, 
// and also contains a function that calls the search function which is passed as props to it.

import React, { useState } from "react";

const Search = (props) => {
    const [searchValue, setSearchValue] = useState("");

    const handleSearchInputChanges = (e) => {
        setSearchValue(e.target.value);
    }

    const resetInputField = () => {
        setSearchValue("");
    }

    const callSearchFunction = (e) => {
        e.preventDefault();
        props.search(searchValue);
        resetInputField();
    }

    return (
        <form className="search">
            <input 
                value={searchValue}
                onChange={handleSearchInputChanges}
                type="text"
            ></input>
            <input onClick={callSearchFunction} type="submit" value="SEARCH"></input>
        </form>
    )
}

export default Search;

// I’m sure you’ve just seen the first hooks API that we are going to use, and it’s called useState.
// As the name implies, it lets us add React state to function components. 
// The useState hook accepts one argument which is the initial state, 
// and then it returns an array containing the current state (equivalent to this.state for class components) and a function to update it (equivalent to this.setState).

// In our case, we are passing our current state as the value for the search input field. 
// When the onChange event is called, the handleSearchInputChanges function is called which calls the state update function with the new value. 
// The resetInputField function basically called the state update function (setSearchValue) with an empty string in order to clear the input field. 

// The reducer takes in the initialState and the action, so based on the action type, the 
// reducer returns a new state object. For example, if the type of action that is dispatched 
// is SEARCH_MOVIES_REQUEST , the state is updated with the new object where the value 
// for loading is true and errorMessage is null.


// Another thing to note is that in our useEffect , we are now dispatching an action with 
// the payload as the movies array we are getting from the server. Also, in our search 
// function, we are dispatching three different actions actually.
// -    One action is the SEARCH_MOVIES_REQUEST action which updates our state 
//      object, making loading=true and errorMessage = null.
//
// -    If the request is successful then we dispatch another action with the type 
//      SEARCH_MOVIES_SUCCESS that updates our state object making loading=false 
//      and movies = action.payload where the payload is the movies array gotten 
//      from OMDB.
//
// -    If there is an error, we will instead dispatch a different action with the type 
//      SEARCH_MOVIES_FAILURE that updates our state object making loading=false 
//      and errorMessage = action.error where the action.error is the error 
//      message gotten from the server.