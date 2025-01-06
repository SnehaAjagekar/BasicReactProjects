
import { createContext, useReducer } from "react";

export const PostList = createContext({
    
    postList: [],
    addPost: () => {},
    addInitialPost: () => {},
    deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if(action.type === "DELETE_POST"){
        newPostList = currPostList.filter(
            (post) => post.id !== action.payload.postId
        )
    }else if (action.type === "ADD_INITIAL_POSTS"){
        newPostList = action.payload.posts;
    }
    else if (action.type === "ADD_POST"){
        newPostList = [action.payload, ...currPostList];
    }
    return newPostList;
}

const PostListProvider = ({children}) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,[] /*DEFAULT_POST_LIST*/ );

    const addPost = ({userId, postTitle, postBody, reactions, tags}) => {
        dispatchPostList({
            type: "ADD_POST",
            payload:{  
                 id:Date.now() ,
                title: postTitle,
                body: postBody,
                reaction: reactions,
                userId: userId,
                tags: tags
            },

        })
    }
    const addInitialPost = (posts) => {
        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload:{  
                 posts,
            },

        })
    }
    const deletePost = (postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload:{
                postId,
            },

        })
    }
    return <PostList.Provider value={{
        postList,
        addPost,
        addInitialPost,
        deletePost
    }}
    >
        {children}
    </PostList.Provider>
}

// const DEFAULT_POST_LIST = [
//  {   id: '1',
//     title: 'In the mumbai',
//     body: 'heyy friends i am in mumbai and not gone to anywhere during my vacations',
//     reaction: 1,
//     userId: 'user-1',
//     tags: ["vacation", "Mumbai", "Enjoying"]
// },
// {   id: '2',
//     title: 'In the Kolhapur',
//     body: 'heyy friends i am in Kolhapur and not gone to anywhere during my vacations',
//     reaction: 10,
//     userId: 'user-2',
//     tags: ["vacation", "Kolhapur"]
// }

// ];
export default PostListProvider;