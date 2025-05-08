import type { ReactNode } from 'react';
import { cn } from '~/lib/utils';

type Props = {
	children?: ReactNode;
	className?: string;
};

const ConnerDiv = ({ children, className }: Props) => {
	return (
		<div className={cn('flex items-center justify-center border-border border p-2  relative group', className)}>
			<div className='absolute -top-[1px] -left-[0.5px] size-2 border-t border-l border-black group-hover:-translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
			<div className='absolute -top-[1px] -right-[0.5px] size-2 border-t border-r border-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300' />
			<div className='absolute -bottom-[1px] -left-[0.5px] size-2 border-b border-l border-black group-hover:-translate-x-1 group-hover:translate-y-1 transition-all duration-300' />
			<div className='absolute -bottom-[1px] -right-[0.5px] size-2 border-b border-r border-black group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-300' />

			{children || 'ConnerDiv'}
		</div>
	);
};
export default ConnerDiv;
