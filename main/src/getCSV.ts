import parseCSV from '@kctolli/parsecsv';
import axios from 'axios';

const getCSV = async (dataUrl: string) => {
    const res = await axios.get(dataUrl);
    return parseCSV(res.data);
}

export default getCSV;
