import React from 'react';
import type { ReactNode } from 'react';
import MagneticButton from '../../components/MagneticButton';

export type ButtonType = {
	id: string;
	button: ReactNode;
	siteName: string;
	siteUrl: string;
	code: string;
	darkBg?: boolean;
};

const buttons: ButtonType[] = [
	{
		id: 'acctual',
		button: (
			<button
				className='relative  inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:shadow-none disabled:before:hidden disabled:after:hidden aria-invalid:ring-0 aria-invalid:border-red-500 bg-gray-950 text-white shadow-fancy-buttons-neutral before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] px-3.5 py-2 w-full'
				type='submit'
			>
				Continue
			</button>
		),
		siteName: 'Acctual',
		code: `<button
				className='relative  inline-flex items-center justify-center whitespace-nowrap rounded-[8px] text-sm font-medium transition duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-disabled disabled:text-disabled-foreground disabled:shadow-none disabled:before:hidden disabled:after:hidden aria-invalid:ring-0 aria-invalid:border-red-500 bg-gray-950 text-white shadow-fancy-buttons-neutral before:pointer-events-none before:absolute before:inset-0 before:z-10 before:rounded-[inherit] before:bg-gradient-to-b before:p-px before:from-white/[.12] before:to-transparent before:[mask-clip:content-box,border-box] before:[mask-composite:exclude] before:[mask-image:linear-gradient(#fff_0_0),linear-gradient(#fff_0_0)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-gradient-to-b after:from-white after:to-transparent after:pointer-events-none after:opacity-[.16] after:transition after:duration-200 after:ease-out hover:after:opacity-[.24] px-3.5 py-2 w-full'
				type='submit'
			>
				Continue
			</button>`,
		siteUrl: 'https://app.acctual.com/',
	},
	{
		id: 'firecrwal-dark',
		button: (
			<button className='h-9 px-4 rounded-[10px] text-sm font-medium flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#36322F] text-[#fff] hover:bg-[#4a4542] disabled:bg-[#8c8885] disabled:hover:bg-[#8c8885] [box-shadow:inset_0px_-2.108433723449707px_0px_0px_#171310,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(58,_33,_8,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#171310,_0px_1px_3px_0px_rgba(58,_33,_8,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#171310,_0px_1px_2px_0px_rgba(58,_33,_8,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 w-full whitespace-nowrap text-center'>
				Click Me
			</button>
		),
		code: `<button className='h-9 px-4 rounded-[10px] text-sm font-medium flex items-center justify-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#36322F] text-[#fff] hover:bg-[#4a4542] disabled:bg-[#8c8885] disabled:hover:bg-[#8c8885] [box-shadow:inset_0px_-2.108433723449707px_0px_0px_#171310,_0px_1.2048193216323853px_6.325301647186279px_0px_rgba(58,_33,_8,_58%)] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:inset_0px_-1px_0px_0px_#171310,_0px_1px_3px_0px_rgba(58,_33,_8,_40%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:inset_0px_1px_1px_0px_#171310,_0px_1px_2px_0px_rgba(58,_33,_8,_30%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 w-full whitespace-nowrap text-center'>
				Click Me
			</button>`,
		siteName: 'Firecrawl',
		siteUrl: 'https://www.firecrawl.dev/',
	},
	{
		id: 'firecrwal-light',
		button: (
			<button className='h-9 rounded-md text-sm font-medium flex items-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#fff] text-[#36322F] hover:bg-[#f0f0f0] disabled:bg-[#f5f5f5] disabled:text-[#8c8885] disabled:hover:bg-[#f5f5f5] [box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%),_0_3px_3px_hsl(32,11%,82%),_0_-2px_hsl(58,4%,93%)_inset] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_inset_0_1px_1px_hsl(32,_10%,_68%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 px-2.5 py-1 w-full justify-center'>
				Click Me
			</button>
		),
		code: `<button className='h-9 rounded-md text-sm font-medium flex items-center transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 bg-[#fff] text-[#36322F] hover:bg-[#f0f0f0] disabled:bg-[#f5f5f5] disabled:text-[#8c8885] disabled:hover:bg-[#f5f5f5] [box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%),_0_3px_3px_hsl(32,11%,82%),_0_-2px_hsl(58,4%,93%)_inset] hover:translate-y-[1px] hover:scale-[0.98] hover:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_0_1px_2px_hsl(32,_10%,_68%)] active:translate-y-[2px] active:scale-[0.97] active:[box-shadow:0_0_0_1px_hsl(35deg_22%_90%),_inset_0_1px_1px_hsl(32,_10%,_68%)] disabled:shadow-none disabled:hover:translate-y-0 disabled:hover:scale-100 px-2.5 py-1 w-full justify-center'>
				Click Me
			</button>`,
		siteName: 'Firecrawl',
		siteUrl: 'https://www.firecrawl.dev/',
	},
	{
		id: 'better-auth',
		button: (
			<button className='hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]'>
				HOVER ME
			</button>
		),
		code: `	<button
				className='hover:shadow-sm dark:border-stone-100 dark:hover:shadow-sm border border-black bg-white px-4 py-1.5 text-sm uppercase text-black shadow-[1px_1px_rgba(0,0,0),2px_2px_rgba(0,0,0),3px_3px_rgba(0,0,0),4px_4px_rgba(0,0,0),5px_5px_0px_0px_rgba(0,0,0)] transition duration-200 md:px-8 dark:shadow-[1px_1px_rgba(255,255,255),2px_2px_rgba(255,255,255),3px_3px_rgba(255,255,255),4px_4px_rgba(255,255,255),5px_5px_0px_0px_rgba(255,255,255)]'
				>
				HOVER ME
			</button>`,
		siteName: 'Better Auth',
		siteUrl: 'https://better-auth.com/',
	},
	{
		id: 'fountn-design',
		darkBg: true,
		button: (
			<button
				className='rounded-md text-white/50 hover:text-white  relative shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset] before:content-[" "] before:absolute before:inset-0 before:bg-transparent before:rounded-md before:active:scale-150 before:border-2 before:border-black before:border-offset-2 hover:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.3)_inset] bg-[#1a1917] hover:bg-[#242322] w-fit px-4 py-2 before:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset,0px_1.5px_1px_0px_hsla(0,0%,100%,.06)] duration-300 active:bg-[#1a1917] active:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset]'
				type='button'
			>
				<span className='relative px-4 py-4 '>Toogle</span>
			</button>
		),
		code: `<button
				className='rounded-md text-amber-50/10 relative shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset] before:content-[" "] before:absolute before:inset-0 before:bg-transparent before:rounded-md before:active:scale-150 before:border-2 before:border-black before:border-offset-2 hover:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.3)_inset] bg-[#1a1917] hover:bg-[#242322] w-fit px-2 py-1 before:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset,0px_1.5px_1px_0px_hsla(0,0%,100%,.06)] duration-300 active:bg-[#1a1917] active:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset]'
				type='button'
			>
			Toogle
			</button>`,
		siteName: 'Fountn Design',
		siteUrl: 'https://fountn.design/',
	},
	{
		id: 'magnetic-button',
		button: (
			<MagneticButton>
				<button
					className='rounded-md text-white/50 hover:text-white  relative shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset] before:content-[" "] before:absolute before:inset-0 before:bg-transparent before:rounded-md before:active:scale-150 before:border-2 before:border-black before:border-offset-2 hover:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.3)_inset] bg-[#1a1917] hover:bg-[#242322] w-fit px-4 py-2 before:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset,0px_1.5px_1px_0px_hsla(0,0%,100%,.06)] duration-300 active:bg-[#1a1917] active:shadow-[0px_1.5px_2px_-1px_hsla(0,0%,100%,.2)_inset]'
					type='button'
				>
					<span className='relative px-4 py-4 '>Hover Me</span>
				</button>
			</MagneticButton>
		),
		code: `'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

// More gentle spring config for subtle movement
const SPRING_CONFIG = { damping: 100, stiffness: 400 };

type MagneticButtonType = {
	children: React.ReactNode;
	distance?: number;
};

function MagneticButton({ children, distance = 0.1 }: MagneticButtonType) {
	const [isHovered, setIsHovered] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const springX = useSpring(x, SPRING_CONFIG);
	const springY = useSpring(y, SPRING_CONFIG);

	useEffect(() => {
		const calculateDistance = (e: MouseEvent) => {
			if (!ref.current || !isHovered) return;
			
			const rect = ref.current.getBoundingClientRect();
			const centerX = rect.left + rect.width / 2;
			const centerY = rect.top + rect.height / 2;
			
			// Calculate distance from mouse to center
			const distanceX = e.clientX - centerX;
			const distanceY = e.clientY - centerY;
			
			// Apply a subtle magnetic effect
			x.set(distanceX * distance);
			y.set(distanceY * distance);
		};

		const resetPosition = () => {
			x.set(0);
			y.set(0);
		};

		if (isHovered) {
			document.addEventListener('mousemove', calculateDistance);
		} else {
			resetPosition();
		}

		return () => {
			document.removeEventListener('mousemove', calculateDistance);
		};
	}, [isHovered, distance, x, y]);

	return (
		<motion.div
			ref={ref}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			style={{
				x: springX,
				y: springY,
			}}
			className='inline-block h-fit w-fit relative'
		>
			{children}
		</motion.div>
	);
}

export default MagneticButton;

<MagneticButton>
  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300">
    Magnetic Button
  </button>
</MagneticButton>`,
		siteName: 'Magnetic Button',
		siteUrl: '#',
	},
];

export default buttons;
