import React , {useState,useEffect} from 'react'
import PostCard from '../components/PostCard'
import Container from '../components/container/Container'
import appwriteService from '../appwrite/config'
import { useSelector } from 'react-redux'
function AllPosts(){
     const [posts,setPosts] = useState([])
     const userData = useSelector(state=> state.auth.userData);
     useEffect(()=>{
        appwriteService.getPosts([]).then((posts)=>{
            if(posts){
                setPosts(posts.documents)
            }
         })
     },[])

    
    return(
        // <div className=' w-full py-8'>
        //     <Container>
        //         <h1>Your Post are</h1>
        //        <div className='flex flex-wrap'>
        //              {
        //                 posts.map((post)=>{

        //                    if(post.userId === userData.$id){ 
        //                        return(
        //                        <div key={post.$id} className='p-2 w-1/4'>
                                    
        //                         <PostCard post={post} />
        //                        </div>
        //                         )
        //                     }})
        //              }
        //        </div>
        //     </Container>

        // </div>

        <div className="bg-white">
        <Container>
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-2xl font-medium text-gray-900 mb-8">Your Posts</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {posts.map((post) => {
                        if (post.userId === userData.$id) {
                            return (
                                <div key={post.$id}>
                                    <PostCard post={post} />
                                </div>
                            )
                        }
                        return null
                    })}
                </div>
            </div>
        </Container>
    </div>
    )
}

export default AllPosts