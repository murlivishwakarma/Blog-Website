import { useState,useEffect } from 'react'
import {useDispatch} from "react-redux"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import authService from './appwrite/auth'
import {login,logout} from "./store/authSlice"
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Login from "./components/Login"
import Signup1 from "./components/Signup1"
import PostCard  from './components/PostCard'
import PostForm from './components/post-from/PostForm'
import AllPosts from './pages/AllPosts'
import Home from './pages/Home'
function App(){
 
  const [loading,setloading] = useState(false);
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
            if(userData){
              dispatch(login({userData}))
              console.log("hello from app getuser")
            }
            else{
              console.log("hello from app getuser")
                dispatch(logout())
            }
    })
    .finally(()=>setloading(false))
  },[])
   
//   return !loading ? (
//   //   <div className='min-h-sc flex flex-wrap content-between bg-gray-400'>
//   // <div className='w-full-block'>
//   //    <Header />
//   //      <main>
//   //        <Home/>
//   //      </main>
//   //     <Footer/>
//   // </div>
//   //   </div>
  
//   <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-800 via-gray-900 to-gray-700 text-gray-100">
//   <div className="flex-grow">
//     <Header />
//     <main className="px-4 py-6">
//       <Home />
//     </main>
//   </div>
//   <Footer className="bg-gray-900" />
// </div>


//   ):(<div>Hello loading loading</div>)

if (loading) {
  return (
      <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="text-base font-medium text-gray-900">Loading...</div>
      </div>
  )
}

return (
  <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow">
          <Home />
      </main>
      <Footer />
  </div>
)
}
export default App
