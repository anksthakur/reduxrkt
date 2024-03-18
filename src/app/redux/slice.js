const { createSlice,nanoid,current, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState={
    userAPIData:[],
    users:JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
}
// APi call krne ke ley redux ke andar
export const fetchApiUsers = createAsyncThunk("fetchApiUsers",async()=>{
    // console.log("action");
const result = await fetch("https://jsonplaceholder.typicode.com/users");
return result.json();
});

const Slice = createSlice({
    name:"addUserSlice",
    initialState,
    reducers:{
        addUser:(state,action)=>{
            console.log(action);
            const data={
                id:nanoid(),
                name:action.payload
            }
            state.users.push(data);
            let userData = JSON.stringify(current(state.users))
            localStorage.setItem("users",userData)
            // console.log();
        },
        removeUser:(state,action)=>{
            console.log(action);
            const data = state.users.filter((item)=>{
                return item.id!==action.payload
            })
            state.users=data;
            // remove data from local storage
            let userData = JSON.stringify(data)
            localStorage.setItem("users",userData)
            // let userData = JSON.stringify(current(state.users))
            // localStorage.removeItem("users",userData)
        }
    },
    // reducer bna rhe hai taki api ka data hume store m bhi mil jaye
    extraReducers:(builder)=>{
        builder.addCase(fetchApiUsers.fulfilled,(state,action)=>{
            console.log("reducer",action);
            state.isloading=false,
            state.userAPIData = action.payload
        })
    }
});
export const {addUser,removeUser} = Slice.actions;
export default Slice.reducer;