import Logo from './shared/Logo';

type Props = {};

const topBar = (props: Props) => {
	return (
		<div className='sm:flex items-center justify-center absolute top-0 left-0 hidden md:pt-3 w-full z-50'>
			<Logo
				size='sm'
				iconOnly
			/>
		</div>
	);
};
export default topBar;
