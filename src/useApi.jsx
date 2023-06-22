import { useEffect, useState } from "react";



const useApi = (url) => {

    const [response, setResponse] = useState({data: null, isLoading: true});

    useEffect(
        () => {
            setResponse({data:null, isLoading: true});
            fetch(url)
            .then((res) => res.json())
            .then((data) => setResponse({ data, isLoading: false }))
            .catch((error) => console.log(error))
        }, [url, setResponse]
    );



    return response
}

export default useApi;