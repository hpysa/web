import axios from 'axios';
import { useEffect, useState } from 'react';

const useIpAddress = () => {
    const [ip, setIP] = useState('');

    useEffect(() => { 
        const getIp = async () => {
            const { data: { ip } } = await axios.get("https://api.ipify.org/?format=json");
            setIP(ip);
        };

        getIp();
    }, []);

    return ip;
}

export default useIpAddress;