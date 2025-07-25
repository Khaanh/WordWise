import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import AppLayout from "./pages/AppLayout";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import CityList from "./components/CityList";
import CountryList from "./components/CountryList";
import City from "./components/City";
import Form from "./components/Form";
import { CitiesProvider } from "./contexts/CitiesContext";

export default function App() {
	return (
		<CitiesProvider>
			<BrowserRouter>
				<Routes>
					<Route index element={<Homepage />} />
					<Route path="product" element={<Product />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="login" element={<Login />} />
					<Route path="app" element={<AppLayout />}>
						{/* Route index - default route */}
						<Route index element={<Navigate replace to={"cities"} />} />
						<Route path="cities/:id" element={<City />} />
						<Route path="cities" element={<CityList />} />
						<Route path="countries" element={<CountryList />} />
						<Route path="form" element={<Form />} />
					</Route>
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</CitiesProvider>
	);
}
