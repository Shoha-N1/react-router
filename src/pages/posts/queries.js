import { useQuery } from "@tanstack/react-query"

async function fetchPosts(){
    return (await fetch("http://localhost:1337/api/newss")).json()
}

async function fetchPost({ queryKey }){
    return (await fetch(`http://localhost:1337/api/newss/${queryKey[1]}`)).json()
}

export function usePosts(){
     return useQuery({queryKey: ["posts"], queryFn: fetchPosts })
}

export function usePost(id){
    return useQuery({queryKey: ["posts", id], queryFn: fetchPost })
}