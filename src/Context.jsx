import React, { createContext, useState } from 'react'


export const EditContext = createContext()
export const useEditContext = () => React.useContext(EditContext);

const Context = (props) => {

	const [selectIndustry, setSelectIndustry] = useState('')
	const [likedLogo, setLikedLogo] = useState([])
	const [likedColor, setLikedColor] = useState([])
	const [companyName, setCompanyName] = useState('')
	const [sloganName, setSloganName] = useState('')
	const [symbolTypes, setSymbolTypes] = useState([])

	const [selectSymbols, setSelectSymbols] = useState([])


	console.log(selectSymbols.length)

	const value = {
		selectIndustry, setSelectIndustry,
		likedLogo, setLikedLogo,
		likedColor, setLikedColor,
		companyName, setCompanyName,
		sloganName, setSloganName,
		symbolTypes, setSymbolTypes,
		selectSymbols, setSelectSymbols
	}
	return <EditContext.Provider value={value}>{props.children}</EditContext.Provider>
}

export default Context