const initialData={
    list:[]
}

const reducer=(state=initialData,action)=>{
    switch(action.type){
        case "ADD_DATA":
            const {data}=action.payload;
            return{
                ...state,
                list:data      
            }

            default: return state;
    }
}

export default reducer;

//take data from ADD_DATA and reducer method update user data