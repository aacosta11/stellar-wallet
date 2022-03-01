import axios from "axios";
import { useEffect, useState } from "react";

const FetchDemoKeys = () => {
    const [keys,setKeys] = useState('');
    useEffect(()=> {
        axios.get('https://localhost:7114/demo-keys')
            .then(res=>setKeys(res.data))
            .catch(err=>console.log(err))
    })
    return (keys);
}
export default FetchDemoKeys;