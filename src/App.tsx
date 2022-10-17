import ToxicityRecognizer from "./components/ToxicityRecognizer";

import "./App.css";

function App() {
	const onTextValidate = (predictions: any) => {
		console.log(predictions);
	};

	return (
		<div>
			<p>Simple Input example</p>
			<ToxicityRecognizer>
				<input autoFocus type="text" autoComplete="off" className="live-search-field" placeholder="Search here..." />
			</ToxicityRecognizer>
			<p>Nested Input example with custom message</p>
			<ToxicityRecognizer
				position="top-left"
				showMessage={true}
				showColorError={false}
				showLoadingIcon={false}
				customMessage={<div>Test</div>}
			>
				<div>
					<input type="area" autoComplete="off" className="live-search-field" placeholder="Search here..." />
				</div>
			</ToxicityRecognizer>
			<p>Double Nested Input example that gets text validation</p>
			<ToxicityRecognizer onTextValidate={onTextValidate}>
				<div>
					<div>
						<input type="text" autoComplete="off" className="live-search-field" placeholder="Search here..." />
					</div>
				</div>
			</ToxicityRecognizer>
		</div>
	);
}

export default App;
