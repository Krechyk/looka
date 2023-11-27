import React, { useEffect, useState } from 'react'

import { RangeSlider } from 'flowbite-react';
import EditorLowercaseButton from '../common/EditorLowercaseButton';
import EditorOptionsButton from '../common/EditorOptionsButton';
import { ColorList, ColorsShade, FontImageList, FontTypesList } from '../../info';
import { useEditContext } from '../../Context';

import { ChromePicker } from 'react-color'
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsBs from 'react-icons/bs';
import { IoIosArrowBack, IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineLightBulb } from "react-icons/hi";
import { TfiLayoutMenuV } from "react-icons/tfi";
import { HiArrowUturnLeft, HiArrowUturnRight } from "react-icons/hi2";
import { WiCloudDown } from "react-icons/wi";
import { GoContainer } from "react-icons/go";
import { FaCrown, FaEye, FaHistory } from "react-icons/fa";
import { DiSmashingMagazine } from "react-icons/di";
import { TiThMenu } from "react-icons/ti";
import { GiStarKey } from "react-icons/gi";
import { MdKeyboardArrowDown, MdOutlineOpenInFull } from "react-icons/md";
import { BiDroplet, BiSolidEditAlt } from "react-icons/bi";
import { PiSelectionBackgroundBold, PiNotionLogo } from "react-icons/pi";
import { CgFontSpacing } from "react-icons/cg";
import { RiDeleteBinLine } from "react-icons/ri";




const Editor = () => {
	const [showBlockEditor, setShowBlockEditor] = useState(0)
	const [showSizeNameSlider, setShowSizeNameSlider] = useState(false)
	const [showSpacingSlider, setShowSpacingSlider] = useState(false)
	const [visiblePicker, setVisiblePicker] = useState(true)
	const [showFontTypesName, setShowFontTypesName] = useState(false)

	const [ideasButtonSelected, setIdeasButtonSelected] = useState("Font Pairs")
	const [backgroundColorsSelected, setBackgroundColorsSelected] = useState('Green')

	const [nameButtonSelected, setNameButtonSelected] = useState("Font Types")
	const [nameColor, setNameColor] = useState('Green')
	const [nameLowercaseButton, setNameLowercaseButton] = useState('abc')
	const [nameSize, setNameSize] = useState(1)
	const [nameSpacing, setNameSpacing] = useState(0.2)

	const [sloganButtonSelected, setSloganButtonSelected] = useState("Font Types")
	const [symbolButtonSelected, setSymbolButtonSelected] = useState("Symbols")

	const {
		companyName, setCompanyName,
		sloganName, setSloganName,
		selectParameters, setSelectParameters
	} = useEditContext()



	const allIcons = { ...ReactIconsFa, ...ReactIconsBs }
	const stepEditor = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

	const IconComponent = allIcons[selectParameters?.nameIcon]

	const editBackground = (el) => {
		setSelectParameters({ ...selectParameters, background: el })
	}
	const backgroundHandleChange = (color) => {
		setSelectParameters({ ...selectParameters, background: color.hex })
	}

	const editNameColor = (el) => {
		setSelectParameters({ ...selectParameters, name_text_color: el })
	}
	const textColorHandleChange = (color) => {
		setSelectParameters({ ...selectParameters, name_text_color: color.hex })
	}
	const companyNameHandleChange = (e) => {
		setCompanyName(e.target.value)
	}

	const handleSize = (e) => {
		setNameSize(e.target.value)
	}
	const handleSpacing = (e) => {
		setNameSpacing(e.target.value)
	}
	console.log(showSizeNameSlider)
	useEffect(() => {
		const tempTemplate = localStorage.getItem('selectedTemplate')
		if (tempTemplate) {
			setSelectParameters(JSON.parse(tempTemplate))
		}
	}, [])
	return (
		<div>
			<div className='flex justify-between items-center h-[6vh] border-b-[1px] py-3'>
				<div className='flex items-center gap-x-1 text-sm'>
					<div className='hover:bg-gray-200 p-2 rounded-2xl cursor-pointer'><IoIosArrowBack size={20} /></div>
					<div className='p-2 hover:bg-gray-200 rounded-2xl cursor-pointer'>Saved Logos</div>
					<div className='p-2 hover:bg-gray-200 rounded-2xl cursor-pointer'>Make a Copy</div>
					<div className='w-[1px] border-black h-4 border-[1px]'></div>
					<div className='flex items-center gap-1 hover:bg-gray-200 p-2 rounded-2xl cursor-pointer'>Undo <HiArrowUturnLeft size={15} /></div>
					<div className=' hover:bg-gray-200 p-2 rounded-2xl cursor-pointer'><HiArrowUturnRight size={15} /></div>
					<div className='p-1 hover:bg-gray-200 rounded-2xl cursor-pointer'><WiCloudDown size={30} /></div>
				</div>
				<div className='flex gap-x-4 bg-gray-200 p-2 rounded-2xl text-sm'>
					<div className='text-blue-600'>Logo</div>
					<div className='flex items-center'>Brand Kit <MdKeyboardArrowDown /></div>
				</div>
				<div className='flex items-center gap-x-1 text-sm'>
					<div className='p-2 hover:bg-gray-200 rounded-2xl cursor-pointer'>Share</div>
					{/* <div className='p-2 bg-gray-200 rounded-2xl cursor-pointer'>Sign Up</div> */}
					<div className='flex p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl cursor-pointer gap-x-1'> <FaCrown size={20} /> Downland</div>
					<div className='cursor-pointer' ><TiThMenu size={25} /></div>
				</div>
			</div>
			<div className='flex'>
				<div>
					<div className='flex flex-col gap-y-2 border-r-2 h-[88vh]'>
						<div
							className='w-[140px] mb-2 text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[0])}
						>
							<FaEye color='blue' />
							Preview
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[1])}
						>
							<HiOutlineLightBulb color='blue' />
							Suggested
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[2])}
						>
							<TfiLayoutMenuV color='blue' />
							Layout
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[3])}
						>
							<BiDroplet color='blue' />
							Palette
						</div>
						<div
							className='w-[140px] mb-2 text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[4])}
						>
							<GiStarKey color='blue' />
							More Ideas
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[5])}
						>
							<PiSelectionBackgroundBold color='blue' />
							Background
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[6])}
						>
							<PiNotionLogo color='blue' />
							Name
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[7])}
						>
							<BiSolidEditAlt color='blue' />
							Slogan
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[8])}
						>
							<DiSmashingMagazine color='blue' />
							Symbol
						</div>
						<div
							className='w-[140px] mb-2 text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[9])}
						>
							<GoContainer color='blue' />
							Container
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[10])}
						>
							<FaHistory color='blue' />
							History
						</div>
						<div
							className='w-[140px] text-sm hover:bg-gray-200 p-2 rounded-xl flex items-center gap-1 cursor-pointer'
							onClick={() => setShowBlockEditor(stepEditor[11])}
						>
							<IoIosHeartEmpty color='blue' />
							Your logos
						</div>
					</div>
				</div>
				<div>{showBlockEditor === 0 && // Preview
					<div>

					</div>
				}
					{showBlockEditor === 1 && // Suggested
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold '>Suggested Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>
								<div className='flex gap-x-2 my-3 mx-5'>
									<div className='px-4 py-2 flex items-center border-2 rounded-3xl text-xs'>
										<p>Modern</p>
										<MdKeyboardArrowDown />
									</div>
									<div className='px-4 py-2 flex items-center border-2 rounded-3xl text-xs '>
										<p>Color</p>
										<MdKeyboardArrowDown />
									</div>
								</div>
							</div>
						</div>
					}
					{showBlockEditor === 2 && // Layout
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div className='flex items-center justify-between py-2 mx-3'>
								<p className='font-bold '>Layout Options</p>
								<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
									<MdOutlineOpenInFull color='blue' size={12} />
									<p className='text-[10px] text-[blue] '>Fullscreen</p>
								</button>
							</div>
						</div>
					}
					{showBlockEditor === 3 && // Palette
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold '>Palette Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>
								<div className='flex gap-x-2 my-3 mx-5'>
									<div className='px-4 py-2 flex items-center border-2 rounded-3xl text-xs'>
										<p>Professional</p>
										<MdKeyboardArrowDown />
									</div>
									<div className='px-4 py-2 flex items-center border-2 rounded-3xl text-xs '>
										<p>Color</p>
										<MdKeyboardArrowDown />
									</div>
								</div>
							</div>
						</div>
					}
					{showBlockEditor === 4 && // More Ideas
						<div className='w-[300px] h-[88vh]  border-[1px]'>
							<div className='w-full'>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold'>More Ideas Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>
								<EditorOptionsButton
									names={["Font Pairs", "Color Pairs", "Replace letter"]}
									onSelect={setIdeasButtonSelected}
									selected={ideasButtonSelected}
								/>
							</div>
						</div>
					}
					{showBlockEditor === 5 && // Background
						<div className='w-[300px] h-[88vh] border-[1px] overflow-auto'>
							{visiblePicker ?
								<div className='w-full flex flex-col items-center'>
									<div>
										<div className='flex items-center justify-between py-2 mx-3'>
											<p className='font-bold '>Background options</p>
											<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300 '>
												<MdOutlineOpenInFull color='blue' size={12} />
												<p className='text-[10px] text-[blue] '>Fullscreen</p>
											</button>
										</div>
										<div className='flex items-center justify-center gap-x-1 py-2 mx-5'>
											{ColorList.map((el) => {
												return (
													<div
														onClick={() => setBackgroundColorsSelected(el.name)}
														key={el.id}
														className='w-[25px] h-[25px] rounded-2xl flex justify-center items-center cursor-pointer'
														style={{ background: `${el.color}` }}
													>
														<div className='hover:border-white hover:border-[2px] w-[23px] h-[23px] rounded-2xl '></div>
													</div>
												)
											})}
										</div>
									</div>
									<div>
										{
											ColorsShade[backgroundColorsSelected]?.map((el) => {
												return (
													<div
														onClick={() => editBackground(el)}
														className='mb-4 border-2 w-[240px] h-[160px] rounded-xl flex justify-center items-center gap-2 cursor-pointer'
														key={el}
														style={{
															background: `${el}`,
															flexDirection: `${selectParameters.direction}`
														}}
													>
														<div
															className='text-center'
															style={{
																color: `${selectParameters.name_text_color}`,
																fontSize: `${16 * nameSize}px`,
																letterSpacing: `${10 * nameSpacing}px`,
																textTransform: `${nameLowercaseButton === 'ABC' ? 'uppercase' : 'lowercase'}`,
															}}
														>
															{companyName.length === 0 ? 'Your Company Name' : companyName}
														</div>
														<IconComponent size={40} />
														<div>{sloganName.length === 0 ? 'Your Slogan' : sloganName}</div>
													</div>
												)
											})}
									</div>
								</div>
								:
								<div className='flex justify-center'>
									<ChromePicker
										width='270px'
										color={selectParameters.background}
										onChangeComplete={backgroundHandleChange}
										disableAlpha={true}
									/>
								</div>
							}

						</div>
					}
					{showBlockEditor === 6 && // Name
						<div className='w-[300px] h-[88vh] border-[1px] overflow-auto'>
							{visiblePicker ?
								<>
									<div>
										<div className='flex items-center justify-between py-2 mx-3'>
											<p className='font-bold '>Name Options</p>
											<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
												<MdOutlineOpenInFull color='blue' size={12} />
												<p className='text-[10px] text-[blue] '>Fullscreen</p>
											</button>
										</div>
										<EditorOptionsButton
											names={["Font Types", "Colors", "Recent"]}
											onSelect={setNameButtonSelected}
											selected={nameButtonSelected}
										/>
									</div>
									<div className='flex justify-start py-2 mx-5'>
										<div>
											{nameButtonSelected === 'Font Types' &&
												<div className='flex items-center py-2 px-4 border-black border-2 rounded-3xl text-sm relative cursor-pointer'>
													<p onClick={() => setShowFontTypesName(!showFontTypesName)} >
														Suggested (40 Results)
													</p>
													<MdKeyboardArrowDown />
													{showFontTypesName ?
														<div className='absolute top-12 left-[-24px] w-[300px] flex flex-wrap justify-center border-2 gap-x-2 gap-y-[1px] rounded-2xl shadow-2xl py-[2px]'>
															{FontImageList.map((el) => {
																return (
																	<div
																		className='w-[140px] h-[30px] px-4 flex items-center hover:bg-gray-100 rounded-xl'
																		key={el.id}
																	>
																		<img src={el.img} alt="" />
																	</div>
																)
															})}
														</div>
														: null
													}
												</div>
											}
										</div>
										<div>
											{nameButtonSelected === 'Colors' &&
												<>
													<div className='flex items-center justify-center gap-x-1 py-2'>
														{ColorList.map((el) => {
															return (
																<div
																	onClick={() => setNameColor(el.name)}
																	key={el.id}
																	className='w-[25px] h-[25px] rounded-2xl flex justify-center items-center cursor-pointer'
																	style={{ background: `${el.color}` }}
																>
																	<div className='hover:border-white hover:border-[2px] w-[23px] h-[23px] rounded-2xl '></div>
																</div>
															)
														})}
													</div>
													<div >
														{
															ColorsShade[nameColor]?.map((el) => {
																return (
																	<div
																		onClick={() => editNameColor(el)}
																		className='mb-4 border-2 w-[240px] h-[160px] rounded-xl flex justify-center items-center gap-1 cursor-pointer'
																		key={el}
																		style={{
																			flexDirection: `${selectParameters.direction}`,
																			background: `${selectParameters.background}`
																		}}
																	>
																		<div
																			className='text-center'
																			style={{
																				color: `${el}`,
																				fontSize: `${16 * nameSize}px`,
																				letterSpacing: `${10 * nameSpacing}px`,
																				textTransform: `${nameLowercaseButton === 'ABC' ? 'uppercase' : 'lowercase'}`,
																			}}
																		>{companyName.length === 0 ? 'Your Company Name' : companyName}</div>
																		<IconComponent size={40} />
																		<div>{sloganName.length === 0 ? 'Your Slogan' : sloganName}</div>
																	</div>
																)
															})}
													</div>
												</>
											}

										</div>
									</div>
									<div>

									</div>
								</>
								:
								<div className='flex justify-center'>
									<ChromePicker
										width='270px'
										color={selectParameters.name_text_color}
										onChangeComplete={textColorHandleChange}
										disableAlpha={true}
									/>
								</div>
							}

						</div>
					}
					{showBlockEditor === 7 && // Slogan
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold '>Slogan Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>
								<EditorOptionsButton
									names={["Font Types", "Colors", "Recent"]}
									onSelect={setSloganButtonSelected}
									selected={sloganButtonSelected}
								/>
							</div>
						</div>
					}
					{showBlockEditor === 8 && // Symbol
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold '>Symbol Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>
								<EditorOptionsButton
									names={["Symbols", "Monogram", "Colors", "Recent"]}
									onSelect={setSymbolButtonSelected}
									selected={symbolButtonSelected}
								/>
							</div>
						</div>
					}
					{showBlockEditor === 9 && // Container
						<div className='w-[300px] h-[88vh] border-[1px]'>
							<div>
								<div className='flex items-center justify-between py-2 mx-3'>
									<p className='font-bold '>Container Options</p>
									<button className='flex justify-center items-center bg-gray-200 rounded-xl py-1 px-3 gap-x-1 hover:bg-gray-300'>
										<MdOutlineOpenInFull color='blue' size={12} />
										<p className='text-[10px] text-[blue] '>Fullscreen</p>
									</button>
								</div>

							</div>
						</div>
					}
				</div>

				<div className='w-full flex justify-center items-center relative'>
					{showBlockEditor === 5 && // Background
						<div
							onClick={() => setVisiblePicker(!visiblePicker)}
							className='w-[30px] h-[30px] cursor-pointer rounded-xl absolute top-5 left-5'
							style={{ background: `${selectParameters.background}` }}
						>
						</div>
					}
					{showBlockEditor === 6 && // Name
						<div className='flex items-center gap-x-1 absolute top-5 left-5'>
							<div
								onClick={() => setVisiblePicker(!visiblePicker)}
								className='w-[30px] h-[30px] cursor-pointer rounded-xl '
								style={{ background: `${selectParameters.name_text_color}` }}
							>

							</div>
							<div className='relative'>
								<input
									value={companyName}
									onChange={companyNameHandleChange}
									className='border-[1px] focus:border-[1px] h-[36px] rounded-2xl bg-gray-100 border-blue-600'
									type="text"
								/>
								<button className='h-[28px] w-[50px] text-blue-600 bg-white rounded-2xl text-sm absolute top-1 right-1'>Stack</button>
							</div>
							<button  //FontSize
								onBlur={() => setShowSizeNameSlider(false)}
								className='h-[30px] px-3 hover:bg-gray-200 flex justify-center items-center rounded-xl cursor-pointer text-sm relative'
							>
								<p onClick={() => setShowSizeNameSlider(!showSizeNameSlider)}>Size</p>
								{showSizeNameSlider ?
									<div className='absolute top-10 w-[160px] border-[1px] py-2 px-4 shadow-2xl rounded-xl flex flex-col items-start'>
										<p>Size: {nameSize}</p>
										<RangeSlider
											value={nameSize}
											min={0.05}
											max={2.25}
											step={0.05}
											onChange={handleSize}
										/>
									</div>
									: null
								}
							</button>
							<button  //LetterSpacing
								onBlur={() => setShowSpacingSlider(false)}
								className='h-[30px] px-3 hover:bg-gray-200 flex justify-center items-center rounded-xl cursor-pointer'
							>
								<CgFontSpacing size={20} onClick={() => setShowSpacingSlider(!showSpacingSlider)} />
								{showSpacingSlider ?
									<div className='absolute top-10 w-[160px] border-[1px] py-2 px-4 shadow-2xl rounded-xl flex flex-col items-start'>
										<p>Size: {nameSpacing}</p>
										<RangeSlider
											value={nameSpacing}
											min={-0.50}
											max={2}
											step={0.05}
											onChange={handleSpacing}
										/>
									</div>
									: null
								}
							</button>
							<button //LowerCase 
							>
								<EditorLowercaseButton
									names={["ABC", "abc"]}
									onSelect={setNameLowercaseButton}
									selected={nameLowercaseButton}
								/>
							</button>
							<div className='h-[30px] px-3 hover:bg-gray-200 flex justify-center items-center rounded-xl cursor-pointer' ><RiDeleteBinLine size={20} color='gray' /></div>
						</div>
					}
					<div
						className='border-2 min-w-[400px] w-8/12 h-[400px] rounded-xl flex justify-center items-center gap-2'
						style={{
							background: `${selectParameters.background}`,
							flexDirection: `${selectParameters.direction}`,
						}}
					>
						<div
							className='text-center'
							style={{
								color: `${selectParameters.name_text_color}`,
								fontSize: `${32 * nameSize}px`,
								letterSpacing: `${20 * nameSpacing}px`,
								textTransform: `${nameLowercaseButton === 'ABC' ? 'uppercase' : 'lowercase'}`,
								// fontFamily: `${'Texturina'}`
							}}
						>
							{companyName.length === 0 ? 'Your Company Name' : companyName}
						</div>
						{IconComponent && <IconComponent size={40} />}
						<div>{sloganName.length === 0 ? 'Your Slogan' : sloganName}</div>
					</div>
				</div>
			</div>

		</div >
	)
}

export default Editor