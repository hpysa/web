import s from './QRimg.module.css';

/**
 * Functional component for rendering a QR code image.
 *
 * @param {string} src - The source URL for the QR code image
 * @param {string} h2 - Optional text to display below the QR code image
 */
const QRImg = ({src, h2 = ''} : {src: string, h2?: string}) => (
    <>
        {h2 && s.h2 && <h2 className={s.h2}>{h2}</h2>}
        <img 
            src={src} 
            alt="QR Code" 
            width="400" 
            height="400" 
            className={s.qr}
        />
    </>
);

export default QRImg;
