import CloudinaryImageType from '@/types/cloudinary';
import { Cloudinary, CloudinaryImage } from '@cloudinary/url-gen';
import axios from 'axios';

const cld = new Cloudinary({
    cloud: {
        cloudName: 'hpysa'
    },
    url: {
        shorten: true,
        secure: true
    }
});

export const getImages = async (dataUrl: string) => {
    const {
        data: { resources: data }
    } = await axios.get(dataUrl);
    return data?.sort((a: { created_at: string }, b: { created_at: string }) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
};

export const getImageURL = (img: CloudinaryImageType): CloudinaryImage => cld.image(img?.public_id).format('auto').quality('auto');
