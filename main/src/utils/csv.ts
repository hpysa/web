import parseCSV from '@kctolli/parsecsv';
import axios from 'axios';

interface DataObject {
    Announcements: string;
    Date: string;
    Timestamp: string;
}

export const getCSV = async (dataUrl: string) => {
    const { data } = await axios.get(dataUrl);
    return parseCSV(data);
};

/**
 * Sorts an array of objects by their 'Date' property in ascending order.
 *
 * @param {Array<Object>} data - The array of objects to be sorted.
 * @return {Array<Object>} The sorted array of objects.
 */
export const sortByDate = (data: DataObject[]): DataObject[] => data.sort((a, b) => new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime());

/**
 * Filters the given data array based on the date.
 *
 * @param {Array<Object>} data - The array of data to filter.
 * @return {Array<Object>} The filtered data array containing only the rows with a date greater than yesterday.
 */
export const filterData = (data: DataObject[]): DataObject[] => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return data.filter((row: DataObject) => new Date(row.Timestamp) > yesterday);
};
