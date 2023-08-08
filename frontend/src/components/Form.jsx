import { useState } from "react";
import { useGlobalState } from "../hooks/useGlobalState";

import { categories } from "../helpers";

const Form = () => {
	const { quotesBook, setQuotesBook } = useGlobalState([]);

	const initialFormData = {
		author: "",
		category: "",
		quoteBook: "",
	};

	const [formData, setFormData] = useState(initialFormData);

	const handleFieldChange = (fieldName, value) => {
		setFormData((prevData) => ({
			...prevData,
			[fieldName]: value,
		}));
	};

	const handleSaveQuote = () => {
		console.log("Cita guardada:", formData);
	};

	return (
		<>
			<div className="bg-[#2D3748] w-1/2 rounded-lg mx-3 p-5">
				<h2 className="text-white text-center font-bold mb-5">
					Comienza a guardar las frases de tu libro favorito
				</h2>
				<form>
					<input
						onChange={(e) => handleFieldChange("author", e.target.value)}
						value={formData.author}
						className="block px-4 py-1 mb-4 w-full rounded-lg"
						placeholder="Autor del libro"
					/>
					<select className="mb-4 w-full py-1 px-4 rounded-lg">
						<option>-- Selecciona una opción --</option>
						{categories.map((item) => (
							<option key={item.id} value={item.value}>
								{item.value}
							</option>
						))}
					</select>
					<textarea
						onChange={(e) => handleFieldChange("quoteBook", e.target.value)}
						value={formData.quoteBook}
						placeholder="Escribe aquí tu frase favorita"
						className="block w-full rounded-lg px-4 py-1 resize-none h-40 mb-5"
					/>
					<button
						onClick={handleSaveQuote}
						className="bg-[#1a202c] text-white w-full py-2 rounded-full shadow-lg hover:bg-[#1e232c] transition-colors"
					>
						Guardar frase
					</button>
				</form>
			</div>
		</>
	);
};

export { Form };
