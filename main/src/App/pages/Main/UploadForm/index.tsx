import { getCSV, sortByDate } from '@/utils/csv';
import { FormOutlined } from '@ant-design/icons';
import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, DatePicker, Form, Modal, Tag, Tooltip } from 'antd';
import { DatePickerProps, RangePickerProps } from 'antd/es/date-picker';
import axios from 'axios';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import weekday from 'dayjs/plugin/weekday';
import { memo, useEffect, useState } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import Editor from '../Editor';

const UploadForm = memo(() => {
    dayjs.extend(utc);
    dayjs.extend(weekday);

    const [date, setDate] = useState<string>(dayjs().startOf('day').weekday(0).format('M/DD/YY'));
    const [announcements, setAnnouncements] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    const [form] = Form.useForm();
    const variant = Form.useWatch('variant', form);
    const isDesktop = useMediaQuery('(min-width: 1024px)');

    const dataUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQ-nZns9eqbNOFLhBRWc1LRQLvt_gofRmUIOEVEyjBNBnF9_S0DUaJJ6kNUAmsQEEnm51b7CkTjqIV0/pub?gid=778227556&single=true&output=csv';
    const { data, isFetched }: { data: any; isFetched: boolean } = useQuery({
        queryKey: ['announcements'],
        queryFn: () => getCSV(dataUrl),
        enabled: true
        // refetchInterval: 5000,
        // staleTime: 5000,
    });

    const disabledDate: RangePickerProps['disabledDate'] = (current) => current < dayjs().startOf('day') || current.day() !== 0;
    const onDateChange: DatePickerProps['onChange'] = (_, dateString) => typeof dateString === 'string' && setDate(dateString);

    useEffect(() => {
        if (isFetched && data) {
            const [{ Announcements }] = sortByDate(data);
            setAnnouncements(Announcements.replace(/"/g, '').replace(/'/g, '').replaceAll('\\n', '\n'));
        }
    }, [data]);

    const postAnnouncements = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData();
        formData.append('Date', date);
        formData.append('Announcements', announcements);
        formData.append('Timestamp', dayjs().utc().format());

        try {
            const apiUrl = 'https://script.google.com/macros/s/AKfycbwKWOFAbRtcrPnqc5GgJZWOJP7RLiQ2gIXU0StadaiUOrn71R19Lwmps4olxINqGMdaXQ/exec';
            const res = await axios.post(apiUrl, formData);
            if (res.status === 200) {
                setLoading(false);
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
            alert('There was an error. Please try again.');
        }
    };

    const { mutate: handleSubmit } = useMutation({
        mutationKey: ['announcements'],
        mutationFn: postAnnouncements
    });

    return (
        <>
            <Tooltip title="Announcements" placement="left">
                <button className="flex size-16 items-center justify-center rounded-full border-2 border-primary bg-white shadow-lg drop-shadow-lg lg:size-20" aria-label="Cloudinary Upload" onClick={() => setOpen(true)}>
                    <FormOutlined className="text-primary [&>svg]:size-6 [&>svg]:lg:size-8" />
                </button>
            </Tooltip>
            <Modal
                title={<div className="text-base font-semibold sm:text-lg">Announcements</div>}
                footer={
                    <>
                        <Button type="default" onClick={() => setOpen(false)}>
                            Cancel
                        </Button>
                        <Button type="primary" disabled={!announcements.length || !date.length} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </>
                }
                loading={loading}
                open={open}
                onCancel={() => setOpen(false)}
                className="!w-full max-w-screen-sm lg:max-w-screen-md"
                centered={isDesktop ? true : false}
            >
                <Form variant={variant || 'filled'} initialValues={{ variant: 'filled' }} requiredMark={() => <Tag color="error">Required</Tag>}>
                    <Form.Item
                        name="announcements"
                        initialValue={announcements}
                        className="mt-6"
                        rules={[
                            {
                                required: true,
                                message: 'Text cannot be empty',
                                validator: (_, value) => (value === '<p><br></p>' || value === '' || value === null || value === undefined ? Promise.reject(new Error('Field is required')) : Promise.resolve())
                            }
                        ]}
                    >
                        <Editor value={announcements} onChange={setAnnouncements} />
                    </Form.Item>
                    <Form.Item name="date" rules={[{ required: true, message: 'Date cannot be empty' }]} initialValue={dayjs().startOf('day').weekday(0)}>
                        <DatePicker onChange={onDateChange} format={'MM/DD/YY'} disabledDate={disabledDate} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
});

export default UploadForm;
