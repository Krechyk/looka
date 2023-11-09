import React, { createContext, useState } from 'react'

export const EditContext = createContext()

const Context = (props) => {

	const selectIndustry = ''
	const [likedLogo, setLikedLogo] = useState([])



	console.log(selectIndustry)

	const value = {

	}
	return <EditContext.Provider value={value}>{props.children}</EditContext.Provider>
}

export default Context