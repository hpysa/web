import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";
import { Loader2 } from "lucide-react";
import { memo } from "react";
import getCSV from "../../../../getCSV";
import { leadershipColumns } from "../utils";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=1948800910&single=true&output=csv";

const Leadership = memo(() => {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['leadership'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
	});

    if (isPending) return <Loader2 className="w-full text-primary animate-spin"/>;
    if (isError) return <div>Error: Please Reload The Page</div>;

    return (
		<Table
            dataSource={data}
            columns={leadershipColumns} 
        />
    );
});

export default Leadership;
