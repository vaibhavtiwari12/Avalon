import BlogForm from './BlogForm';
import {Alert} from 'reactstrap';
import BlogTable from './BlogTable';
const Blog = () => {
    return (
        <div >
            <Alert color="primary">
                <h1 className="text-center"> Vaibhav's Blog</h1>          
            </Alert>
            <BlogForm />
            <BlogTable/>
        </div>
    )
}

export default Blog;