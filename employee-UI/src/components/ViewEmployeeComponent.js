import React, {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import {Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const ViewEmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')

    const {id}= useParams();

    useEffect(() => {
        EmployeeService.getEmployeeById(id).then((response)=>{
            setFirstName(response.data.firstName)
            setLastName(response.data.lastName)
            setEmail(response.data.email)
        }).catch(error=>{
            console.log(error)
        })
    }, [])

    return (
        <div>
            <br/> <br/> <br/> <br/><br/>
        <div className="container">
        <div className="row">
        <div className="card col-md-6 offset-md-3 offset-md-3 bg-primary">
        <br/>
        <h2 className="text-center text-white">View Employee Details</h2>
        <div className="card-body">
        <form>
            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">First Name :</label>
            <input type="text" placeholder="Enter First Name" name="firstName" className="form-control"
            value={firstName}></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">Last Name :</label>
            <input type="text" placeholder="Enter Last Name" name="lastName" className="form-control"
            value={lastName} ></input>
            </div>

            <div className="form-group mb-2">
            <label className="form-label text-white fw-bold">Email Address :</label>
            <input type="email" placeholder="Enter valid Email" name="email" className="form-control"
            value={email} ></input>
            </div>
            <br/>
            <div className="d-flex align-items-center justify-content-evenly">
            <Link to="/employee" className="btn btn-light text-dark">Back</Link>
            </div>
        </form>
        </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default ViewEmployeeComponent
