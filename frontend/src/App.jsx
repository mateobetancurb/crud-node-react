import { Header } from "./components/Header";
import { Form } from "./components/Form";
import { AppProvider } from "./context/AppProvider";

const App = () => {
	return (
		<>
			<AppProvider>
				<Header />
				<Form />
			</AppProvider>
		</>
	);
};

export { App };
