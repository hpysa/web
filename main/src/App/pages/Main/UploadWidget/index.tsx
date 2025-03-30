import { Tooltip } from 'antd';
import { useEffect, useRef } from 'react';

const UploadWidget = () => {
    const cloudinaryRef = useRef<any>(null);
    const widgetRef = useRef<any>(null);
    useEffect(() => {
        cloudinaryRef.current = window.cloudinary;
        if (cloudinaryRef.current) {
            widgetRef.current = cloudinaryRef.current.createUploadWidget({
                cloudName: 'hpysa',
                uploadPreset: 'ml_default',
                folder: 'activity',
                tags: ['activity']
            });
        }
    }, []);

    return (
        <Tooltip title="Image Upload" placement="left">
            <button className="flex size-20 items-center justify-center rounded-full border-2 border-[#3448c5] bg-white shadow-lg drop-shadow-lg focus-visible:outline-[#3448c5]" aria-label="Cloudinary Upload" onClick={() => widgetRef.current.open()}>
                <img className="size-12" src="https://res.cloudinary.com/hpysa/f_auto,q_auto/cloudinary.svg" alt="Cloudinary Logo" />
            </button>
        </Tooltip>
    );
};

export default UploadWidget;
