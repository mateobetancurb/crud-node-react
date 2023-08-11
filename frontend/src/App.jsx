import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { AppProvider } from "./context/AppProvider";
import { QuoteList } from "./components/QuoteList";

const App = () => {
	return (
		<>
			<AppProvider>
				<Header />
				<div className="flex">
					<Form />
					<QuoteList />
				</div>
			</AppProvider>
		</>
	);
};

export { App };
