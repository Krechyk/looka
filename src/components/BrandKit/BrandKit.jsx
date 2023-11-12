import React from 'react'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import { Carousel, Accordion } from 'flowbite-react';
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle'
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent'
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel'

import VideoPoster from '../../img/brand-kit/BrandKitVideoPoster.jpeg'
import BrandKitVideo from '../../video/BrandKit.mp4'
import LogoExample1 from '../../img/brand-kit/LogoExample1.png'
import LogoExample2 from '../../img/brand-kit/LogoExample2.png'
import LogoExample3 from '../../img/brand-kit/LogoExample3.png'
import WorkExample1 from '../../img/brand-kit/WorkExample1.png'
import WorkExample2 from '../../img/brand-kit/WorkExample2.png'
import WorkExample3 from '../../img/brand-kit/WorkExample3.png'
import CarouselSlide1 from '../../img/brand-kit/CarouselSlide1.jpg'
import CarouselSlide2 from '../../img/brand-kit/CarouselSlide2.jpg'
import CarouselSlide3 from '../../img/brand-kit/CarouselSlide3.jpg'
import LearnMoreImage1 from '../../img/brand-kit/LearnMoreImage1.png'
import LearnMoreImage2 from '../../img/brand-kit/LearnMoreImage2.png'
import LearnMoreImage3 from '../../img/brand-kit/LearnMoreImage3.png'
import LearnMoreImage4 from '../../img/brand-kit/LearnMoreImage4.png'
import LearnMoreImage5 from '../../img/brand-kit/LearnMoreImage5.png'
import LearnMoreImage6 from '../../img/brand-kit/LearnMoreImage6.png'

const BrandKit = () => {

	return (
		<div className='mb-10 gap-y-32 pt-10 w-full flex justify-center items-center flex-col'>
			<div className='w-6/12 gap-y-10 flex flex-col justify-center items-center'>
				<p className='text-5xl font-extrabold text-center'>Make your business look amazing with Looka's Brand Kit</p>
				<p className='w-full text-xl text-slate-500 text-center'>Access 300+ branded templates generated using your logo, brand colors, fonts, and photos. Then create beautiful marketing materials to grow your business!</p>
				<div className='w-full flex gap-x-2 justify-center'>
					<input placeholder='Enter your company name' className='pl-2 rounded-lg w-6/12 focus:border-indigo-700' type="text" />
					<button type="button" className="px-6 py-5 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Let's make a brand kit!</button>
				</div>
			</div>
			<div className='flex justify-center'>
				<div className='w-3/12 flex flex-col items-center gap-y-2 pt-3'>
					<img className='rounded-full' src={LogoExample1} alt="img" />
					<p className='text-center text-xl font-extrabold'>All in one place</p>
					<p className='text-center text-base w-11/12 text-slate-500'>Instantly access hundreds of branded templates on one dashboard</p>
				</div>
				<div className='w-3/12 flex flex-col items-center gap-y-2 pt-3'>
					<img className='rounded-full' src={LogoExample2} alt="img" />
					<p className='text-center text-xl font-extrabold'>300+ designs</p>
					<p className='text-center text-base w-11/12 text-slate-500'>Get designer-made templates with photos and copy matched to your industry.</p>
				</div>
				<div className='w-3/12 flex flex-col items-center gap-y-2 pt-3'>
					<img className='rounded-full' src={LogoExample3} alt="img" />
					<p className='text-center text-xl font-extrabold'>Creative control</p>
					<p className='text-center text-base w-11/12 text-slate-500'>Easily edit your assets and create new designs at any time</p>
				</div>
			</div>
			<div>
				<Video
					poster={VideoPoster}
				>
					<source src={BrandKitVideo} type='video/webm' />
				</Video>
			</div>
			<div>
				<div>
					<p className='text-white text-4xl font-extrabold'>Your complete marketing toolkit</p>
					<p className='text-white'>Looka’s Brand Kit is like having a personal graphic designer. As a subscriber, you can customize and download new designs anytime — all from one convenient dashboard.</p>
				</div>
				<div>
					<div>
						<img src={LogoExample1} alt="" />
						<p>Social Profiles</p>
					</div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className='w-7/12 gap-y-10 flex flex-col justify-center items-center'>
				<p className='text-4xl font-extrabold text-center'>Start with a brand — go anywhere.</p>
				<div className='w-full flex gap-x-2 justify-center'>
					<input placeholder='Enter your company name' className='pl-2 rounded-lg w-6/12 focus:border-indigo-700' type="text" />
					<button type="button" className="px-6 py-5 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Let's make a logo!</button>
				</div>
			</div>
			<div className='flex flex-col gap-y-20 '>
				<p className='w-10/12 text-4xl font-extrabold text-center'>Here's how Looka's Brand Kit works:</p>
				<div className='flex justify-center gap-5'>
					<div className='w-6/12 flex justify-end'>
						<img src={WorkExample1} alt="image" />
					</div>
					<div className='w-6/12 flex flex-col justify-center gap-y-5'>
						<div className='flex gap-x-1'>
							<p className='text-3xl font-extrabold text-indigo-700'>01.</p>
							<p className='text-3xl font-extrabold'>Start with a stunning logo</p>
						</div>
						<p className=' w-6/12 text-sm text-slate-500'>Your logo is the foundation of your brand identity—it captures what you do and who you are at a glance. Get started by uploading your own logo or creating a new one using Looka’s logo maker.</p>
					</div>
				</div>
				<div className='flex w-full justify-center gap-5'>
					<div className='w-5/12 flex flex-col items-end justify-center gap-y-5 '>
						<div className='w-6/12 flex gap-x-1'>
							<p className='text-3xl font-extrabold text-indigo-700'>02.</p>
							<p className='text-3xl font-extrabold'>Bring your brand to life</p>
						</div>
						<p className=' w-6/12 text-sm text-slate-500'>Looka imports your logo colors into the Brand Kit and sets you up with complementary fonts and patterns, plus photos and copy related to your industry. No more creating a brand identity from scratch or generic templates!</p>
					</div>
					<div className='w-6/12'><img className='w-10/12' src={WorkExample2} alt="" /></div>
				</div>
				<div className='flex justify-center gap-10'>
					<div className='w-6/12 flex justify-end'>
						<img className='w-10/12' src={WorkExample3} alt="image" />
					</div>
					<div className='w-6/12 flex flex-col justify-center gap-y-5'>
						<div className='flex gap-x-1'>
							<p className='text-3xl font-extrabold text-indigo-700'>03.</p>
							<p className='text-3xl font-extrabold'>Grow your business</p>
						</div>
						<p className=' w-6/12 text-sm text-slate-500'>Have a vision for what you want? The Brand Kit editor makes it easy to transform templates into marketing materials in minutes, without the expense of hiring a designer. Download designs in multiple formats, including print-ready PDFs. <br /> <br />Plus, the Brand Kit gives you access to over $3,000 in exclusive partner offers to accelerate every part of your business. </p>
					</div>
				</div>
			</div>
			<Carousel className='h-[550px]' slideInterval={5000}>
				<img className='w-full h-full flex justify-center' src={CarouselSlide1} alt="..." />
				<img className='w-full' src={CarouselSlide2} alt="..." />
				<img className='w-full' src={CarouselSlide3} alt="..." />
			</Carousel>
			<div className='w-full flex flex-col items-center gap-y-20'>
				<p className='text-4xl font-extrabold'>Looka Brand Kit FAQs</p>
				<Accordion className='w-6/12 flex flex-col gap-y-3' collapseAll={true} >
					<Accordion.Panel>
						<AccordionTitle className='text-lg font-extrabold'>How do I get a Brand Kit?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p>It’s simple! After you upload your logo or create one with Looka, choose a Brand Kit subscription when you check out. Once you’ve completed your purchase, you’ll now have access to over 300 branded materials and marketing assets.</p>
						</AccordionContent>
					</Accordion.Panel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>How long does it take to generate the designs in my Brand Kit?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p className='pb-5'>It usually takes us around 10 seconds to generate a category (e.g. social media posts). If you update your logo, brand preferences, or contact information, the designs will automatically regenerate to reflect these changes.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>What can I customize in the Brand Kit editor?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p>The editor lets you change photos, text, colors, backgrounds, and more — and it automatically saves any designs you customize, so it’s easy to go back to them.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>Can you import your own photos?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>Yes! You can upload your own photos or pick stock photos (the editor is integrated with Unsplash, so it’s easy to search and add stock images).</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>Why do I need a subscription?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p>Your subscription includes ongoing access to your Brand Kit, which includes 300+ branded templates — and new designs are being added regularly.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>What if I need help with the Brand Kit?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>Our Canada-based support team is available by live chat or email every day between 9am-5pm. If you contact us outside of those hours, we’ll get back to you the next day. We also have video tutorials and articles to help you get the most out of your Brand Kit experience!</AccordionContent>
					</AccordionPanel>

				</Accordion>
			</div>
			<div className='flex flex-col items-center gap-y-16'>
				<p className='text-4xl font-extrabold'>Learn more about branding</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={LearnMoreImage1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>Brand Identity 101: How to Create a Brand You’ll Love (+ FREE Worksheet!)</p>
					</div>
					<div className='w-7/12'>
						<img src={LearnMoreImage2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>Brand Guidelines: What They Are and How to Create Them (With Examples!)</p>
					</div>
					<div className='w-7/12'>
						<img src={LearnMoreImage3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>22 Brand Guidelines Examples to Inspire Your Brand Guide</p>
					</div>
				</div>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={LearnMoreImage4} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>Brand Personality: A Simple Guide to an Unforgettable Brand</p>
					</div>
					<div className='w-7/12'>
						<img src={LearnMoreImage5} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>Visual Identity 101: Creating a Magnetic Brand for Your Business</p>
					</div>
					<div className='w-7/12'>
						<img src={LearnMoreImage6} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>Brand Packaging: Why It Matters and How to Nail it (With Examples!)</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default BrandKit