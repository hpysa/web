import parseCSV from '@kctolli/parsecsv';
import axios from 'axios';

const getCSV = async (dataUrl: string) => {
    const { data } = await axios.get(dataUrl);
    return parseCSV(data);
}

export default getCSV;
