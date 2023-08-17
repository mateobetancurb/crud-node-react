import { createContext, useState, useEffect } from "react";
import axios from "axios";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [quotesBook, setQuotesBook] = useState([]);

	const getDataFromBackendApi = async () => {
		try {
			const { data } = await axios.get(
				`${import.meta.env.VITE_BACKEND_URL}/get-quotes`
			);
			setQuotesBook(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		getDataFromBackendApi();
	}, []);

	return (
		<AppContext.Provider value={{ quotesBook, setQuotesBook }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
