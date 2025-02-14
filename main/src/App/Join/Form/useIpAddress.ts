import axios from 'axios';
import { useEffect, useState } from 'react';

export default function useIpAddress() {
    const [ip, setIP] = useState("");

    useEffect(() => { 
        const getIp = async () => {
            const res = await axios.get("https://api.ipify.org/?format=json");
            setIP(res.data.ip);
        };

        getIp();
    }, []);

    return ip;
}
