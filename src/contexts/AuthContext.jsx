import { createContext , useContext , useState } from "react";

const AuthContext = createContext()

function AuthProvider({children}){
    const [student,setStudent] = useState(null)
    const[isLoggedIn,setIsLoggedIn] = useState(false)

    function login(studentData){
        setStudent(studentData)
        setIsLoggedIn(true)
    }
    function logout(studentData){
        setStudent(null)
        setIsLoggedIn(false)
    }
    return(
    <AuthContext.Provider value={{student,isLoggedIn,login,logout}}>
        {children}
    </AuthContext.Provider>
    )
}

function useAuth () {
    return useContext(AuthContext)
}

export {AuthProvider,useAuth}