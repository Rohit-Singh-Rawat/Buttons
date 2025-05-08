interface BoxProps {
	children: React.ReactNode;
	className?: string;
}
const Box = ({ children, className }: BoxProps) => {
	return (
		<div className={`flex-center relative h-full w-full flex-1 border ${className}`}>
			<div className='absolute rounded-full bg-white border size-2 -left-1 -top-1 before:absolute before:from-[10%] before:right-1/2 before:top-[2px] before:-z-10 z-10 origin-center before:block before:w-10 before:h-[1px] before:bg-gradient-to-l before:from-transparent before:via-[20%] before:via-border before:to-transparent shadow-sm after:h-10 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:from-[10%] after:via-[20%] after:via-border after:to-transparent after:absolute after:inset-0 after:rounded-full after:-top-9 after:left-1/2 after:-z-10' />

			<div className='absolute rounded-full bg-white border size-2 -top-1 -right-1 before:absolute before:from-[10%] before:left-1/2 before:top-[2px] before:-z-10 z-10 origin-center before:block before:w-10 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[20%] before:via-border before:to-transparent shadow-sm after:h-10 after:w-[1px] after:bg-gradient-to-t after:from-transparent after:from-[10%] after:via-[20%] after:via-border after:to-transparent after:absolute after:inset-0 after:rounded-full after:-top-9 after:left-1/2 after:-z-10' />

			<div className='absolute rounded-full bg-white border size-2 -bottom-1 -left-1 before:absolute before:from-[10%] before:right-1/2 before:top-[2px] before:-z-10 z-10 origin-center before:block before:w-10 before:h-[1px] before:bg-gradient-to-l before:from-transparent before:via-[20%] before:via-border before:to-transparent shadow-sm after:h-10 after:w-[1px] after:bg-gradient-to-b after:from-transparent after:from-[20%] after:via-[20%] after:via-border after:to-transparent after:absolute after:inset-0 after:rounded-full after:bottom-9 after:origin-center after:left-1/2 after:-z-10' />

			<div className='absolute rounded-full bg-white border size-2 -bottom-1 -right-1 before:absolute before:from-[10%] before:left-1/2 before:top-[2px] before:-z-10 z-10 origin-center before:block before:w-10 before:h-[1px] before:bg-gradient-to-r before:from-transparent before:via-[20%] before:via-border before:to-transparent shadow-sm after:h-10 after:w-[1px] after:bg-gradient-to-b after:from-transparent after:from-[20%] after:via-[20%] after:via-border after:to-transparent after:absolute after:inset-0 after:rounded-full after:bottom-9 after:left-1/2 after:-z-10' />

			{children}
		</div>
	);
};

export default Box;
