
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);


    const handelGoogle = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const user = result.user
                setUser(user)
                console.log(user)
            })
            .catch(error => {
                console.log("error", error.message)
            })
    }

    const handelSignOut = () => {
        signOut(auth)

            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            { user ?
         <button onClick={handelSignOut} className=' border-2 bg-blue-500 px-4 py-2'>Sign Out</button> :
         <button onClick={handelGoogle} className=' border-2 bg-blue-500 px-4 py-2'>Google Login</button>
            }

            {user && <div>
                <h2 className="text0xl font-bold">User: {user?.displayName}</h2>
                <p className="text-xl font-bold">Eamil: {user?.email}</p>
                <img src={user?.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;