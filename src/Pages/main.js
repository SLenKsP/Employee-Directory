import React, { Component } from "react";
import API from '../utils/API';
import DataTable from "../components/EmployeeTable/table";
import SearchForm from "../components/SearchForm/search";

const dataSort = {
    byName (a, b) {
        return a.fullName > b.fullName ? 1 : -1;
    }
}

class Main extends Component {
    state = {
        employees: [],
        search: "",
        sortEmployees: [],
        sortAscending: true,
        sortBy: "byName"
    };

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
    handleInputChange = event => {
        this.setState({
            ...this.state,
            search: event.target.value,
        });
        console.log(this.state.search);
    };

    handleSort_asc = () => {
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
    handleSort_desc = () => {
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

    render () {
        const list = this.state.employees.filter(employee => {
            return employee.searchable.includes(this.state.search);
        });
        return (
            <>
                <SearchForm handleInputChange={ this.handleInputChange } />
                <DataTable
                    employees={ list }
                    handleSort_asc={ this.handleSort_asc }
                    handleSort_desc={ this.handleSort_desc }
                />
            </>
        )
    }

}

export default Main;