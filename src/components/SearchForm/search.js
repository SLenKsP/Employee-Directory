import React from "react";

function SearchForm (props) {
    return (
        <form className="">
            <div className="form-group">
                <label for="search d-inline mr-1"><h3>Search: </h3></label>
                <input type="text"
                    className="form-control ml-4 w-75 d-inline"
                    name="search"
                    id="search"
                    value={ props.search }
                    onChange={ props.handleInputChange }
                    placeholder= "Type the name. Ex : John Smith"
                />
            </div>
        </form>
    )
};

export default SearchForm;
