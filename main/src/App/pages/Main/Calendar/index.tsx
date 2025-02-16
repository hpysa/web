type CalendarType = {
    type?: string,
}

const Calendar = ({ type }: CalendarType) => {
	const url = type === 'stake'
		? 'https://calendar.google.com/calendar/u/0/embed?height=600&wkst=1&ctz=America%2FDenver&title=Alpine%20Utah%20YSA%20Stake&color=%23B3DC6C&mode=AGENDA&src=223amftqs12rme8eod96al6e8jgdaekt@import.calendar.google.com'
		: 'https://calendar.google.com/calendar/embed?height=600&wkst=1&ctz=America%2FDenver&title=Heritage%20Park%20YSA%20Ward%2C%2026-35&src=aHB5c2F3ZWJAZ21haWwuY29t&color=%23039BE5&mode=AGENDA';

	return <iframe className="w-full border rounded shadow-md" src={url} width="800" height="600"></iframe>;
}
export default Calendar;