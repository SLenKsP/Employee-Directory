import React, { Component } from "react";
import API from '../utils/API';
import DataTable from "../components/EmployeeTable/table";
import SearchForm from "../components/SearchForm/search";

// function to sort employee data by name
const dataSort = {
    byName (a, b) {
        return a.fullName > b.fullName ? 1 : -1;
    }
}
// 
class Main extends Component {
    state = {
        employees: [],
        search: "",
        sortEmployees: [],
        sortAscending: true,
        sortBy: "byName"
    };
    // getting that data from API
    componentDidMount () {
        API.getEmployeeData().then(res => {
            console.log(res.data);
            this.setState({
                ...this.state, employees: res.data.results.map(item => {
                   
                    return {
                        ...item,
                        searchable: Object.values(item.name).map(i =>  i.toLowerCase()).join(""),
                        fullName: item.name.first + "" + item.name.last
                    }
                })
            })
            console.log(this.state);
        }).catch(err => console.log(err));
    };
    // handling input change where when user types that name only related names are displayed
    handleInputChange = event => {
        this.setState({
            ...this.state,
            search: event.target.value,
        });
        console.log(this.state.search);
    };
    // function to sort names by ascending order
    sortByAscendingOrder = () => {
        let listName = this.state.employees.sort(dataSort[ this.state.sortBy ]);
        if (this.state.sortAscending)
        {
            this.setState({
                ...this.state,
                sortAscending: false,
            });
            this.setState({
                ...this.state,
                employees: listName,
            });
        }
    };
    // function to sort names by descending order
    sortByDescendingOrder = () => {
        let listName = this.state.employees.sort(dataSort[ this.state.sortBy ]);
        if (this.state.sortAscending)
        {
            this.setState({
                ...this.state,
                sortAscending: true,
            });
            this.setState({
                ...this.state,
                employees: listName.reverse(),
            });
        }
    };
    // rendering employee details to data table
    render () {
        const employeeList = this.state.employees.filter(item => {
            return item.searchable.includes(this.state.search);
        });
        return (
            <>
                <SearchForm handleInputChange={ this.handleInputChange } />
                <DataTable
                    employees={ employeeList }
                    handleSort_asc={ this.sortByAscendingOrder }
                    handleSort_desc={ this.sortByDescendingOrder }
                />
            </>
        )
    }

}

export default Main;