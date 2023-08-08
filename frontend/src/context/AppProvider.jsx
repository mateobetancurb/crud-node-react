import { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [quotesBook, setQuotesBook] = useState([]);
	return (
		<AppContext.Provider value={{ quotesBook, setQuotesBook }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
