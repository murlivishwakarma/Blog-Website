// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'

// import { Provider } from 'react-redux'
// import store from "./store/store.js"
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'

// import AddPost from "./pages/AddPost.jsx"
// import Signup from "./pages/Signup.jsx"
// import EditPost from "./pages/EditPost.jsx"
// import Home from "./pages/Home.jsx"
// import AllPosts from "./pages/AllPosts.jsx"

// import Login from "./components/Login.jsx"
// import AuthLayout from "./components/AuthLayout.jsx"

// import Post from "./pages/Post.jsx"
// import Newcomponent from './components/Newcomponent.jsx'
// import App from './App.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<App/>,
     
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       // {
//       //   path: '/login',
//       //   element: <Newcomponent />,
//       // },
//       {
//         path: '/signup',
//         element: <Signup />,
//       },
//       {
//         path: '/all-posts',
//         element: (
//           <AuthLayout>
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: '/add-post',
//         element: (
//           <AuthLayout>
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: '/edit-post/:slug',
//         element: (
//           <AuthLayout>
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ],
//   },
//   {
//     path:'/login',
//     element:<Login/>
//   }
// ])

// createRoot(document.getElementById('root')).render(
  
//     <Provider store={store}>
//       <RouterProvider router={router} />
//     </Provider>
    
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import { Provider } from 'react-redux';
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddPost from "./pages/AddPost.jsx";
import Signup from "./pages/Signup.jsx";
import EditPost from "./pages/EditPost.jsx";
import Home from "./pages/Home.jsx";
import AllPosts from "./pages/AllPosts.jsx";

import Login from "./components/Login.jsx";
import Post from "./pages/Post.jsx";
import AuthLayout from "./components/AuthLayout.jsx"
import App from './App.jsx';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',       
    element: (  <AuthLayout authentication={false}>
                <Home />
                </AuthLayout>
  ), // Independent page with its own layout
  },
  {
    path: '/signup',
    element: ( <>
              <Header/> 
               <Signup />
              <Footer/>
                </>
             ), // Independent page with its own layout
  },
  {
    path: '/login',
    element: (
          <>
            <Header />
            <Login />
            <Footer/>
            </>   
              
            
    ), // Independent page with its own layout
  },
  {
    path: '/all-posts',
    element: (
                 <AuthLayout authentication>
                  <AllPosts />
                 </AuthLayout>
    ), // Independent page with its own layout
  },
  {
    path: '/add-post',
    element:( 
              <AuthLayout authentication>
               <AddPost />
              </AuthLayout>

           ), // Independent page with its own layout
  },
  {
    path: '/edit-post/:slug',
    element: <EditPost />, // Independent page with its own layout
  },
  {
    path: "/post/:slug",
    element: <Post />, // Independent page with its own layout
  },
]);

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
