import {Table, Button} from 'reactstrap';
import { useState, useEffect } from 'react';
import {useSelector,useDispatch} from 'react-redux';

const BlogTable = () => {
    const content = useSelector(state => state.BlogReducer);
    const dispatch = useDispatch();
    const posts = content.posts;

    const getPosts = () => {
        fetch("/mongo/get")
        .then(res => res.json())
        .then(res => {
            console.log(res);
            dispatch({
                type: "ADD_BLOGS",
                data:res
            })
        })
    }
    
    useEffect(() => {
        getPosts()
    },[]);
    
    const deletePost = (id) => {
        fetch(`/mongo/delete/${id}`).then(()=>{
            getPosts();
        })
    }
    return (
        <div>  
            <Table striped size='lg' className="">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Date</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.length>0 && posts.map((post) => {
                        return <tr key={post._id}>
                                    <td>{post._id}</td>
                                    <td>{post.title}</td>
                                    <td>{post.body}</td>
                                    <td>{post.date/* new Date(.toString()) */}</td>
                                    <td><Button color="danger" size="sm" onClick={() => deletePost(post._id)}>Delete</Button></td>
                                </tr>
                        })  
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default BlogTable;