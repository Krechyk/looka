import React, { useState } from 'react'
import { Progress } from 'flowbite-react';
import * as ReactIcons from 'react-icons/fa';

import { useEditContext } from '../../Context';
import {
	IndustryList,
	ImageList,
	ColorList,
	SymbolTypesList,
	SymbolVariationList
} from '../../info'

const Onboarding = () => {
	const [vissibleStep, setVissibleStep] = useState(1);
	const [show, setShow] = useState(false);
	const [filteredIndustryList, setFilteredIndusrtyList] = useState(IndustryList)
	const [progressindicator, setProgressIndicator] = useState(20)
	const [ownSymbols, setOwnSymbols] = useState(false)
	const [selectSymbols, setSelectSymbols] = useState('')

	const {
		selectIndustry, setSelectIndustry,
		likedLogo, setLikedLogo,
		likedColor, setLikedColor,
		companyName, setCompanyName,
		sloganName, setSloganName,
		symbolTypes, setSymbolTypes
	} = useEditContext()

	const handleFocus = () => {
		setTimeout(() => {
			setShow(true)
		}, 300)
	}
	const handleBlur = () => {
		setTimeout(() => {
			setShow(false)
		}, 200)
	}
	const industryHandleChange = (e) => {
		setSelectIndustry(e.target.value)
		setFilteredIndusrtyList(IndustryList.filter(item => item.name.includes(e.target.value)))
	}
	const handleNextStep = () => {
		setVissibleStep(vissibleStep + 1)
		setProgressIndicator(progressindicator + 16)
	}
	const companyNameHandleChange = (e) => {
		setCompanyName(e.target.value)
	}
	const sloganNameHandleChange = (e) => {
		setSloganName(e.target.value)
	}

	const selectedImage = (id) => {
		if (likedLogo.includes(id)) {
			const filteredLikes = likedLogo.filter((item) => item !== id)
			setLikedLogo(filteredLikes)
		} else {
			setLikedLogo([...likedLogo, id])
		}
	}
	const selectedColor = (name) => {
		if (likedColor.includes(name)) {
			const filteredLikes = likedColor.filter((item) => item !== name)
			setLikedColor(filteredLikes)
		} else {
			setLikedColor([...likedColor, name])
		}
	}
	const selectedSymbol = (name) => {
		if (symbolTypes.includes(name)) {
			const filteredLikes = symbolTypes.filter((item) => item !== name)
			setSymbolTypes(filteredLikes)
		} else {
			setSymbolTypes([...symbolTypes, name])
		}
	}

	const iconNames = Object.keys(ReactIcons)
	console.log(iconNames)
	return (
		<>
			<Progress className='mt-2' progress={progressindicator} />
			{vissibleStep === 1 && //pick industry
				<div>
					<div className='pt-8 w-full flex flex-col items-center gap-y-8'>
						<div className='w-6/12 flex justify-between items-center'>
							<div>
								<p className='pb-4 text-3xl font-extrabold '>Pick your industry</p>
								<p className='w-10/12 text-xl text-slate-500 '>Knowing your industry will help us pick symbols, colors, and more.</p>
							</div>
							{
								selectIndustry.length !== 0 ?
									<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
									:
									<button disabled className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-400 text-center'>Continue {'->'} </button>
							}
						</div>

						<div className='w-6/12 flex flex-col items-start'>

							<input
								onChange={industryHandleChange}
								onFocus={handleFocus}
								onBlur={handleBlur}
								value={selectIndustry}
								className='text-base bg-slate-200 w-full pl-4 pt-5 pb-5 rounded-xl'
								type="text"
								placeholder='Restaurant,Consulting,Beauty...'
							/>

							<div className='rounded-md w-full text-base'>

								{show &&
									filteredIndustryList.map((el) => {
										return (
											<p onClick={() => setSelectIndustry(el.name)} className='rounded-xl p-2 pl-4 cursor-pointer hover:bg-slate-200' key={el.id}>{el.name}</p>
										)
									})
								}
							</div>
						</div>
					</div>
				</div>
			}
			{vissibleStep === 2 && //pick likes logos 
				<div className='pt-8 w-full flex flex-col items-center gap-y-8'>

					<div className='w-6/12 flex justify-between items-center'>
						<div>
							<p className='pb-4 text-3xl font-extrabold '>Pick some logos you like</p>
							<p className='w-full text-xl text-slate-500 '>We'll use these as inspiration. These were all made with Looka.</p>
						</div>
						{
							likedLogo.length !== 0 ?
								<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
								:
								<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-blue-600 bg-slate-200 text-center'>Skip {'->'} </button>
						}
					</div>
					<div className='flex flex-wrap gap-10 w-9/12 justify-center'>
						{
							ImageList.map((el) => {
								return (
									<div key={el.id}>
										<div onClick={() => selectedImage(el.id)} className={`shadow-2xl overflow-hidden rounded-xl ${likedLogo.includes(el.id) ? 'border-cyan-600 border-2' : null} cursor-pointer`}>
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
				<div className='pt-8 w-full flex flex-col items-center gap-y-8'>
					<div className='w-6/12 flex justify-between items-center'>
						<div>
							<p className='pb-4 text-3xl font-extrabold '>Pick some colors you like</p>
							<p className='w-full text-xl text-slate-500 '>Colors help convey emotion in your logo</p>
						</div>
						{
							likedColor.length !== 0 ?
								<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
								:
								<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-blue-600 bg-slate-200 text-center'>Skip {'->'} </button>
						}
					</div>
					<div className='flex flex-wrap gap-10 w-8/12 justify-center'>
						{
							ColorList.map((el) => {
								return (
									<div key={el.id}>
										<div
											onClick={() => selectedColor(el.name)}
											style={{ backgroundColor: `${el.color}` }}
											className={`pb-4 pl-4 flex items-end font-extrabold text-white text-base cursor-pointer rounded-xl w-[280px] h-[140px] ${likedColor.includes(el.name) ? 'border-cyan-600 border-4' : null} `}
										>
											{el.name}
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			}
			{vissibleStep === 4 &&
				<div className='pt-8 w-full flex flex-col items-center gap-y-8'>
					<div className='w-6/12 flex justify-between items-center'>
						<div>
							<p className='pb-4 text-3xl font-extrabold '>Enter your company name</p>
							<p className='w-full text-xl text-slate-500 '>You can always change these later</p>
						</div>
						{
							companyName.length && sloganName.length !== 0 ?
								<button onClick={handleNextStep} className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
								:
								<button disabled className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-400 text-center'>Continue {'->'} </button>
						}
					</div>
					<div className='flex w-6/12 gap-x-10'>
						<input
							onChange={companyNameHandleChange}
							value={companyName}
							className='h-[50px] w-[240px] pl-2 rounded-xl bg-gray-200'
							type="text"
							placeholder='Company Name'
						/>
						<input
							onChange={sloganNameHandleChange}
							value={sloganName}
							className='h-[50px] w-[240px] pl-2 rounded-xl bg-gray-200'
							type="text"
							placeholder='Add a Slogan (Optional)'
						/>
					</div>
				</div>
			}
			{vissibleStep === 5 &&
				<div>
					{ownSymbols ?
						<div className='pt-8 w-full flex flex-col items-center gap-y-8'>
							<div className='w-6/12 flex justify-between items-center'>
								<div>
									<p className='pb-4 text-3xl font-extrabold '>Pick up to 5 symbols</p>
								</div>
								{
									symbolTypes.length !== 0 ?
										<button className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
										:
										<button disabled className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-400 text-center'>Continue {'->'} </button>
								}
							</div>
							<div
								className='w-6/12 text-blue-800 text-sm hover:underline cursor-pointer'
								onClick={() => setOwnSymbols(false)}
							>
								Pick symbols for me
							</div>
							<div className='w-[800px] flex justify-center'>
								<div className='flex items-center'>
									<div className='flex items-center relative w-full'>
										<input
											defaultValue={selectSymbols}
											className='rounded-xl  border-slate-300 w-[500px] h-[40px]'
											type="text"
											placeholder='Search for symbols...'
										/>
										<button className='w-[80px] h-[30px] rounded-lg text-white bg-blue-600 border absolute right-1 ' >Search</button>
									</div>
									<div className='flex w-full gap-x-4 pl-4'>
										<div className='w-[40px] h-[40px] border-slate-300 border-dashed border-2 rounded-md'></div>
										<div className='w-[40px] h-[40px] border-slate-300 border-dashed border-2 rounded-md'></div>
										<div className='w-[40px] h-[40px] border-slate-300 border-dashed border-2 rounded-md'></div>
										<div className='w-[40px] h-[40px] border-slate-300 border-dashed border-2 rounded-md'></div>
										<div className='w-[40px] h-[40px] border-slate-300 border-dashed border-2 rounded-md'></div>
									</div>
								</div>
							</div>
							<div className='w-[800px] flex overflow-scroll gap-x-4'>
								{SymbolVariationList.map((el) => {
									return (
										<div
											onClick={() => setSelectSymbols(el.name)}
											key={el.id}
											className={`text-xs border-slate-300 rounded-2xl border-2 px-4 py-1 cursor-pointer ${selectSymbols.includes(el.name) ? 'text-white bg-blue-600' : null}`}
										>
											{el.name}
										</div>
									)
								})
								}
							</div>
							{/* <div>
								{
									iconNames.map((el, index) => {
										return (
											<div key={index}>
												<img src={el} alt="" />
											</div>
										)
									})
								}
							</div> */}
						</div>
						:
						<div className='pt-8 w-full flex flex-col items-center gap-y-8'>
							<div className='w-6/12 flex justify-between items-center'>
								<div>
									<p className='pb-4 text-4xl font-extrabold '>Pick some symbol types</p>
									<p className='w-full text-xl text-slate-500 '>We've hand-curated symbols for these types</p>
								</div>
								{
									symbolTypes.length !== 0 ?
										<button className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-600 text-center'>Continue {'->'} </button>
										:
										<button disabled className='w-[200px] max-h-20 pt-4 pb-4 border rounded-xl text-lg text-white bg-blue-400 text-center'>Continue {'->'} </button>
								}
							</div>
							<div className='flex flex-wrap w-6/12 gap-x-8 gap-y-6'>
								{
									SymbolTypesList.map((el) => {
										return (
											<div
												onClick={() => selectedSymbol(el.name)}
												className={`border-2 text-sm text-gray px-10 py-2 rounded-3xl flex justify-center cursor-pointer hover:bg-slate-200 ${symbolTypes.includes(el.name) ? 'border-cyan-600 border-2' : null}`}
												key={el.id}
											>
												{el.name}
											</div>
										)
									})
								}
							</div>
							<div
								className='w-6/12 text-blue-800 text-sm hover:underline cursor-pointer'
								onClick={() => setOwnSymbols(true)}
							>
								I want to pick my own symbols
							</div>
						</div>
					}

				</div>
			}
		</>
	)
}

export default Onboarding