'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import ConnerDiv from './ConnerDiv';
import { IconCopy, IconCheck, IconMoon, IconSun } from '@tabler/icons-react';

type Props = {
	children: ReactNode;
	code: string;
	siteName?: string;
	siteUrl?: string;
	darkBg?: boolean;
};

function ButtonShow({ children, code, siteName, siteUrl, darkBg = false }: Props) {
	const [copied, setCopied] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(darkBg);

	const handleCopy = () => {
		console.log(code);
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	return (
		<ConnerDiv
			className={`min-w-[200px] max-w-[200px] min-h-[100px] max-h-[100px] flex items-center justify-center ${
				isDarkMode ? 'bg-[#18181B]' : ''
			}`}
		>
			<div className='flex items-center justify-center w-full h-full'>{children}</div>

			<button
				onClick={handleCopy}
				className={`absolute top-1 right-1 p-1 rounded border sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ${
					isDarkMode
						? 'bg-[#27272A] border-[#3f3f46] hover:bg-[#3f3f46] hover:border-[#53535c] text-white'
						: 'bg-white border-border hover:bg-gray-100'
				}`}
				aria-label='Copy code'
			>
				{copied ? (
					<IconCheck
						size={12}
						className={`${isDarkMode ? 'text-green-400' : 'text-green-600'}`}
					/>
				) : (
					<IconCopy size={12} />
				)}
			</button>
			{siteName && siteUrl && (
				<div className='absolute bottom-2 left-1/2 -translate-x-1/2 text-xs sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300'>
					<a
						href={siteUrl}
						target='_blank'
						rel='noopener noreferrer'
						className={`hover:underline ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}
					>
						{siteName}
					</a>
				</div>
			)}
			{darkBg && (
				<button
					onClick={toggleDarkMode}
					className={`absolute bottom-1 right-1 p-1 rounded border sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300 ${
						isDarkMode
							? 'bg-[#27272A] hover:border-[#53535c] border-[#3f3f46] hover:bg-[#3f3f46] text-white'
							: 'bg-white border-border hover:bg-gray-100'
					}`}
					aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
				>
					{isDarkMode ? (
						<IconSun
							size={12}
							className='text-gray-300'
						/>
					) : (
						<IconMoon
							size={12}
							className='text-gray-600'
						/>
					)}
				</button>
			)}
		</ConnerDiv>
	);
}

export default ButtonShow;
