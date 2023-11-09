import React, { useState, useContext } from 'react'
import { Progress } from 'flowbite-react';

import { EditContext } from '../../Context';
import { IndustryList, ImageList } from '../../info'

const Onboarding = () => {
	const [vissibleStep, setVissibleStep] = useState(1);
	const [show, setShow] = useState(false);
	const [value, setValue] = useState(" ");
	const [likesLogo, setLikesLogo] = useState([])

	const data = useContext(EditContext)

	const handleFocus = () => {
		setTimeout(() => {
			setShow(true)
		}, 300)
	}
	const handleBlur = () => {
		setTimeout(() => {
			setShow(false)
		}, 300)
	}
	const handleChange = (e) => {
		setValue(e.target.value)
	}
	const handleNextStep = () => {
		setVissibleStep(vissibleStep + 1)
	}
	const selectedImage = (id) => {
		if (likesLogo.includes(id)) {
			const filteredLikes = likesLogo.filter((item) => item !== id)
			setLikesLogo(filteredLikes)
		} else {
			setLikesLogo([...likesLogo, id])
		}

	}
	const contextExport = (value, likesLogo) => {
		data.setLikedLogo(likesLogo)
		data.SelectIndustry = value
	}
	return (
		<>

			{vissibleStep === 1 && //pick industry

				<div>
					<Progress className='w-full' progress={60} size="lg" color='dark' />
					<div className='w-full flex flex-col items-center gap-y-8'>
						<div className='w-6/12 flex justify-between items-center'>
							<div>
								<p className='pb-4 text-4xl font-extrabold '>Pick your industry</p>
								<p className='w-10/12 text-xl text-slate-500 '>Knowing your industry will help us pick symbols, colors, and more.</p>
							</div>
							<button onClick={handleNextStep} className='w-[240px] max-h-20 pt-5 pb-5 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
						</div>

						<div className='w-6/12 flex flex-col items-start'>

							<input
								onChange={handleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								value={value}
								className='text-base bg-slate-200 w-full pl-4 pt-5 pb-5 rounded-xl'
								type="text"
								placeholder='Restaurant, Consulting,Beauty'
							/>

							<div className='rounded-md pl-4 w-full text-xl bg-slate-200'>

								{show &&
									IndustryList.map((el) => {
										return (
											<p onClick={() => setValue(el.name)} className='cursor-pointer bg-slate-200' key={el.id}>{el.name}</p>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>

			}
			{vissibleStep === 2 && //pick likes logos 

				<div className='w-full flex flex-col items-center gap-y-8'>
					<div className='w-6/12 flex justify-between items-center'>
						<div>
							<p className='pb-4 text-4xl font-extrabold '>Pick some logos you like</p>
							<p className='w-full text-xl text-slate-500 '>We'll use these as inspiration. These were all made with Looka.</p>
						</div>
						<button onClick={handleNextStep} className='w-[240px] max-h-20 pt-5 pb-5 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
					</div>
					<div className='flex flex-wrap gap-10 w-9/12 justify-center'>
						{
							ImageList.map((el) => {
								return (
									<div key={el.id}>
										<div onClick={() => selectedImage(el.id)} className={`shadow-2xl overflow-hidden rounded-xl ${likesLogo.includes(el.id) ? 'border-cyan-600 border-2' : null} cursor-pointer`}>
											<img className='w-[300px] h-[240px] ' src={el.img} alt="" />
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			}
			{vissibleStep === 3 &&
				<div>
					cscdcsdc
				</div>
			}
		</>
	)
}

export default Onboarding