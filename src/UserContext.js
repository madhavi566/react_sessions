import { createContext } from "react";

const UserContext = createContext({
    beginner:{
        name : 'dummy',
        email :'dummy@gmail.com'  
    }  
})

export default UserContext;