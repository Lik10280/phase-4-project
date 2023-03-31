import {useState} from "react"
import SignInForm from "./SignInForm"
import SignUpForm from "./SignUpForm"
// import "./LoginPage.css"; // import the CSS file

function LoginPage({onSignIn}){
    const [hasAccount, setHasAccount] = useState(true)

    return (
        hasAccount ? (
            <div>
                <h4>New to PataKeja?</h4>
                <button onClick={()=>setHasAccount(false)}>Join now!</button>
                <SignInForm onSignIn={onSignIn}/>
            </div>
        ) : (
            <div className="login-page-container">
                <h4>Already have an account?</h4>
                <button onClick={()=>setHasAccount(true)}>Log in</button>
                <SignUpForm onSignIn={onSignIn}/>
            </div>  
        )
    )
}

export default LoginPage
