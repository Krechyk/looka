import React from 'react'
import { Accordion } from 'flowbite-react'
import { AccordionTitle } from 'flowbite-react/lib/esm/components/Accordion/AccordionTitle'
import { AccordionContent } from 'flowbite-react/lib/esm/components/Accordion/AccordionContent'
import { AccordionPanel } from 'flowbite-react/lib/esm/components/Accordion/AccordionPanel'
import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'

import Example1 from '../../img/logo-maker/Example1.png'
import Example2 from '../../img/logo-maker/Example2.png'
import Example3 from '../../img/logo-maker/Example3.png'
import Example4 from '../../img/logo-maker/Example4.png'
import Example5 from '../../img/logo-maker/Example5.png'
import Example6 from '../../img/logo-maker/Example6.png'
import HighResLogos from '../../img/logo-maker/High-res-logos.png'
import VectorFiles from '../../img/logo-maker/Vector-files.png'
import ColorVariations from '../../img/logo-maker/Color-variations.png'
import BusinessCardDesigns from '../../img/logo-maker/Business-card-designs.png'
import SocialMediaTemplates from '../../img/logo-maker/Social-media-templates.png'
import BrandInfo from '../../img/logo-maker/Brand-info.png'
import PostPurchaseChanges from '../../img/logo-maker/Post-purchase-changes.png'
import LifetimeLogoSupport from '../../img/logo-maker/Lifetime-logo-support.png'
import RoyaltyFreeLogos from '../../img/logo-maker/Royalty-free-logos.png'
import LogoExample1 from '../../img/logo-maker/LogoExample1.png'
import LogoExample2 from '../../img/logo-maker/LogoExample2.png'
import LogoExample3 from '../../img/logo-maker/LogoExample3.png'
import LogoExample4 from '../../img/logo-maker/LogoExample4.png'
import LogoExample5 from '../../img/logo-maker/LogoExample5.png'
import LogoExample6 from '../../img/logo-maker/LogoExample6.png'
import LogoMakerVideo from '../../video/LogoMaker.mp4'
import VideoPoster from '../../img/logo-maker/LogoMakerVideoPoster.webp'



const LogoMaker = () => {
	return (
		<div className='mb-10 gap-y-32 pt-10 w-full flex justify-center items-center flex-col '>
			<div className='w-7/12 gap-y-10 flex flex-col justify-center items-center'>
				<p className='text-5xl font-extrabold text-center'>Make a logo with Looka</p>
				<p className='w-full text-xl text-slate-500 text-center'>Looka Logo Maker combines your logo design preferences with Artificial Intelligence to help you create a custom logo you'll love. All it takes is a few clicks and five minutes.</p>
				<div className='w-full flex gap-x-2 justify-center'>
					<input placeholder='Enter your company name' className='pl-2 rounded-lg w-6/12 focus:border-indigo-700' type="text" />
					<button type="button" className="px-6 py-5 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Let's make a logo!</button>
				</div>
			</div>
			<div className='flex w-full gap-x-10'>
				<div className=' flex justify-end w-6/12 gap-2'>
					<div className='flex flex-col gap-2'>
						<img className='rounded-md' src={Example1} alt="" />
						<img className='rounded-md' src={Example2} alt="" />
					</div>
					<div className='flex flex-col gap-2'>
						<img className='rounded-md' src={Example3} alt="" />
						<img className='rounded-md' src={Example4} alt="" />
					</div>
				</div>
				<div className='w-6/12 flex flex-col justify-center gap-y-5'>
					<div className='flex gap-x-1'>
						<p className='text-3xl font-extrabold text-indigo-700'>01.</p>
						<p className='text-3xl font-extrabold'>Our logo maker is easy</p>
					</div>
					<p className=' w-6/12 text-sm text-slate-500'>Start by entering your company name and industry, then select the perfect logo styles, colors, and symbols that you like the best. Looka Logo Maker will use these as inspiration and start to generate custom logo designs.</p>
				</div>
			</div>
			<div className='flex w-full justify-center'>
				<div className='w-6/12 flex flex-col items-end justify-center gap-y-5 '>
					<div className='w-6/12 flex gap-x-1'>
						<p className='text-3xl font-extrabold text-indigo-700'>02.</p>
						<p className='text-3xl font-extrabold w-full'>Our logo maker is fun</p>
					</div>
					<p className=' w-6/12 text-sm text-slate-500'>Finalize your colors, fonts, and layouts in our easy-to-use logo editor to make sure you get exactly what you want. Undo any edits you make and then click Save when you’ve created your perfect logo design.</p>
				</div>
				<div className='w-6/12'><img src={Example5} alt="" /></div>
			</div>
			<div className='flex w-full justify-center gap-x-10'>
				<div className='w-6/12 flex justify-end'><img className='w-8/12' src={Example6} alt="" /></div>
				<div className='w-6/12 flex flex-col justify-center gap-y-5'>
					<div className='flex gap-x-1'>
						<p className='text-3xl font-extrabold text-indigo-700'>03.</p>
						<p className='text-3xl font-extrabold'>Our logo maker delivers</p>
					</div>
					<p className='w-6/12 text-sm text-slate-500'>Looka’s online logo maker delivers the goods, including vector logo files and color variations. Your Brand Kit includes everything that a logo designer would deliver, and more.</p>
				</div>
			</div>
			<div className='w-10/12 flex flex-col items-center gap-y-10'>
				<p className='w-6/12 text-4xl font-extrabold text-center'>A logo creator that gives you everything a logo designer would</p>
				<div className='flex gap -x-10 flex-wrap'>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={HighResLogos} alt="" />
						<p className='text-xl font-extrabold'>1. High-res logos</p>
						<p className='text-base w-11/12 text-slate-500'>Crisp, hi-res PNG and JPG logo files for use online or offline.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={VectorFiles} alt="" />
						<p className='text-xl font-extrabold'>2. Vector files</p>
						<p className='text-base w-11/12 text-slate-500'>SVG and EPS logo files that let you scale your logo to any size.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={ColorVariations} alt="" />
						<p className='text-xl font-extrabold'>3. Color variations</p>
						<p className='text-base w-11/12 text-slate-500'>Get black and colored, and transparent background variations.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={BusinessCardDesigns} alt="" />
						<p className='text-xl font-extrabold'>4. Business card designs</p>
						<p className='text-base w-11/12 text-slate-500'>Choose from 20 professional customize business card designs.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={SocialMediaTemplates} alt="" />
						<p className='text-xl font-extrabold'>5. Social media templates</p>
						<p className='text-base w-11/12 text-slate-500'>Design perfectly-sized profiles and posts for YouTube, and more.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={BrandInfo} alt="" />
						<p className='text-xl font-extrabold'>6. Brand info</p>
						<p className='text-base w-10/12 text-slate-500'>A one-page resource with your logo fonts and colors.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={PostPurchaseChanges} alt="" />
						<p className='text-xl font-extrabold'>7. Post-purchase changes</p>
						<p className='text-base w-11/12 text-slate-500'>Make unlimited changes to your logo when you what subscribe.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={LifetimeLogoSupport} alt="" />
						<p className='text-xl font-extrabold'>8. Lifetime logo support</p>
						<p className='text-base w-11/12 text-slate-500'>Our team is here if you need help opening files or getting started.</p>
					</div>
					<div className='flex flex-col items-center gap-y-2 pt-3'>
						<img src={RoyaltyFreeLogos} alt="" />
						<p className='text-xl font-extrabold'>9. Royalty-free logos</p>
						<p className='text-base w-11/12 text-slate-500'>Use your downloaded logo files for any commercial purpose.</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col gap-y-8'>
				<p className='text-4xl font-extrabold'>It's fun to make a logo with Looka</p>
				<div className='w-full flex gap-x-2 justify-center'>
					<input placeholder='Enter your company name' className='pl-2 rounded-lg w-8/12 focus:border-indigo-700' type="text" />
					<button type="button" className="px-6 py-5 text-base font-medium text-center text-white bg-indigo-700 rounded-lg hover:bg-indigo-600 focus:ring-4 focus:outline-none focus:ring-indigo-400 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800">Start my logo!</button>
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-y-8'>
				<p className='text-4xl font-extrabold'>How to use Looka's logo generator</p>
				<Video
					poster={VideoPoster}
				>
					<source src={LogoMakerVideo} type='video/webm' />
				</Video>

			</div>
			<div className='w-full flex flex-col items-center gap-y-8'>
				<p className='text-4xl font-extrabold'>Looka these beautiful logos : )</p>
				<div className='flex flex-wrap w-8/12 gap-y-8'>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample1} alt="" />
						<p className='text-xl font-extrabold'>Empira</p>
						<p className='text-base text-slate-500'>Dublin, Ireland</p>
					</div>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample2} alt="" />
						<p className='text-xl font-extrabold'>Shadow Box</p>
						<p className='text-base text-slate-500'>Toronto, Canada</p>
					</div>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample3} alt="" />
						<p className='text-xl font-extrabold'>Ruthless</p>
						<p className='text-base text-slate-500'>London, England</p>
					</div>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample4} alt="" />
						<p className='text-xl font-extrabold'>Spacebox</p>
						<p className='text-base text-slate-500'>Zurich, Switzerland</p>
					</div>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample5} alt="" />
						<p className='text-xl font-extrabold'>Strabell</p>
						<p className='text-base text-slate-500'>Aukland, New Zealand</p>
					</div>
					<div className='w-4/12 flex flex-col items-center gap-y-2 pt-3'>
						<img src={LogoExample6} alt="" />
						<p className='text-xl font-extrabold'>Frime</p>
						<p className='text-base text-slate-500'>Melbourne, Australia</p>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-y-20'>
				<p className='text-4xl font-extrabold'>Your best logo maker questions</p>
				<Accordion className='w-6/12 flex flex-col gap-y-3' collapseAll={true} >
					<Accordion.Panel>
						<AccordionTitle className='text-lg font-extrabold'>Why do people choose Looka to design their logo?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p className='pb-5'>People choose Looka to make their logo for a few reasons:</p>
							<p className='pb-3'>1. Looka was built by veteran designers for non-designers. Our logo maker makes it easy for non-designers to create a logo they’ll be proud of.</p>
							<p className='pb-3'>2. Our logo generator creates hundreds of logo options for you to choose from. All your options are generated uniquely for you, no templates here.</p>
							<p>3. Looka’s download package is the most comprehensive package of any logo maker – it includes a full brand kit – with 15+ logo files for all use-cases, email signatures, business cards, and over 30 more types of branded assets.</p>
						</AccordionContent>
					</Accordion.Panel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>How do I make a logo?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p className='pb-5'>To make a logo with Looka, start by entering your company name and industry, then select logo styles, colors, and symbols for inspiration.</p>
							<p className='pb-5'>Within seconds, you’ll be browsing custom logos generated by our AI-powered platform. Click any logo to tweak colors, fonts, layouts, symbols, and more.</p>
							<p>Need help? Watch our video demo on how to create a logo in 5 minutes with Looka.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>Do I have to sign up to use Looka?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p>Unlike most other logo makers, there’s no signup required to use Looka. Click “Continue as guest” and you’re good to go.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>How do I receive my logo package?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p className='pb-5'>For Brand Kit users, select the Logo Files section of the Brand Kit Home page and click Download.</p>
							<p>For others, click Download on your brand homepage to immediately receive your logo files. We also send your files via email so you can keep a copy if you need to download it to other computers.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>What logo files do I get?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>All Looka Brand Kit download packages come with 15+ different versions of your logo—including multiple color options, transparent background, and PNG, PDF, and vector files. We deliver everything that a designer would provide, plus more.</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>Do I own my logo design?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>
							<p className='pb-5'>As the legal owner of your logo files, you have full copyright of your logo; however, it applies it to your logo design as a whole and not the individual elements (e.g. symbols).</p>
							<p>If you require a legally binding trademark and would like to prevent others from using your logo, please contact the copyright/trademark office in your country.</p>
						</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>What if I need help designing or downloading my logo?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>The easiest and quickest way to get help is through our online chat support. Click the blue speech bubble button in the bottom right corner of the page to contact one of our customer success managers. You can also email our team at support@looka.com.</AccordionContent>
					</AccordionPanel>

					<AccordionPanel>
						<AccordionTitle className='text-lg font-extrabold'>Will I know the fonts and colors used in my logo?</AccordionTitle>
						<AccordionContent className='text-base text-slate-500'>Yes! In your downloaded logo folder, you’ll see a “Getting Started” guide explaining your logo files and the colors and fonts used. This guide is included with both Premium and Business Brand Kit subscriptions.</AccordionContent>
					</AccordionPanel>
				</Accordion>
			</div>

		</div >
	)
}

export default LogoMaker