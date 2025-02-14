import { Button } from '@/components/atoms/unstyled';
import tw from 'twin.macro';

const PaginatedButton = tw(({ children, ...props }) => <Button {...props}>{children}</Button>)`
	bg-black text-white
`;

export { PaginatedButton };