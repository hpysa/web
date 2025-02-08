import { useQuery } from "@tanstack/react-query";

import CallingMap from "./CallingMap";
import getCSV from "../../../getCSV";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=1207877042&single=true&output=csv";

export default function EQList() {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['eq'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
    });  

    if (isPending) return <div>Loading...</div>;
    if (isError)   return <div>Error</div>;

    return (<CallingMap data={data} />);
}
