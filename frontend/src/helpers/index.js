const categories = [
	{ id: 0, value: "Ficción" },
	{ id: 1, value: "No ficción" },
	{ id: 2, value: "Misterio" },
	{ id: 3, value: "Romance" },
	{ id: 4, value: "Ciencia ficción" },
	{ id: 5, value: "Fantasía" },
	{ id: 6, value: "Aventura" },
	{ id: 7, value: "Histórica" },
	{ id: 8, value: "Autoayuda" },
	{ id: 9, value: "Biografía" },
	{ id: 10, value: "Negocios" },
	{ id: 11, value: "Cómics" },
	{ id: 12, value: "Economía" },
	{ id: 13, value: "Política" },
];

const generateRandomId = () => {
	const random = Math.random().toString(36).substring(2);
	const date = Date.now().toString(36);
	return random + date;
};

export { categories, generateRandomId };
