import React from 'react'
import LogoExample1 from '../../img/brand-kit/LogoExample1.png'
import LogoExample2 from '../../img/brand-kit/LogoExample2.png'
import LogoExample3 from '../../img/brand-kit/LogoExample3.png'

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
		</div>
	)
}

export default BrandKit