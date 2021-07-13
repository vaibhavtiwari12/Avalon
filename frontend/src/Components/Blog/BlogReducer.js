const BlogReducer = (state = {posts:[]}, action) => {
    switch(action.type){
        case "UPDATE_BLOG" : 
        console.log("ACTION.DATA",action.data)
            return {
                ...state,
                posts:state.posts.concat(action.data)
            }
        case "ADD_BLOGS" : 
            return {
                ...state,
                posts:action.data
            }
        default : return state
    }
}

export default BlogReducer;