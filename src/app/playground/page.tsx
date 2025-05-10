'use client';

import { useState, useRef, useEffect } from 'react';
import { IconMoon, IconSun } from '@tabler/icons-react';
import Box from '~/components/shared/Box';
import Link from 'next/link';
import Logo from '~/components/shared/Logo';

export default function Playground() {
	const [isDarkMode, setIsDarkMode] = useState(false);
	const previewRef = useRef<HTMLDivElement>(null);
	const [codeString, setCodeString] = useState<string>('');

	const toggleTheme = () => {
		setIsDarkMode(!isDarkMode);
	};

	// Automatically update code when preview changes
	useEffect(() => {
		if (previewRef.current) {
			// Get the HTML content of the preview area
			const content = previewRef.current.innerHTML;
			setCodeString(content);
		}
	}, [previewRef.current?.innerHTML]);

	return (
		<div
			className={`flex flex-col items-center justify-center h-screen min-h-screen p-3 transition-colors duration-300 ${
				isDarkMode ? 'bg-black text-white' : 'bg-[#f8f8f8] text-black'
			}`}
		>
			<div
				className={`flex flex-col w-full h-full rounded-lg border transition-colors duration-300 ${
					isDarkMode
						? 'bg-[#18181B] border-[#27272A] shadow-xl'
						: 'bg-white border-[#e5e5e5] shadow-lg'
				} h-full`}
			>
				<header
					className={`flex items-center justify-between w-full border-b p-2 px-5 transition-colors duration-300 ${
						isDarkMode ? 'border-[#27272A]' : 'border-[#e5e5e5]'
					}`}
				>
					<Link
						href='/'
						className='flex items-center justify-center gap-2 bg-gradient-to-b from-[#27272A] to-black rounded-sm border-white border ring ring-[#27272A] p-0.5 cursor-pointer hover:bg-[#18181B] transition-all duration-300 hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#27272A] hover:ring-white'
					>
						<Logo
							size='xs'
							iconOnly
							className='invert-100'
						/>
					</Link>

					<div className='flex items-center gap-4'>
						<h1 className='text-xl font-bold'>Button Playground</h1>
						<button
							onClick={toggleTheme}
							className={`flex items-center justify-center p-1.5 rounded-full border transition-colors ${
								isDarkMode
									? 'border-[#27272A] hover:bg-[#27272A]'
									: 'border-[#e5e5e5] hover:bg-[#f0f0f0]'
							}`}
							aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
						>
							{isDarkMode ? (
								<IconSun className='h-5 w-5 text-[#f0f0f0]' />
							) : (
								<IconMoon className='h-5 w-5 text-[#18181B]' />
							)}
						</button>
					</div>
				</header>

				<div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-6 h-full'>
					<div className='flex flex-col gap-4'>
						<div className='flex items-center justify-between'>
							<h2 className={`text-lg font-medium`}>Button Code</h2>
							<button
								className={`px-3 py-1 text-sm rounded-md transition-all ${
									isDarkMode ? 'bg-black hover:bg-[#27272A]' : 'bg-[#18181B] hover:bg-black'
								} text-white`}
							>
								Copy Code
							</button>
						</div>
						<div
							className={`w-full h-64 p-4 border rounded-md font-mono text-sm overflow-auto transition-colors duration-300 ${
								isDarkMode
									? 'bg-black border-[#27272A] text-[#e5e5e5]'
									: 'bg-[#f8f8f8] border-[#e5e5e5] text-black'
							}`}
						>
							<pre>{codeString}</pre>
						</div>
					</div>

					<div className='flex flex-col gap-4'>
						<h2 className={`text-lg font-medium`}>Preview</h2>
						<div
							className={`flex items-center justify-center p-8 transition-colors duration-300 ${
								isDarkMode ? 'bg-[#18181B] border-[#27272A]' : 'bg-white border-[#e5e5e5]'
							} rounded-md shadow-inner`}
						>
							<div className='flex flex-col items-center gap-4'>
								<div
									ref={previewRef}
									className='flex items-center justify-center w-full'
								>
									{/* Add your button here for testing */}
									<button
										className='rounded-md text-amber-50/10 relative shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset] before:content-[" "] before:absolute before:inset-0 before:bg-transparent   before:rounded-md before:active:scale-150 before:border-2 before:border-black before:border-offset-2 hover:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.3)_inset] bg-[#1a1917] hover:bg-[#242322] w-fit  px-2 py-1 before:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset,0px_1.5px_1px_0px_hsla(0,0%,100%,.06)] duration-300 active:bg-[#1a1917] active:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset]'
										type='button'
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											height='40px'
											viewBox='0 -960 960 960'
											width='40px'
											fill='currentColor'
										>
											<path d='M659.67-437.33H181q-18 0-30.17-12.17-12.16-12.17-12.16-30.17 0-17.33 12.16-29.5Q163-521.33 181-521.33h478.67l-210-210Q437-744 437-761.33q0-17.34 12.67-30 12-12.67 29.66-12.67 17.67 0 30.34 12.67l282.66 282.66q6 6 9.17 13.34 3.17 7.33 3.17 15.66 0 9-3.17 16.34-3.17 7.33-9.17 13.33L511-168.67Q497.67-156 480.33-156 463-156 451-168.67q-12.67-12.66-12.67-30 0-17.33 12.67-30l208.67-208.66Z'></path>
										</svg>
									</button>
								</div>
								<div className={`text-sm ${isDarkMode ? 'text-[#71717A]' : 'text-[#52525B]'}`}>
									Edit the button in the preview area
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
