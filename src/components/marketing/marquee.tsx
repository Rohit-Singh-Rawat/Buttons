'use client';

import * as React from 'react';
import { useEffect, useRef, useState } from 'react';

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
	text: string;
	repeat?: number;
	duration?: number;
	fontSize?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
	strokeWidth?: string;
	direction?: 'left' | 'right';
	speed?: 'fast' | 'normal' | 'slow';
}

const fontSizeClasses = {
	sm: 'text-5xl sm:text-6xl md:text-7xl',
	md: 'text-6xl sm:text-7xl md:text-8xl',
	lg: 'text-7xl sm:text-8xl md:text-9xl',
	xl: 'text-8xl sm:text-9xl md:text-[10rem]',
	'2xl': 'text-9xl sm:text-[10rem] md:text-[11rem]',
	'3xl': 'text-[10rem] sm:text-[11rem] md:text-[12rem]',
};

export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
	(
		{ 
			className, 
			text, 
			repeat = 4, 
			duration, 
			fontSize = 'lg', 
			strokeWidth = '1px', 
			direction = 'left',
			speed = 'normal',
			...props 
		},
		ref
	) => {
		const containerRef = useRef<HTMLDivElement>(null);
		const scrollerRef = useRef<HTMLDivElement>(null);
		const [start, setStart] = useState(false);

		useEffect(() => {
			addAnimation();
		}, []);

		function addAnimation() {
			if (containerRef.current && scrollerRef.current) {
				const scrollerContent = Array.from(scrollerRef.current.children);

				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					if (scrollerRef.current) {
						scrollerRef.current.appendChild(duplicatedItem);
					}
				});

				getDirection();
				getSpeed();
				setStart(true);
			}
		}
    
		const getDirection = () => {
			if (containerRef.current) {
				if (direction === 'left') {
					containerRef.current.style.setProperty(
						'--animation-direction',
						'forwards'
					);
				} else {
					containerRef.current.style.setProperty(
						'--animation-direction',
						'reverse'
					);
				}
			}
		};

		const getSpeed = () => {
			if (containerRef.current) {
				if (duration) {
					containerRef.current.style.setProperty('--animation-duration', `${duration}s`);
				} else if (speed === 'fast') {
					containerRef.current.style.setProperty('--animation-duration', '20s');
				} else if (speed === 'normal') {
					containerRef.current.style.setProperty('--animation-duration', '40s');
				} else {
					containerRef.current.style.setProperty('--animation-duration', '80s');
				}
			}
		};

		return (
			<div
				ref={(node) => {
					// Handle both the ref from forwardRef and our local ref
					if (typeof ref === 'function') ref(node);
					else if (ref) ref.current = node;
					containerRef.current = node;
				}}
				className={`relative w-full overflow-hidden py-16 [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className || ''}`}
				{...props}
			>
				<div
					ref={scrollerRef}
					className={`flex gap-5 whitespace-nowrap ${start ? 'animate-[scroll_var(--animation-duration,40s)_var(--animation-direction,forwards)_linear_infinite]' : ''}`}
				>
					{[...Array(repeat)].map((_, index) => (
						<div
							key={index}
							className='flex items-center gap-5'
						>
							<span
								className={`${fontSizeClasses[fontSize]} font-bold text-transparent`}
								style={{
									WebkitTextStroke: `${strokeWidth} rgb(156 163 175 / 0.3)`,
								}}
							>
								{text}
							</span>
						</div>
					))}
				</div>
			</div>
		);
	}
);

Marquee.displayName = 'Marquee';
