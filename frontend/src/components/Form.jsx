import { Formik, Form, Field, ErrorMessage } from "formik";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import * as Yup from "yup";
import { useGlobalState } from "../hooks/useGlobalState";
import { categories } from "../helpers";

const QuoteSchema = Yup.object().shape({
	author: Yup.string()
		.min(5, "Mínimo 5 caracteres")
		.required("Escribe el nombre del autor"),
	category: Yup.string().required("Selecciona una categoría"),
	quoteBook: Yup.string()
		.min(10, "Mínimo 10 caracteres")
		.required("Escribe la frase que más te gustó"),
});

const MyForm = () => {
	const { quotesBook } = useGlobalState();

	const handleSaveQuote = async (values, { resetForm, setSubmitting }) => {
		try {
			const newQuote = {
				id: quotesBook.length + 1,
				...values,
			};
			const url = import.meta.env.VITE_BACKEND_URL;
			await axios.post(`${url}/create-quote`, newQuote);
			toast.success("¡Frase guardada!");
		} catch (error) {
			console.log(error);
		} finally {
			resetForm();
			setSubmitting(false);
		}
	};

	return (
		<div className="bg-[#2D3748] rounded-lg mx-3 py-8 px-5">
			<h2 className="text-white text-center font-bold mb-5">
				Comienza a guardar las frases de tu libro favorito
			</h2>
			<Formik
				initialValues={{
					author: "",
					category: "",
					quoteBook: "",
				}}
				validationSchema={QuoteSchema}
				onSubmit={handleSaveQuote}
			>
				{({ isValid, isSubmitting }) => (
					<Form>
						<ErrorMessage
							name="author"
							component="p"
							className="text-red-500 mb-1"
						/>
						<Field
							name="author"
							className="block px-4 py-2 mb-4 w-full rounded-lg"
							placeholder="Autor del libro"
						/>

						<ErrorMessage
							name="category"
							component="p"
							className="text-red-500 mb-1"
						/>
						<Field
							as="select"
							name="category"
							className="mb-4 w-full py-2 px-4 rounded-lg"
						>
							<option value="">-- Selecciona una opción --</option>
							{categories.map((item) => (
								<option key={item.id} value={item.value}>
									{item.value}
								</option>
							))}
						</Field>

						<ErrorMessage
							name="quoteBook"
							component="p"
							className="text-red-500 mb-1"
						/>
						<Field
							as="textarea"
							name="quoteBook"
							placeholder="Escribe aquí tu frase favorita"
							className="block w-full rounded-lg px-4 py-1 resize-none h-40 mb-5"
						/>

						<button
							type="submit"
							className={`bg-[#1a202c] text-white w-full py-2 rounded-full shadow-lg ${
								!isValid
									? "bg-[#1a202c] text-gray-700"
									: "hover:bg-[#1e232c] transition-colors"
							}`}
							disabled={isSubmitting || !isValid}
						>
							Guardar frase
						</button>
						<Toaster position="top-center" />
					</Form>
				)}
			</Formik>
		</div>
	);
};

export { MyForm as Form };
