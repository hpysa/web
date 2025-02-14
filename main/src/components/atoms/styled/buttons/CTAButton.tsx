import tw from 'twin.macro'
import { Button } from '@/components/atoms/unstyled'

const CTAButton = tw(({ children, ...props }) => <Button {...props}>{children}</Button>)`
	bg-black text-white
`;

export { CTAButton }