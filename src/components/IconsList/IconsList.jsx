import React from 'react'
import * as ReactIconsFa from 'react-icons/fa';
import * as ReactIconsBs from 'react-icons/bs';

import { useEditContext } from '../../Context';

const IconsList = () => {
	const allIcons = { ...ReactIconsFa, ...ReactIconsBs }
	const iconSets = Object.keys(allIcons)

	const {
		selectSymbols, setSelectSymbols
	} = useEditContext()
	const selectedSymbols = (name) => {

		if (selectSymbols.includes(name)) {
			const filteredLikes = selectSymbols.filter((item) => item !== name)
			setSelectSymbols(filteredLikes)
		} else {
			if (selectSymbols.length < 5) {
				setSelectSymbols([...selectSymbols, name])
			}
		}

	}

	console.log(selectSymbols)
	return (
		<div className='flex justify-center flex-wrap overflow-scroll h-[700px] w-[800px] gap-8 pb-10'>
			{iconSets.map((iconSet, index) => {
				const IconComponent = allIcons[iconSet];
				return (
					<div key={index} onClick={() => selectedSymbols(iconSet)} className={`border-2 cursor-pointer p-4 ${selectSymbols.includes(iconSet) ? 'border-2 border-blue-600 rounded-xl p-4' : 'border-transparent'}`}>
						<IconComponent size={70} />
					</div>
				);
			})}

		</div>
	)
}

export default IconsList