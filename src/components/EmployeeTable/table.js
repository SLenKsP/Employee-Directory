import React from "react";
import Moment from "moment";

// 
function DataTable (props) {
    // function to return name
    function name (name) {
        return `${ name.first } ${ name.last }`;
    };
    // function to return id
    function id (id) {
        return `${ id.value }`
    }
    // function to return image source
    function image (picture) {
        return `${ picture.large }`
    };
    // function to return dob with format
    function dob (dob) {
        const birth = `${ dob.date }`;
        const birthDate = Moment(birth).format('DD-MM-YYYY');
        return birthDate;
    };
    // return datatable
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th scope="col">Picture</th>
                    <th scope="col"> <i class="fa fa-arrow-circle-o-up" onClick= {props.handleSort_asc}></i> Name <i class="fa fa-arrow-circle-o-down" onClick= {props.handleSort_desc}></i></th>
                    <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">DOB</th>
                </tr>
            </thead>
                <tbody>
                    { props.employees.map(employee => (
                        <tr key={ id(employee.id) }>
                            <td><img alt="employee" src={ image(employee.picture) } /></td>
                            <td>{ name(employee.name) }</td>
                            <td>{ employee.phone }</td>
                            <td>{ employee.email }</td>
                            <td>{ dob(employee.dob) }</td>
                        </tr>
                    )) }
                </tbody>
        </table>
            )
        }
        
export default DataTable;