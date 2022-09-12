import React,{ useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams } from 'react-router-dom';
function UserProfile() {
    const list = useSelector((state) => state.reducer.list);
    // useSelector is a function that takes the current state as an argument and returns whatever data you want from
    const navigate=useNavigate();
    const [userObject, setUserObject] = useState({ userName: "", specialisation: "", contactNumber: "" });
    const [imageUpload, setImageUpload] = useState();
    // create empty user object for store user data come from redux
    const { id } = useParams();
    // Get user id from userList by using useParam

    const backToHome=()=>{
        navigate("/userlist");
        //back to userList Page
    }

    const handleImageUpload=(e)=>{
        console.log(e.target.files);
        setImageUpload(URL.createObjectURL(e.target.files[0]));
        //upload image and display using state hook
    }

    useEffect(() => {
    
        const user = list.find(user => user.id === parseInt(id));
        const { userName, specialisation, contactNumber } = user
        setUserObject({userName, specialisation, contactNumber});
        // get data from redux and match id  and put data user object and display
   
    }, [])

    return (
    <div className="card userProfile-Card pt-5"
         style={{width:"750px",height:"350px",borderRadius:"10px"}}>
          <div className="card-body p-4">
            <div className="d-flex text-black">
              <div className="flex-shrink-0">
                <img src={imageUpload?imageUpload:"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"}
                  alt="upload your image" className="img-fluid"
                  style={{width:"200px",borderRadius:"50%"}}
                  />
                  <input className="form-control form-control-sm formFileSm" type="file" onChange={handleImageUpload} />
              </div>
              <div className="flex-grow-1 ms-3">

                <h1 className="mb-1"  style={{fontWeight:'bold'}}>
                  {userObject.userName}
                </h1>

                <h4 className="mb-2 pb-1">
                  {userObject.specialisation}
                </h4>

                 <h6 className="mb-2 pb-1">
                {userObject.contactNumber}
                </h6>

                <div className="d-flex pt-1">   
                  <button type="button" onClick={backToHome} className="btn btn-primary flex-grow-1">Back</button>
                </div>
                
              </div>
            </div>
          </div>
        </div>
    )
}

export default UserProfile