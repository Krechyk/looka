import React from 'react'
import Example1 from '../img/Example1.png'
import Example2 from '../img/Example2.png'
import Example3 from '../img/Example3.png'
import Example4 from '../img/Example4.png'
import Example5 from '../img/Example5.png'

const LogoMaker = () => {
	return (
		<div className='gap-y-20 pt-10 w-full flex justify-center items-center flex-col'>
			<div className='w-7/12 gap-y-10 flex flex-col justify-center items-center'>
				<p className='text-5xl font-extrabold'>Make a logo with Looka</p>
				<p className='w-full text-xl text-slate-500 '>Looka Logo Maker combines your logo design preferences with Artificial Intelligence to help you create a custom logo you'll love. All it takes is a few clicks and five minutes.</p>
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
				<div className='w-5/12 flex flex-col items-end justify-center gap-y-5 '>
					<div className='w-6/12 flex gap-x-1'>
						<p className='text-3xl font-extrabold text-indigo-700'>02.</p>
						<p className='text-3xl font-extrabold'>Our logo maker is fun</p>
					</div>
					<p className=' w-6/12 text-sm text-slate-500'>Finalize your colors, fonts, and layouts in our easy-to-use logo editor to make sure you get exactly what you want. Undo any edits you make and then click Save when you’ve created your perfect logo design.</p>
				</div>
				<div className='w-6/12'><img className='w-10/12' src={Example5} alt="" /></div>
			</div>
		</div>
	)
}

export default LogoMaker