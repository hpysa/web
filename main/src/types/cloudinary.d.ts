type CloudinaryImageType = {
    asset_folder: string;
    asset_id: string;
    created_at: string;
    format: string;
    height: integer;
    public_id: string;
    type: string;
    version: integer;
    width: integer;
};

declare global {
    interface Window {
        cloudinary: any;
    }
}

export default CloudinaryImageType;
