import { signInWithGooglePopup, creatUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

const SignIn = () => {
    const logGoogleUser = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await creatUserDocumentFromAuth(user);
      //console.log(user);  
    }
  return (
    <div>
      <h1>Sign-In Page</h1>
      <button onClick={logGoogleUser}>
          Sing In with google Popup
      </button>
    </div>
  );
};

export default SignIn;
