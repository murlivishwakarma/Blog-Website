import React ,{useState,useEffect}from 'react'
import appwriteService from '../appwrite/config'
import PostCard from "../components/PostCard"
import Container from '../components/container/Container'

function Home(){
     
    const [posts,setPost] = useState([])
     
    useEffect(()=>{
        appwriteService.getPosts().then((posts)=>{
            if(posts){
                setPost(posts.documents)
            }
        })
    },[])

    if(posts.length===0){
        return (
        <div className="bg-white">
                <Container>
                    <div className="max-w-7xl mx-auto px-4 py-16">
                        <div className="text-center">
                            <h1 className="text-2xl font-medium text-gray-900">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <Container>
                <div className="max-w-7xl mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {posts.map((post) => (
                            <div key={post.$id}>
                                <PostCard post={post} />
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </div>
    )
     
}
export default Home