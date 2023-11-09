import React from 'react'

import Image50Colors from '../../img/blog/BlogImage50Colors.png'
import ImageLogoDesign1 from '../../img/blog/BlogLogoDesignImage1.png'
import ImageLogoDesign2 from '../../img/blog/BlogLogoDesignImage2.png'
import ImageLogoDesign3 from '../../img/blog/BlogLogoDesignImage3.png'
import ImageStartBusiness1 from '../../img/blog/ImageBlogStartingABusiness1.png'
import ImageStartBusiness2 from '../../img/blog/ImageBlogStartingABusiness2.png'
import ImageStartBusiness3 from '../../img/blog/ImageBlogStartingABusiness3.png'
import ImageBranding1 from '../../img/blog/ImageBlogBranding1.png'
import ImageBranding2 from '../../img/blog/ImageBlogBranding2.png'
import ImageBranding3 from '../../img/blog/ImageBlogBranding3.png'
import ImageUsingLooka1 from "../../img/blog/ImageBlogUsignLooka1.png"
import ImageUsingLooka2 from "../../img/blog/ImageBlogUsignLooka2.png"
import ImageUsingLooka3 from "../../img/blog/ImageBlogUsignLooka3.png"
import ImageSocialMedia1 from "../../img/blog/ImageBlogSocialMedia1.png"
import ImageSocialMedia2 from "../../img/blog/ImageBlogSocialMedia2.png"
import ImageSocialMedia3 from "../../img/blog/ImageBlogSocialMedia3.png"

const Blog = () => {
	return (
		<div className='flex flex-col items-center gap-y-20'>
			<div className='pt-20 w-5/12 flex flex-col items-center gap-y-8'>
				<p className='text-5xl font-extrabold'>Looka Blog</p>
				<p className='text-lg text-slate-500 text-center'>Whether you have a new business idea or need design tips, the Looka blog is filled with helpful articles and stories to help you build a business you love.</p>
			</div>
			<div className='w-8/12'>
				<div className=' flex justify-center gap-x-10'>
					<img className='w-6/12' src={Image50Colors} alt="" />
					<div className='w-6/12 flex flex-col justify-center gap-y-5'>
						<p className='text-indigo-700 text-xs'>LOGO DESIGN</p>
						<p className='text-3xl font-extrabold'>50 Logo Color Combinations to Inspire Your Design</p>
						<p className='text-base text-slate-500'>Our brains are hardwired to react to and remember color combinations. If you close you...</p>
						<p className='text-indigo-700 text-xs'>Read More</p>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-y-10'>
				<p className='w-8/12 text-4xl font-extrabold'>Logo Design</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={ImageLogoDesign1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>LOGO DESIGN</p>
						<p className='text-2xl font-extrabold '>Top 32 Vintage Fonts for Retro Brands</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageLogoDesign2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>LOGO DESIGN</p>
						<p className='text-2xl font-extrabold '>The Adidas Logo: A Look Behind the Stripes</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageLogoDesign3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>LOGO DESIGN</p>
						<p className='text-2xl font-extrabold '>More Than a ‘Like’: The Story of the Facebook Logo</p>
					</div>
				</div>
			</div>
			<div className='w-full flex flex-col items-center gap-y-10'>
				<p className='w-8/12 text-4xl font-extrabold'>Starting a Business</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={ImageStartBusiness1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>STARTING A BUSINESS</p>
						<p className='text-2xl font-extrabold '>55 T-shirt Design Ideas for Creative Designs</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageStartBusiness2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>STARTING A BUSINESS</p>
						<p className='text-2xl font-extrabold '>Harnessing AI: Essential Tools for the Modern Entrepreneur</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageStartBusiness3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>STARTING A BUSINESS</p>
						<p className='text-2xl font-extrabold '>How to Choose a Blog Name (With 100+ Blog Name Ideas You’ll Love!)</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-y-10'>
				<p className='w-8/12 text-4xl font-extrabold'>Branding</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={ImageBranding1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>20 Fall Color Palettes for a Warm Fall Aesthetic</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageBranding2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>22 Brand Guidelines Examples to Inspire Your Brand Guide</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageBranding3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>BRANDING</p>
						<p className='text-2xl font-extrabold '>25 YouTube Banner Templates and Banner Ideas (+ Size Guide)</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-y-10'>
				<p className='w-8/12 text-4xl font-extrabold'>Using Looka</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={ImageUsingLooka1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>USING LOOKA</p>
						<p className='text-2xl font-extrabold '>Accelerate Your Business With Exclusive Discounts Through Looka</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageUsingLooka2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>USING LOOKA</p>
						<p className='text-2xl font-extrabold '>Lessons From Looka Affiliates: WiziShop’s Focus On Creating The Best Customer Experience</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageUsingLooka3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>USING LOOKA</p>
						<p className='text-2xl font-extrabold '>Introducing the Brand Kit, Looka’s All-in-One Branding Solution Social media for business</p>
					</div>
				</div>
			</div>
			<div className='flex flex-col items-center gap-y-10'>
				<p className='w-8/12 text-4xl font-extrabold'>Social media for business</p>
				<div className='flex w-8/12 gap-x-10'>
					<div className='w-7/12'>
						<img src={ImageSocialMedia1} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>SOCIAL MEDIA FOR BUSINESS</p>
						<p className='text-2xl font-extrabold '>The Most Effective Social Media Tools for Your Business in 2023</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageSocialMedia2} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>SOCIAL MEDIA FOR BUSINESS</p>
						<p className='text-2xl font-extrabold '>How to Use TikTok for Business: A Beginner’s Guide</p>
					</div>
					<div className='w-7/12'>
						<img src={ImageSocialMedia3} alt="" />
						<p className='pt-6 text-indigo-700 text-xs'>SOCIAL MEDIA FOR BUSINESS</p>
						<p className='text-2xl font-extrabold '>20 Instagram Post Templates for Your Brand and Business</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog