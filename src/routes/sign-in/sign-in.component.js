import {
  signInWithGooglePopup,
  creatUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

import { Fragment } from "react";
import SignUpForm from "../../component/sign-up-form/sign-up-form.component";
import Button from '../../component/button/button.component';

const SignIn = () => {
  
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await creatUserDocumentFromAuth(user);
    //console.log(user);
  };

  return (
    <Fragment>
      <div>
        <h1>Sign-In Page</h1>
        <Button buttonType='google' onClick={logGoogleUser}>Sign In with google Popup</Button>
        <SignUpForm />
      </div>
      
    </Fragment>
  );
};

export default SignIn;
