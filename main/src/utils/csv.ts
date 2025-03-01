import parseCSV from '@kctolli/parsecsv';
import axios from 'axios';

export const getCSV = async (dataUrl: string) => {
    const { data } = await axios.get(dataUrl);
    return parseCSV(data);
}

/**
 * Sorts an array of objects by their 'Date' property in ascending order.
 *
 * @param {Array<Object>} data - The array of objects to be sorted.
 * @return {Array<Object>} The sorted array of objects.
 */
export const sortByDate = (data: any): Array<object> => data.sort((a, b) => new Date(a.Date) - new Date(b.Date));
