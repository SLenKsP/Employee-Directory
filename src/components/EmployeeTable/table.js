import React from "react";
import Moment from "moment";

function DataTable (props) {
    function forName (name) {
        return `${ name.first } ${ name.last }`;
    };

    function forKey (id) {
        return `${ id.value }`
    }

    function forImage (picture) {
        return `${ picture.large }`
    };
    function forDob (dob) {
        const birth = `${ dob.date }`;
        const birthDate = Moment(birth).format('DD-MM-YYYY');
        return birthDate;
    };

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
                        <tr key={ forKey(employee.id) }>
                            <td><img alt="employee" src={ forImage(employee.picture) } /></td>
                            <td>{ forName(employee.name) }</td>
                            <td>{ employee.phone }</td>
                            <td>{ employee.email }</td>
                            <td>{ forDob(employee.dob) }</td>
                        </tr>
                    )) }
                </tbody>
        </table>
            )
        }
        
export default DataTable;