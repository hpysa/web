import { Select } from 'antd';
import FormSections from '../FormSections';

type ChocolateType = {
    value: string,
    set: any
}

const Chocolate = ({value, set}: ChocolateType) => (
	<section>
		<FormSections title="Choose a Chocolate Bar" />
		<p>You completed the survey choose your chocolate. Talk to the Ward Clerk to get your chocolate.</p>
		<strong>NOTE: Not all chocolates may be available</strong>
		<Select 
			onChange={(e) => set(e)} 
			value={value}
		>
			<Select.Option value="">What is your choice?</Select.Option>
			<Select.Option value="M&M">M&M</Select.Option>
			<Select.Option value="PB M&M">Peanut Butter M&M</Select.Option>
			<Select.Option value="Snickers">Snickers</Select.Option>
			<Select.Option value="Milky Way">Milky Way</Select.Option>
			<Select.Option value="Twix">Twix</Select.Option>
			<Select.Option value="Any">Any Chocolate is fine</Select.Option>
			<Select.Option value="No">No Chocolate</Select.Option>
		</Select>
	</section>
);

export default Chocolate;