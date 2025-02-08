import Layout from './Layout/Layout';
import QRImg from './QRimg/QRimg';

/**
 * Renders a QR code image for attendance.
 *
 * @param {string} page - The page name for the attendance
 * @param {string} image - The image URL for the QR code
 * @return {JSX.Element} QR code image component
 */
const Attendance = ({page, image}: {page: string, image: string}) => (
    <QRImg src={image} h2={`${page} Attendance`} />
);

const Components = {
    Layout,
    QRImg,
    Attendance,
};

export default Components;
