import { useQuery } from "@tanstack/react-query";
import getCSV from "../../../getCSV";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=1096489776&single=true&output=csv";

export default function Bishop() {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['bishop'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
    });  

    if (isPending) return <div>Loading...</div>;
    if (isError)   return <div>Error</div>;

    if (!data || !data[0]) return (<div>Error getting Executive Secretary data</div>);
    const { Email, Phone, Name } = data[0] as any;

    return (
        <div>
            <strong>Executive Secretary: {Name}</strong>
            <ul>
                <li><strong>Phone: </strong><a href={`tel:${Phone}`}>{Phone}</a></li>
                <li><strong>Email: </strong><a href={`mailto:${Email}`}>{Email}</a></li>
            </ul>
        </div>
    );
}
