export const addData=(data)=>{
    return{
        type:"ADD_DATA",
        payload:{
             data:data
        }
    }
}

//addData method  to save data from Local storage