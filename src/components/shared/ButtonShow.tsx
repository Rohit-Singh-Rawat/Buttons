'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import ConnerDiv from './ConnerDiv';
import { IconCopy, IconCheck } from '@tabler/icons-react';

type Props = {
	children: ReactNode;
	code: string;
	siteName?: string;
	siteUrl?: string;
};

function ButtonShow({ children, code, siteName, siteUrl }: Props) {
	const [copied, setCopied] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(code);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<ConnerDiv className='min-w-[200px] max-w-[200px] min-h-[100px] max-h-[100px] flex items-center justify-center'>
			<div className='flex items-center justify-center w-full h-full'>{children}</div>

			<button
				onClick={handleCopy}
				className='absolute top-2 right-2 p-1 bg-white rounded border border-border opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-gray-100'
				aria-label='Copy code'
			>
				{copied ? (
					<IconCheck
						size={16}
						className='text-green-600'
					/>
				) : (
					<IconCopy size={16} />
				)}
			</button>
			{siteName && siteUrl && (
				<div className='absolute bottom-2 left-1/2 -translate-x-1/2 text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<a
						href={siteUrl}
						target='_blank'
						rel='noopener noreferrer'
						className='hover:underline'
					>
						{siteName}
					</a>
				</div>
			)}
		</ConnerDiv>
	);
}

export default ButtonShow;
