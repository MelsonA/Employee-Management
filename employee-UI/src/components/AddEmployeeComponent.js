import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const AddEmployeeComponent = () => {

    const navigate = useNavigate();
    const {id}= useParams();

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const saveOrUpdateEmployee=(e)=>{
        e.preventDefault();
        const employee ={firstName,lastName,email}

        if(id){
            EmployeeService.updateEmployee(id,employee).then((response=>{
                navigate("/employee")
            }))
        }else{
            EmployeeService.createEmployees(employee).then((response)=>{
                console.log(response.data)
                navigate('/employee');
            }).catch(error=>{
                console.log(error)
            })
        }
        
    }

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    const title=()=>{
        if(id){
            return <h2 className="text-center text-white">Update Employee</h2>
        }else{
            return <h2 className="text-center text-white">Add Employee</h2>
        }
    }
    return (
        <div>
            <br/> <br/> <br/> <br/><br/>
        <div className="container">
        <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 bg-primary">
        <br/>
        {title()}
        <div className="card-body">
        <form>
            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">First Name :</label>
            <input type="text" placeholder="Enter First Name" name="firstName" className="form-control"
            value={firstName} onChange={(e)=>setFirstName(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">Last Name :</label>
            <input type="text" placeholder="Enter Last Name" name="lastName" className="form-control"
            value={lastName} onChange={(e)=>setLastName(e.target.value)}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">Email Address :</label>
            <input type="email" placeholder="Enter valid Email" name="email" className="form-control"
            value={email} onChange={(e)=>setEmail(e.target.value)}></input>
            </div>
            <br/>
            <div className="d-flex align-items-center justify-content-evenly">
            <button className="btn btn-success fw-bold" onClick={(e)=>saveOrUpdateEmployee(e)}>Submit</button>
            <Link to="/employee" className="btn btn-danger">Cancel</Link>
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default AddEmployeeComponent
