import React,{useEffect,useState} from 'react'
import PostForm from "../components/post-from/PostForm"
import Container from '../components/container/Container'
import appwriteService from '../appwrite/config'
import { useNavigate, useParams } from 'react-router-dom'


function EditPost(){
          const [post,setposts] =useState(null)
          const {slug} = useParams()
          const navigate = useNavigate();
          
          useEffect(()=>{
            if(slug){
                appwriteService.getPost(slug).then((post)=>{
                    if(post){
                        setposts(post)
                    }
                })
            }
            else{
                navigate('/')
            }
          },[slug,navigate])

      return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post}/>
            </Container>
        </div>
      ): null
       
      
}
export default EditPost