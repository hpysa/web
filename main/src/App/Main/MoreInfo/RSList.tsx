import { useQuery } from "@tanstack/react-query";

import CallingMap from "./CallingMap";
import getCSV from "../../../getCSV";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=202930878&single=true&output=csv";

export default function RSList() {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['rs'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
    });  

    if (isPending) return <div>Loading...</div>;
    if (isError)   return <div>Error</div>;

    return (<CallingMap data={data} />);
}
