import { Select } from "antd";

type YesNoSelectorType = {
    title: string,
    value: string,
    set: any
}

export default function YesNoSelector ({title, value, set}: YesNoSelectorType) {
    return (
        <div>
            {title}
            <Select 
                onChange={(e) => set(e)} 
                value={value}
            >
                <Select.Option value="">Select</Select.Option>
                <Select.Option value="Yes">Yes</Select.Option>
                <Select.Option value="No">No</Select.Option>
            </Select>
        </div>
    )
}
