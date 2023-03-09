import {useEffect, useState} from "react";

const usePost = (url) => {
    const [post, setPost] = useState(null);

    useEffect(() => {
        const postedData = () => {
            fetch(url,{
                method:'POST',
                headers:{
                    'content-Type': 'application/json',
                },
                body:JSON.stringify({
                    title:'MAPENDO YETU',
                    content:'233 packages are looking for funding run `npm fund` for details 6 high severity vulnerabilities To address all issues (including breaking changes), run:npm audit fix --force Run `npm audit` for details.',
                    image:'http://psje.jpg'
                }),
            }).then(reponse => reponse.json()).then(response => console.log(response.data))
        }
        postedData()
    },[url]);
    return {post}

}
export default usePost;