import Hero from '~/components/marketing/Hero';
import TopBar from '~/components/topBar';

type Props = {};
export default function page({}: Props) {
	return (
		<div className='h-screen bg-sidebar w-full '>
			<TopBar />
			<Hero />
		</div>
	);
}
