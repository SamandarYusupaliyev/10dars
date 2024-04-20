import { createBrowserRouter,RouterProvider,Navigate} from 'react-router-dom'

// Layout
import MainLayout from "./Layout/MainLayout"

// pgeas
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import  Signin from "./pages/Signin"
import Signup from "./pages/Signup"

// components
import ProtectedRotes from './components/ProtectedRotes'
import Navbar from './components/Navbar'

//context
import { useContext, useEffect } from 'react'
import { GlobalContext } from './context/useGlobalContext'


// firebase
import { auth } from './firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

function App(){
  const {user,dispatch,authChange}=useContext(GlobalContext)
  const routes =createBrowserRouter([
    {
      path:"/",
       element:(
       <ProtectedRotes user={user}>
         <MainLayout/>
       </ProtectedRotes>),
      children:[
        {
          index:true,
          element :<Home/>
        },
        {
          path:'/about',
          element:<About/>,
        },
        {
          path:'/contact',
          element:<Contact/>,
        },
      ]
    },
    {
      path:"/signin",
      element:user ? <Navigate to="/" />:<Signin/>,
    },
    {
      path:"/signup",
      element:user ? <Navigate to="/" />:<Signup/>,
    },
  ])
 
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
  dispatch({
    type:"SIGN_IN",
    payload:user,
  });
  dispatch({
    type:"AUTH_CHANGE",
  })
})
},[])

  return <>{authChange && <RouterProvider router={routes}/>}</>
}

export default App

