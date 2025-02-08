import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { Table } from "antd";

import { columns, filterData, sortByDate } from "./utils";
import getCSV from "../../../getCSV";

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=0&single=true&output=csv";

const ActivitiesTable = memo(() => {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['activities'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
	});
	
	console.log(data)

    if (isPending) return <div>Loading...</div>;
    if (isError)   return <div>Error</div>;

    return (
        <Table 
            dataSource={sortByDate(filterData(data))} 
            columns={columns} 
        />
    );
});

export default ActivitiesTable;
