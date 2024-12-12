import React,{useCallback} from "react"
 import {useForm} from "react-hook-form"
 import RTE from "../RTE.jsx"
 import Button from "../Button.jsx"
import Input from "../Input.jsx"
import Select from "../Select.jsx"
import Logo from "../Logo.jsx"
 import appwriteService from "../../appwrite/config"
 import {useNavigate} from "react-router-dom"
 import {useSelector} from 'react-redux'


function PostForm({post}){
     const {register,handleSubmit,watch, setValue,control, getValues}= useForm({
        defaultValues:{ 
            title:post?.title || '',
            slug:post?.slug || '',
            content:post?.content || '',
            status:post?.status || 'active',
        }
     })
       const navigate= useNavigate();
       const userData = useSelector(state=>state.auth.userData);
       
       const submit = async (data)=>{
            if(post){
             const file= data.image[0]? appwriteService.uploadFile(data.image[0]):null
             if(file){
                  appwriteService.deleteFile(post.featuredImage)
             }
                  const dbPost = await appwriteService.updatePost(post.$id,{...data,
                      featuredImage: file ? file.$id : undefined,
                  })
                  if (dbPost) {
                    navigate(`/post/${dbPost.$id}`)
                  }

            }
            else{
                const file = await  appwriteService.uploadFile(data.image[0])

                 if(file){
                      const fileId=file.$id
                      data.featuredImage=fileId
                      console.log(data.content);
                    const dbPost= await appwriteService.createPost({
                        title: data.title,
                        featuredImage: data.featuredImage,
                        content:data.content,
                         status:data.status,
                        userId:userData.$id,
                        slug:fileId
                                          })
                      if(dbPost){
                          navigate(`/post/${dbPost.$id}`)
                      }

                 }
            }
       }

       const slugTransform = useCallback((value)=>{
               if(value && typeof value === 'string'){
                    
                    return value.trim().replace(/\s/g, '_')
               }
            //return ''  
       },[])

       React.useEffect(()=>{
           const subscription = watch((value,{name})=>{
              if(name==='title'){
                   setValue('slug',slugTransform(value.title,{
                    shouldValidate:true,
                   }))
              }
           })
           return ()=>{
              subscription.unsubscribe()
           }    
       },[watch,slugTransform,setValue])
    

    return(
        // <form onSubmit ={handleSubmit(submit)} className="flex flex-wrap">
        //     <div className="w-2/3 px-2">
        //     <Input
        //            label="Title:"
        //            placeholder="Title"
        //            className="mb-4"
        //            {...register("title",{required:true})}
        //     />
        //     <Input
        //       label="slug"
        //       placeholder="slug"
        //       className="mb-4"
        //       {...register("slug",{required:true})}
        //       onInput={(e)=>{
        //              setValue("slug",slugTransform(e.currentTarget.value),{
        //                 shouldValidate:true
        //              })
        //       }}
        //     />
        //      <RTE label="Content :" name="content" control={control} defalutValue= {getValues("content")}/>

        //     </div>
        //      <div className="w-1/3 px-2">
        //       <Input
        //          label="Featured Image :"
        //          type="file"
        //          className="mb-4"
        //          accept="image/png,image/jpg,image/jpeg,image/gif"
        //          {...register("image",{required:!post})}
        //       />
        //       {
        //         post && (
        //             <div className="w-full mb-4">
        //                 <img
        //                      src={appwriteService.getFilePreview(post.featuredImage)}
        //                      alt={post.title}
        //                      className="rounded-lg"

        //                 />
        //             </div>
        //         )
        //       }
        //       <Select
        //         options={["active","inactive"]}
        //          label="Status"
        //          className="mb-4"
        //          {...register("status",{required:true})}
        //       />
        //            <Button type="submit" bgColor ={post ? "bg-green-500" :undefined}
        //               className="w-full"
        //            >
        //              {post ? "Update" : "Submit"}
        //            </Button>
        //      </div>
        // </form>



        <form onSubmit={handleSubmit(submit)} className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-2/3 px-4">
                <div className="bg-gray-100 border-2 border-black p-6 mb-6">
                    <Input
                        label="Title"
                        placeholder="Enter post title"
                        className="mb-6"
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug"
                        placeholder="post-slug"
                        className="mb-6"
                        {...register("slug", { required: true })}
                        onInput={(e) => {
                            setValue("slug", slugTransform(e.currentTarget.value), {
                                shouldValidate: true
                            })
                        }}
                    />
                    <div className="mb-6">
                        <RTE
                            label="Content"
                            name="content"
                            control={control}
                            defalutValue={getValues("content")}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full lg:w-1/3 px-4">
                <div className="bg-gray-100 border-2 border-black p-6">
                    <div className="mb-6">
                        <Input
                            label="Featured Image"
                            type="file"
                            accept="image/png,image/jpg,image/jpeg,image/gif"
                            {...register("image", { required: !post })}
                        />
                    </div>
                    {post && (
                        <div className="mb-6">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="w-full aspect-video object-cover"
                            />
                        </div>
                    )}
                    <div className="mb-6">
                        <Select
                            options={["active", "inactive"]}
                            label="Status"
                            {...register("status", { required: true })}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full px-4 py-2 text-base font-medium text-gray-900 bg-gray-100 border-2 border-black hover:bg-gray-50 transition-colors duration-200`}
                    >
                        {post ? "Update Post" : "Create Post"}
                    </button>
                </div>
            </div>
        </div>
    </form>
    )
}
export default PostForm