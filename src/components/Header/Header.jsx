import React from "react"
import Logo from "../Logo.jsx"
import LogoutBtn from "./LogoutBtn.jsx"
import Container from "../container/Container"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
function Header(){
          const authStatus = useSelector((state)=>state.auth.status)
          const navigate = useNavigate()

          const navItems =[
            {
                name:"Home",
                slug:"/",
                active:true
            },
            {
               name:"Login",
               slug:"/login",
               active:!authStatus
            },
            {
                name:"Signup",
                slug:"/signup",
                active:!authStatus
            },
            {
                name:"All Posts",
                slug:"/all-posts",
                active:authStatus
            },
            {
                name:"Add Post",
                slug:"/add-post",
                active:authStatus
            },

          ]
    return (
        
  // <header className="py-3 shadow bg-gray-500">
  // <Container>
  //   <nav className="flex">
  //         <div className="mr-4">
  //           <Link to='/'>
  //                <Logo width="70px"/>
  //           </Link>
  //         </div>
  //        <ul className="flex ml-auto">
  //           {navItems.map((item)=>
  //            item.active ? (
  //               <li key={item.name}>
  //                   <button
  //                     onClick={()=>navigate(item.slug)}
  //                     className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
  //                   >{item.name}</button>
  //               </li>
  //            ):null
            
  //           )}
  //           {authStatus && (
  //               <li>
  //                   <LogoutBtn />
  //               </li>
  //           )}
  //        </ul>

  //   </nav>
  // </Container>

  // </header>

//   <header className="py-4 shadow-md bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-100 rounded-2xl mx-4 mt-4">
//   <Container>
//     <nav className="flex items-center rounded-full bg-gray-800 px-6 py-3 shadow-lg">
//       {/* Logo Section */}
//       <div className="mr-6">
//         <Link to="/">
//           <Logo width="70px" />
//         </Link>
//       </div>

//       {/* Navigation Items */}
//       <ul className="flex items-center ml-auto space-x-6">
//         {navItems.map((item) =>
//           item.active ? (
//             <li key={item.name}>
//               <button
//                 onClick={() => navigate(item.slug)}
//                 className="inline-block px-5 py-2 text-sm font-medium text-gray-100 transition duration-200 rounded-full bg-gray-700 hover:bg-blue-600 hover:text-white"
//               >
//                 {item.name}
//               </button>
//             </li>
//           ) : null
//         )}

//         {/* Logout Button */}
//         {authStatus && (
//           <li>
//             <LogoutBtn />
//           </li>
//         )}
//       </ul>
//     </nav>
//   </Container>
// </header> 
      
<header className="bg-slate-50 border-b border-slate-100 shadow-sm">
<Container>
    <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-5">
        {/* Logo Section */}
        <div className="flex items-center">
            <Link to="/" className="transition-transform duration-300 hover:opacity-80">
                <Logo width="70px" />
            </Link>
        </div>

        {/* Navigation Items */}
        <ul className="flex items-center gap-3 md:gap-6">
            {navItems.map((item) =>
                item.active ? (
                    <li key={item.name}>
                        <button
                            onClick={() => navigate(item.slug)}
                            className="relative px-3 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-slate-900 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-slate-800 after:transition-all hover:after:w-full"
                        >
                            {item.name}
                        </button>
                    </li>
                ) : null
            )}

            {/* Logout Button */}
            {authStatus && (
                <li className="ml-2">
                    <LogoutBtn />
                </li>
            )}
        </ul>
    </nav>
</Container>
</header>

    )
}

export default Header