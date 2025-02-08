// @ts-nocheck 

export const columns = [
  {
    title: 'Date',
    dataIndex: 'Date',
    key: 'Date',
  },
  {
    title: 'Activity',
    key: 'Activity',
    render: (record: any) => {
      if (record.Location) {
        return `${record.Activity} at ${record.Location}`;
      }
      return record.Activity;
    },
  },
];


/**
 * Sorts an array of objects by their 'Date' property in ascending order.
 *
 * @param {Array<Object>} data - The array of objects to be sorted.
 * @return {Array<Object>} The sorted array of objects.
 */
export const sortByDate = (data: any) => 
  data.sort((a, b) => new Date(a.Date) - new Date(b.Date));

/**
 * Filters the given data array based on the date.
 *
 * @param {Array<Object>} data - The array of data to filter.
 * @return {Array<Object>} The filtered data array containing only the rows with a date greater than yesterday.
 */
export const filterData = (data: any) => {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return data.filter(row => new Date(row.Date) > yesterday);
};
