import { useQuery } from "@tanstack/react-query"

async function fetchPosts(){
    return (await fetch("https://dummyjson.com/posts")).json()
}

async function fetchPost({ queryKey }){
    return (await fetch(`https://dummyjson.com/posts/${queryKey[1]}`)).json()
}

export function usePosts(){
     return useQuery({queryKey: ["posts"], queryFn: fetchPosts })
}

export function usePost(id){
    return useQuery({queryKey: ["posts", id], queryFn: fetchPost })
}