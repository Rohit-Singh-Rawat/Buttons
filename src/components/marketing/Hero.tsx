import Box from '../shared/Box';
import Logo from '../shared/Logo';
import Link from 'next/link';
import { Marquee } from './marquee';
import GitHubIcon from '../icons/github';
type Props = {};
const Hero = (props: Props) => {
	return (
		<div className='flex flex-col items-center justify-center p-4 sm:p-8 md:p-14 h-full overflow-hidden'>
			<Box className='bg-white items-center justify-center flex w-full  mx-auto relative '>
				<div className='flex flex-col items-center justify-center inset-0 overflow-hidden absolute '>
					<div className='absolute bottom-0 left-10 sm:left-60 w-full rotate-[-40deg]'>
						<Marquee
							duration={10}
							fontSize='sm'
							repeat={100}
							text={'BUTTON '.repeat(100).trim()}
							direction='right'
						/>
					</div>
					<div className='absolute top-0 -left-20 sm:-left-50 w-full rotate-[-40deg]'>
						<Marquee
							duration={10}
							fontSize='sm'
							repeat={100}
							text={'BUTTON '.repeat(100).trim()}
						/>
					</div>
				</div>

				<div className='flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-8 w-full z-40'>
					<Logo
						size='sm'
						className='sm:hidden'
					/>
					<Logo
						size='md'
						className='hidden sm:flex'
					/>
					<p className='text-xs sm:text-sm text-gray-600 text-center max-w-md'>
						Beautiful, customizable buttons to steal for your projects
					</p>

					<div className='flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto'>
						<Link
							href='/buttons'
							className='w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 bg-black text-white text-sm sm:text-base rounded-md hover:bg-gray-800 transition-all shadow-sm hover:shadow-md font-medium flex items-center justify-center '
						>
							Get Started
						</Link>
						<Link
							href='https://github.com/Rohit-Singh-Rawat/Buttons'
							className='w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-2.5 border border-gray-300 rounded-md hover:border-gray-500 hover:bg-gray-50 transition-all flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm text-gray-700 hover:text-black'
							target='_blank'
							rel='noopener noreferrer'
						>
							<GitHubIcon />
							GitHub
						</Link>
					</div>
					<div className='mt-2 sm:mt-4 flex items-center gap-2'>
						<span className='flex h-1.5 sm:h-2 w-1.5 sm:w-2 rounded-full bg-green-500 animate-pulse'></span>
						<span className='text-[10px] sm:text-xs text-gray-500'>100+ buttons available</span>
					</div>
				</div>
			</Box>
		</div>
	);
};
export default Hero;
