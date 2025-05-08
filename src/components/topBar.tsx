import Logo from './shared/Logo';

type Props = {};

const topBar = (props: Props) => {
	return (
		<div className='flex items-center justify-center absolute top-0 left-0  pt-3 w-full z-50'>
			<Logo
				size='sm'
				iconOnly
			/>
		</div>
	);
};
export default topBar;
