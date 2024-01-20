import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponents = () => {
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        getAllEmployee();

    }, [])

    const getAllEmployee=()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data)
            console.log(response.data);
            }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmployee=(employeeId) =>{
        EmployeeService.deleteEmployee(employeeId).then((response)=>{
            getAllEmployee();
        }).catch(error=>{
            console.log(error);
        })
    }

    return (
        <div className="list">
        <div className="container " >
        <h2 className="text-center py-5">List Of Employees</h2>
        <Link to = "/add-employee" className="btn btn-primary mb-4">Add Employee</Link>
        <table className="table table-striped table-hover">
        <thead>
            <th>Emloyee FirstName</th>
            <th>Emloyee LastName</th>
            <th>Emloyee Email</th>
            <th>Actions</th>
        </thead>
        <br/>
        <tbody>
            {employees.length ? (
                employees.map(employee => 
                    <tr key={employee.id}>
                        <td>{employee.firstName}</td>
                        <td>{employee.lastName}</td>
                        <td>{employee.email}</td>
                        <td>
                        <Link className="btn btn-info" to={`/update-employee/${employee.id}`}>Update</Link>
                        <button className="btn btn-danger" onClick={()=>deleteEmployee(employee.id)}
                        style={{marginLeft:"10px"}}>Delete</button>
                        <Link className="btn btn-secondary" to={`/view-employee/${employee.id}`} style={{marginLeft:"10px"}}>View</Link>
                        </td>
                    </tr>
                )
            ): (<tr>
                <td colSpan="4" className="text-center text-muted">
                  <h2>List is Empty</h2>
                </td>
              </tr>)
            
        }
        </tbody>
        </table>
        </div>
        </div>
    )
}

export default ListEmployeeComponents
