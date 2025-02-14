import { useQuery } from "@tanstack/react-query";
import { Tooltip } from "antd";
import getCSV from "../../getCSV";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=778227556&single=true&output=csv";

export default function StakeNight() {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['stake-night'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
    });  

    if (isPending) return <div>Loading...</div>;
    if (isError)   return <div>Error</div>;

    return (
        <section>
            <h2>Stake Night</h2>
            <p>"The Place to Be" Every Thursday Night (
                <Tooltip title="2195 N. 100 E. Pleasant Grove">
                    <a href="https://goo.gl/maps/hW2LUYLmEEt7iAMBA" target="_blank">Stake Center</a>
                </Tooltip>
            )</p>
            <ul>
                {data?.map(row => {
                    // @ts-ignore
                    if (!row.Event) return null;
                    // @ts-ignore
                    return <li><strong>{row.Time}:</strong> {row.Event}</li>
                })}
            </ul>
        </section>
    );
}
