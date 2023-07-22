import { Box } from "@chakra-ui/react";

const Header = () => {
	return (
		<>
			<Box
				bg="#2D3748"
				w="98%"
				p={4}
				color="white"
				marginTop={3}
				mx={"auto"}
				fontWeight={"extrabold"}
				borderRadius={"3xl"}
				textAlign={"center"}
				letterSpacing={2}
			>
				No vuelvas a olvidar frases de tus libros favoritos
			</Box>
		</>
	);
};

export { Header };
