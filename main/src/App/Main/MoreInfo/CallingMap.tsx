export default function CallingMap({ data }: { data: any[] }) {
    return (
        <ul>
            {data.map(row => 
                <li>
                    <strong>{row.Calling}:</strong> {row.Name}
                </li>
            )}
        </ul>
    );
}
