import { useState } from "react"

type AuthUser = {
    name: string,
    age: number
}

const Logged = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    /**
     * You can use type assertion as well
     * useState<AuthUser>({} as AuthUser)
     * We will not need null in this case we are telling typescript that it's value will always be
     * AuthUser after this first statement.
     */
    const [userDetails, setUserDetails] = useState<null | AuthUser>(null)
    const handleClick = () => {
        // you cannot assign any value other than boolean here because type script infered it as a boolean
        setIsLoggedIn(!isLoggedIn)
        userDetails ? setUserDetails(null) : setUserDetails({name: 'Himanshu', age: 27})
     
    }

    return (<div>
        <button onClick={handleClick}>login log out</button>
        <div> I am {isLoggedIn ? 'logged in' : 'logged out'}</div>
        <div>UserName: {userDetails?.name}</div>
        <div>Age: {userDetails?.age}</div>
    </div>)

}
export default Logged