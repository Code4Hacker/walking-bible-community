import {useEffect, useState} from "react";

const useFetch = (url) => {
    const [postData, setPostData] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch(url);
            const datas = await response.json();
            setPostData(datas.data);
           
        }
        fetchData()
    },[url]);
    return {postData}

}
export default useFetch;