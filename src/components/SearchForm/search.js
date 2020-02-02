import React from "react";

// function that export search form
function SearchForm (props) {
    return (
        <form className="">
            <div className="form-group">
                <label for="search d-inline mr-1"><h3>Search: </h3></label>
                <input type="text"
                    className="form-control ml-4 w-25 d-inline"
                    name="search"
                    id="search"
                    value={ props.search }
                    onChange={ props.handleInputChange || "No Employee found"}
                    placeholder= "Type the name. Ex : John Smith"
                />
            </div>
        </form>
    )
};

export default SearchForm;
