import getCSV from '@/utils/csv';
import { activitiesColumns, filterData, sortByDate } from '@/utils/table';
import { useQuery } from '@tanstack/react-query';
import { Spin, Table } from 'antd';
import { memo } from 'react';

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=0&single=true&output=csv";

const Activities = memo(() => {
    const {
        data,
        isPending,
        isError,
    } = useQuery({ 
        queryKey: ['activities'], 
        queryFn: () => getCSV(dataUrl),
        enabled: true,
	});

    if (isPending) return <Spin size="large" className="w-full" />;
    if (isError) return <div>Error: Please Reload The Page</div>;

    return (
		<Table
            dataSource={sortByDate(filterData(data))} 
            columns={activitiesColumns} 
        />
    );
});

export default Activities;