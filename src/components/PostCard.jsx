import React from "react";
import appwriteService from "../appwrite/config.js"
import {Link} from "react-router-dom"
// function PostCard({...props}){
     
//     return (
//       <Link to={`/post/${props.post.$id}`}>
//         <div className="w-full bg-gray-100 rounded-xl p-4">
//             <div className="w-full justify-center mb-4">
                    
//                 <img src={appwriteService.getFilePreview(props.post.featuredImage)} alt={props.post.title} className="rounded-xl" />
//             </div>
//             <h2 className="text-xl font-bold">{props.post.title}</h2>
//         </div>
//       </Link>
       
//     )
// }

function PostCard({ ...props }) {
  return (
    // <Link to={`/post/${props.post.$id}`}>
    //   <div className="w-full bg-gray-100 rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow">
    //     <div className="w-full h-48 mb-4 overflow-hidden rounded-xl">
    //       {/* Ensure the image adjusts automatically */}
    //       <img
    //         src={appwriteService.getFilePreview(props.post.featuredImage)}
    //         alt={props.post.title}
    //         className="w-full h-full object-cover"
    //       />
    //     </div>
    //     <h2 className="text-xl font-bold text-gray-800">{props.post.title}</h2>
    //   </div>
    // </Link>


    <Link to={`/post/${props.post.$id}`}>
    <div className="w-full bg-gray-100 border-2 border-black p-5 transition-all duration-200 hover:bg-gray-50">
      <div className="w-full aspect-video mb-4 overflow-hidden">
        <img
          src={appwriteService.getFilePreview(props.post.featuredImage)}
          alt={props.post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h2 className="text-base font-medium text-gray-900">{props.post.title}</h2>
    </div>
  </Link>
  );
}


export default PostCard
