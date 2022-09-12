import React,{ useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addData } from '../actions';
import { Link, useNavigate } from 'react-router-dom';
function UserList() {
    const dispatch = useDispatch();     //Dispatch method in Redux updating a Redux store's state
    const navigate = useNavigate();
    const list = useSelector((state) => state.reducer.list);
    //useSelector is a function that takes the current state as an argument and returns whatever data you want from
    
    const getRandomColor = () => {
        const randomBgColor = ["#f1e0b0", "#f1cdb0", "#e7cfc8", "#97f2f3"];
        const newColor = Math.floor(Math.random() * randomBgColor.length)
        return randomBgColor[newColor]
        //getRandomColor fuction use for change each background circle color
    }

    const handleUserProfile = (id) => {
        navigate(`/userlist/${id}`);
        // redirect page to userlist according user id by using useParam
    }

    useEffect(() => {
        const getUserData = JSON.parse(localStorage.getItem('userData'));
        dispatch(addData(getUserData));
        // Get user data from local storage and pass to dispatch redux method to save data into redux
    }, [])
    
    return (
        <div className='container' style={{ width: "940px" }}>
        <div className="d-grid gap-2 d-md-flex justify-content-md-end mb-4">
        <Link to="/" className="btn btn-primary text-uppercase">Logout</Link>
        </div>
        <ul className='list-group'>
           
            {
                list.map((users) => {
                    const { id, userName, specialisation, contactNumber } = users
                    return (
                        <li className="list-group-item list-group-item-action" key={id}>
                        <div className="">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <div style={{ width: "100px", height: "100px", textAlign: "center", background: getRandomColor() }} className="border rounded-circle mt-4">
                                        <h1 className='mt-4 fw-light'>
                                            {userName.charAt(0)}
                                        </h1>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h1 className="card-title" onClick={() => { handleUserProfile(id) }}>{userName}</h1>
                                        <h5 className="card-text">{specialisation}</h5>
                                        <p className="card-text text-muted">{contactNumber}</p>
                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    )
                })
            }
    </ul>
</div>
    )
}

export default UserList