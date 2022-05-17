import { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { onAuthStateChangedListener, creatUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//as the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  const navigate = useNavigate();
 

  useEffect(() => {
   const unsubscribe = onAuthStateChangedListener((user) => {
      //console.log('from auth lisenter',user);
      if(user){
        creatUserDocumentFromAuth(user);
        
      }
      setCurrentUser(user);
      navigate('/');
   })
      return unsubscribe
   }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
