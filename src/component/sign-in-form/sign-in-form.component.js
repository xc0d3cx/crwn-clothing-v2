import { useState } from "react";
import {
  SignInEmailAndPassword,
  creatUserDocumentFromAuth,
  signInWithGooglePopup,
} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import "./sign-in-form.styles.scss";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("sign-in submitted");
    const { email, password } = formFields;

    try {
      const { user } = await SignInEmailAndPassword(email, password);
      //getUserData(user);
      console.log(user);
      resetFormFields();
    } catch (error) {

      switch(error.code){
        case 'auth/wrong-password':
          alert("incorrect password for email!");
          break;
        case 'auth/user-not-found':
          alert("user not found with that email!");
          break;
        default:
          alert("login failed", error);
          console.log("login failed", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await creatUserDocumentFromAuth(user);
    //console.log(user);
  };

  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" buttonType="google" onClick={signInGoogleUser}>
            Google Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
