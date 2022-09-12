import React from 'react';
import "./UserRegistration.css";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function UserRegistration() {
    const id = Date.now();   //Generate Unique User ID
    const initialeValue = { id: id, userName: "", specialisation: "", contactNumber: "" };
    //Create initiale Values User Object
    const [userData, setUserData] = useState(initialeValue);
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const HandleOnChange = (e) => {         //HandleOnChange function get values from user input
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value })
    }

    const isValidObject = () => {   
         const regex = /^\d{10}$/;  //regular expression for contact number

        if (!userData.userName || Number(userData.userName)) {
            return false;
        }
        else if (!userData.specialisation || Number(userData.specialisation)) {
            return false;
        }
        else if (!userData.contactNumber) {
            return false;
        }
        else if (!regex.test(userData.contactNumber)) {
            return false;
        }

        return true;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validate(userData));
        if (isValidObject() === true) {
            //after validation save data in Local Storage

            const userGetValue = JSON.parse(localStorage.getItem('userData'));
            if (userGetValue) {
                userGetValue.push(userData);
                localStorage.setItem("userData", JSON.stringify(userGetValue));
            }
            else {
                localStorage.setItem("userData", JSON.stringify([userData]));
            }

            setUserData(initialeValue); //after submit inputs are clear 
            navigate("/userlist");      //redirect to user Profile page
        }
    }
    const validate = (showdata) => {
        const showMessage = {};
        const regex = /^\d{10}$/;
        if (!userData.userName || Number(userData.userName)) {
            showMessage.userName = "please enter user name"
        }
        else if (!userData.specialisation || Number(userData.specialisation)) {
            showMessage.specialisation = "please enter specialisation"
        }
        else if (!userData.contactNumber) {
            showMessage.contactNumber = "please enter Contact Number"
        }
        else if (!regex.test(userData.contactNumber)) {
            showMessage.contactNumber = "please enter 10 digit number"
        }
        return showMessage;
    }
    return (
        <div className="container border shadow-lg p-3 mb-5 bg-body rounded">
            <h3 className="'mb-4 pb-2 pb-md-0 mb-md-3 px-md-2'">Registration</h3>
            <form>
                <div className='form-group'>
                    <label>User Name</label>
                    <input type="text" className="form-control" name="userName"
                        value={userData.userName}
                        onChange={HandleOnChange}
                    />
                    <div className="help-block">{error.userName}</div>
                </div>

                <div className='form-group'>
                    <label>Specialisation</label>
                    <input type="text" className="form-control" name="specialisation"
                        value={userData.specialisation}
                        onChange={HandleOnChange}
                    />
                     <div className="help-block">{error.specialisation}</div>
                </div>

                <div className='form-group'>
                    <label>Contact Number</label>
                    <input type="Number" className="form-control" name="contactNumber"
                        value={userData.contactNumber}
                        onChange={HandleOnChange}
                    />
                     <div className="help-block">{error.contactNumber}</div>
              </div>

                <div className="d-grid gap-2 d-md-flex justify-content-md-center mt-4">
                    <button type="submit" onClick={handleSubmit} className="btn btn-primary">SUBMIT</button>
                </div>

            </form>

        </div>
    )
}

export default UserRegistration