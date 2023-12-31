import { Toaster } from "react-hot-toast";
import { useGlobalState } from "../hooks/useGlobalState";

const QuoteList = () => {
	const { quotesBook, deleteQuote, getQuoteToUpdate } = useGlobalState();

	return (
		<>
			{quotesBook.length > 0 ? (
				<section className="bg-[#2D3748] rounded-lg mx-3 p-5 overflow-y-auto h-[450px]">
					<h2 className="text-white text-center font-bold px-3 rounded-full ">
						Aquí están tus frases guardadas
					</h2>
					<div className=" mt-10">
						{quotesBook.map((quote) => (
							<div
								key={quote.id}
								className="bg-[#1a202c] mb-3 rounded-lg w-[90%] mx-auto py-3 px-10 items-center text-white flex justify-between"
							>
								<div>
									<h3 className="font-bold mb-2">
										Autor: <span className="font-normal">{quote.author}</span>
									</h3>
									<p className="font-bold mb-2">
										Tu frase favorita:{" "}
										<span className="font-normal">{quote.quoteBook}</span>
									</p>
									<span className="bg-[#2D3748] rounded-full px-3 py-1 text-sm mb-2">
										{quote.category}
									</span>
								</div>
								<div className="flex flex-row gap-5">
									<button
										onClick={() => deleteQuote(quote.id)}
										className="hover:bg-gray-600 p-2 rounded-full transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
											/>
										</svg>
									</button>
									<button
										onClick={() => getQuoteToUpdate(quote)}
										className="hover:bg-gray-600 p-2 rounded-full transition-colors"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
											/>
										</svg>
									</button>
								</div>
							</div>
						))}
					</div>
					<Toaster position="top-center" />
				</section>
			) : (
				<p className="text-white font-bold flex items-center justify-center">
					Aún no has guardado tus frases favoritas
				</p>
			)}
		</>
	);
};

export { QuoteList };
