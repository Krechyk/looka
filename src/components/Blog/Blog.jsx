import React from 'react'

import Image50Colors from '../../img/blog/BlogImage50Colors.png'

const Blog = () => {
	return (
		<div className='flex flex-col items-center gap-y-20'>
			<div className='pt-20 w-5/12 flex flex-col items-center gap-y-8'>
				<p className='text-5xl font-extrabold'>Looka Blog</p>
				<p className='text-lg text-slate-500 text-center'>Whether you have a new business idea or need design tips, the Looka blog is filled with helpful articles and stories to help you build a business you love.</p>
			</div>
			<div>
				<div className='flex gap-x-10'>
					<img src={Image50Colors} alt="" />
					<div className='w-4/12 flex flex-col justify-center gap-y-5'>
						<p className='text-indigo-700 text-xs'>LOGO DESIGN</p>
						<p className='text-3xl font-extrabold'>50 Logo Color Combinations to Inspire Your Design</p>
						<p className='text-base text-slate-500'>Our brains are hardwired to react to and remember color combinations. If you close you...</p>
						<p className='text-indigo-700 text-xs'>Read More</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Blog