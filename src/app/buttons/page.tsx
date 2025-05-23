import Link from 'next/link';
import Logo from '~/components/shared/Logo';
import GitHubIcon from '~/components/icons/github';
import ButtonShow from '~/components/shared/ButtonShow';
import buttons from '~/Data/Buttons/index';
type Props = {};
function page({}: Props) {
	return (
		<div className='flex flex-col items-center justify-center h-screen bg-sidebar p-3'>
			<div className='flex flex-col w-full bg-white rounded-lg border border-border h-full'>
				<header className='flex items-center justify-between w-full border-b border-border p-2 px-5'>
					<Link
						href='/'
						className='flex items-center justify-center gap-2 bg-gradient-to-b from-neutral-600 to-black rounded-sm border-white border ring ring-border p-0.5 cursor-pointer hover:bg-neutral-700 transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-offset-neutral-400 hover:ring-white'
					>
						<Logo
							size='xs'
							iconOnly
							className='invert-100'
						/>
					</Link>

					<div className='flex items-center justify-center gap-2'>
						<Logo
							size='xs'
							onlyText
						/>
					</div>

					<Link
						href='https://github.com/Rohit-Singh-Rawat/buttons'
						target='_blank'
						className='flex items-center justify-center gap-2 bg-gradient-to-b from-neutral-600 to-black rounded-sm border-white border ring ring-border p-0.5 h-full cursor-pointer hover:bg-neutral-700 transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-offset-neutral-400 hover:ring-white'
					>
						<GitHubIcon className='invert-100 size-6' />
					</Link>
				</header>
				<div className='flex p-5 w-full h-fit justify-center sm:justify-start gap-5 relative flex-wrap'>
					{buttons.map((button) => (
						<ButtonShow
							key={button.id}
							siteName={button.siteName}
							siteUrl={button.siteUrl}
							code={button.code}
							darkBg={button.darkBg}
						>
							{button.button}
						</ButtonShow>
					))}
				</div>
				
			</div>
		</div>
	);
}

export default page;
