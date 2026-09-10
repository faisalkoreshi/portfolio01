import { useState } from 'react'
import { FaGithub, FaDiscord, FaLinkedin } from 'react-icons/fa'
import { Button } from '@/components/Button'
import { ArrowRightCircle, Download, ChevronDown } from 'lucide-react'
import { AnimatedBorderButton } from '@/components/AnimatedBorderButton'
export const Hero = () => {
	const skills = [
		'React',
		'Next.js',
		'TypeScript',
		'Node.js',
		'MongoDB',
		'Vercel',
		'Tailwind CSS',
		'Figma',
		'Git',
		'GitHub Actions',
	]
	// শুধু প্রথমবার মাউন্ট হওয়ার সময় ৩০টি ডটের জন্য র্যান্ডম পজিশন জেনারেট করি
	const [dots] = useState(() =>
		Array.from({ length: 30 }, () => ({
			left: Math.random() * 100,
			top: Math.random() * 100,
			animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
			animationDelay: `${Math.random() * 5}s`,
		})),
	)

	return (
		<section className='relative min-h-screen flex items-center overflow-hidden'>
			{/* ব্যাকগ্রাউন্ড ইমেজ */}
			<div className='absolute inset-0'>
				<img
					src='/hero-bg.jpg'
					alt='Hero image'
					className='w-full h-full object-cover opacity-40'
				/>
				<div className='absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background' />
			</div>

			{/* সবুজ ডটস */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{dots.map((dot, i) => (
					<div
						key={i}
						className='absolute w-1.5 h-1.5 rounded-full opacity-60'
						style={{
							backgroundColor: '#20B2A6',
							left: `${dot.left}%`,
							top: `${dot.top}%`,
							animation: `${dot.animation}`,
							animationDelay: `${dot.animationDelay}`,
						}}
					/>
				))}
			</div>
			{/* Content */}
			<div className='container mx-auto px-6 pt-32 pb-20 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Column text content*/}
					<div className='space-y-8'>
						<div className='animate-fade-in'>
							<span className='inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary '>
								<span className='w-2 h-2 bg-primary rounded-full animate-pulse' />
								Frontend Engineer - React Specialist
							</span>
						</div>
						{/* Headline */}
						<div className='space-y-4'>
							<h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100'>
								Crafting <span className='text-primary glow-text'>digital</span>
								<br />
								experiences with
								<br />
								<span className='font-serif italic font-normal text-white'>
									precision.
								</span>
							</h1>
							<p className='text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200'>
								Hi, I'm Faisal Koreshi — a Canadian 🇨🇦 Frontend engineer
								specializing in React, Next.js, and TypeScript. I build
								scalable, performant web applications that users love.
							</p>
						</div>
						{/* call to action */}
						<div className='flex flex-wrap gap-4 animate-fade-in animation-delay-300'>
							<Button size='lg'>
								Contact me
								<ArrowRightCircle className='w-5 h-5' />
							</Button>
							<AnimatedBorderButton>
								<Download className='w-5 h-5' />
								Download CV
							</AnimatedBorderButton>
						</div>
						{/* Socila links */}
						<div className='flex items-center gap-4 animate-fade-in animation-delay-400'>
							<span className='text-sm text-muted-foreground'>Follow me :</span>
							{[
								{
									icon: FaGithub,
									href: 'https://github.com/faisalkoreshi',
									label: 'GitHub',
								},
								{ icon: FaGithub, href: '' },
								{
									icon: FaDiscord,
									href: 'http://discordapp.com/users/709831289913737296',
								},
								{
									icon: FaLinkedin,
									href: 'https://linkedin.com/in/syed-faisal-ali-al-koreshi-a6325a195',
								},
							].map((social, idx) => (
								<a
									key={idx}
									href={social.href}
									className='p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300'
								>
									{<social.icon className='w-5 h-5' />}
								</a>
							))}
						</div>
					</div>
					{/* Right column Profile image */}
					<div className='relatice animate-fade-in animation-delay-300'>
						{/* profile image */}
						<div className='relative max-w-md mx-auto'>
							<div
								className='absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse'
							/>
							<div className='relative glass rounded-3xl p-2 glow-border'>
								<img
									src='/protfolio-photo3.jpg'
									className='aspect-4/5 w-full object-cover rounded-2xl'
									alt='Faisal Koreshi'
								/>
								{/* Floating Badge */}
								<div className='absolute -bottom-4 -right-4 glass rounded-xl px-3 py-4 animate-float'>
									<div className='flex items-center gap-3'>
										<div className='w-3 h-3 bg-green-300 animate-pulse  ' />
										<span className='text-sm font-medium'>
											Available for work
										</span>
									</div>
								</div>
								{/* State badge */}
								<div className='absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500'>
									<div className='text-2xl font-bold text-primary'>5+</div>
									<div className='text-xs  text-muted-foreground'>
										Years Exp.
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Skils section */}
				<div className='mt-20 animate-fade-in animation-delay-600'>
					<p className='text-sm text-muted-foreground mb-6 text-center'>
						Technologies I work with
					</p>
					<div className='relative overflow-hidden'>
						<div
							className='absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10'
						/>
						<div
							className='absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10'
						/>
						<div className='flex animate-marquee'>
							{[...skills, ...skills].map((skill, idx) => (
								<div key={idx} className='shrink-0 px-8 py-4'>
									<span className='text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors'>
										{skill}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			<div
				className='absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800'
			>
				<a
					href='#about'
					className='flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group'
				>
					<span className='text-xs uppercase tracking-wider'>Scroll</span>
					<ChevronDown className='w-6 h-6 animate-bounce' />
				</a>
			</div>
		</section>
	)
}
