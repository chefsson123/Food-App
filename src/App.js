
import "./App.css";
import Menu from "./components/Menu";

import WelcomeForm from "./components/WelcomeForm";
import SignUpForm from "./components/SignUpForm";
import { useEffect, useState } from "react";
import HeaderNotLoggedIn from "./components/HeaderNotLoggedIn";
import LoginForm from "./components/LoginForm";
import Footer from "./components/Footer";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showRegisterForm, setShowRegisterForm] = useState(false);
  const[hideModal, setHideModal] = useState(false);
  const [fetchedMeals, setFetchedMeals] = useState();
  const [isFetched, setIsFetched] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

useEffect(() => {
  fetch("https://foodapp-f32e8-default-rtdb.firebaseio.com/Dishes.json")
    .then(resp => resp.json())
    
    .then(data => {
      const fetchedMeals = data.map(meal => {
        return {
          
          name: meal.name,
          id: meal.id,
          description: meal.description,
          price: meal.price,
         
        }
      })
      setFetchedMeals(fetchedMeals)
      setIsFetched(true)
    }
    )
}, []);

 
  
  
  



    const OnLoginHandler = (event) => {
      setShowLoginForm(!showLoginForm)
    }



  const OnRegisterHandler = (event) => {
    setShowRegisterForm(!showRegisterForm);
  
  };
  

  return (
    <div>
      <HeaderNotLoggedIn onShow={OnRegisterHandler} onLogin={OnLoginHandler}/>
      
      
      <WelcomeForm onShow={OnRegisterHandler} />
      {showLoginForm && <LoginForm />}
      {showRegisterForm && <SignUpForm onHide={OnRegisterHandler}/>}
      {isFetched && <Menu menu={fetchedMeals} />} 
      <Footer />
     
    </div>
  );
}

export default App;
