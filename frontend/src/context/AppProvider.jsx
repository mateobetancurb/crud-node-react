import { createContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
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

	const deleteQuote = async (id) => {
		try {
			const url = import.meta.env.VITE_BACKEND_URL;
			await axios.delete(`${url}/delete-quote/${id}`);

			const filteredItems = quotesBook.filter((quote) => quote.id !== id);
			setQuotesBook(filteredItems);

			toast.success("La frase fue eliminada correctamente", {
				id: "clipboard",
				duration: 4500,
			});
		} catch (error) {
			console.error("Something went wrong:", error);
			toast.error("No se pudo eliminar la frase. Intenta nuevamente.", {
				id: "clipboard-error",
				duration: 4500,
			});
		}
	};

	useEffect(() => {
		getDataFromBackendApi();
	}, []);

	return (
		<AppContext.Provider value={{ quotesBook, setQuotesBook, deleteQuote }}>
			{children}
		</AppContext.Provider>
	);
};

export { AppProvider, AppContext };
