import { getCSV } from '@/utils/csv';
import { sortByDate } from '@/utils/csv';
import { useQuery } from '@tanstack/react-query';
import { List, Spin } from 'antd';
import parse from 'html-react-parser';
import { memo, useEffect, useState } from 'react';

const Announcements = memo(() => {
    const [date, setDate] = useState<string>(new Date().toLocaleDateString('en-US', { month: 'numeric', day: 'numeric' }));
    const [announcements, setAnnouncements] = useState<string[]>([]);

    const dataUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=778227556&single=true&output=csv';
    const { data, isPending, isError, isFetched }: { data: any; isPending: boolean; isError: boolean; isFetched: boolean } = useQuery({
        queryKey: ['announcements'],
        queryFn: () => getCSV(dataUrl),
        enabled: true
        // refetchInterval: 5000,
        // staleTime: 5000,
    });

    useEffect(() => {
        if (isFetched && data) {
            const [{ Date, Announcements }] = sortByDate(data);
            setDate(Date);
            setAnnouncements(
                Announcements.replace(/"/g, '')
                    .replace(/'/g, '')
                    .split(/(?<=<\/p>)/)
            );
        }
    }, [data]);

    if (isPending) return <Spin size="large" className="w-full" />;
    if (isError) return <div>Error</div>;

    return !!announcements.length ? (
        <section className="[&_.ant-list-header]:rounded [&_.ant-list-header]:bg-[#f0f4f9] [&_.ant-list]:rounded">
            <List bordered header={<div className="text-base font-semibold sm:text-lg">{`${date} `}Announcements</div>} dataSource={announcements} renderItem={(announcement) => <List.Item>{parse(announcement)}</List.Item>} />
        </section>
    ) : null;
});

export default Announcements;
