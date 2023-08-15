import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { AppProvider } from "./context/AppProvider";
import { QuoteList } from "./components/QuoteList";
import { Footer } from "./components/Footer";

const App = () => {
	return (
		<>
			<AppProvider>
				<Header />
				<div className="grid grid-cols-[35%_minmax(65%,_1fr)_100px]">
					<Form />
					<QuoteList />
				</div>
				<Footer />
			</AppProvider>
		</>
	);
};

export { App };
