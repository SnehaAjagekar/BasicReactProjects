
import { createContext, useReducer } from "react";

export const PostList = createContext({
    
    postList: [],
    addPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    return currPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,DEFAULT_POST_LIST);

    const addPost = () => {

    }
    const deletePost = () => {

    }
    return <PostList.Provider value={{
        postList,
        addPost,
        deletePost
    }}
    >
        {children}
    </PostList.Provider>
}

const DEFAULT_POST_LIST = [
 {   id: '1',
    title: 'In the mumbai',
    body: 'heyy friends i am in mumbai and not gone to anywhere during my vacations',
    reaction: 1,
    userId: 'user-1',
    tags: ["vacation", "Mumbai", "Enjoying"]
},
{   id: '2',
    title: 'In the Kolhapur',
    body: 'heyy friends i am in Kolhapur and not gone to anywhere during my vacations',
    reaction: 10,
    userId: 'user-2',
    tags: ["vacation", "Kolhapur"]
}

];
export default PostListProvider;