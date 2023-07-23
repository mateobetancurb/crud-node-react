import {
	Box,
	Heading,
	FormControl,
	FormErrorMessage,
	Input,
	Textarea,
} from "@chakra-ui/react";

const Form = () => {
	return (
		<>
			<Box
				bg="#2D3748"
				w="40%"
				h="-moz-max-content"
				py={10}
				px={10}
				borderRadius={"3xl"}
				mt={5}
				ml="4"
			>
				<Heading as="h2" size="l" color="white" textAlign="center" mb={5}>
					Comienza a guardar las frases de tu libro favorito
				</Heading>
				<FormControl isRequired>
					<Input
						placeholder="Autor del libro"
						variant="filled"
						bg={"gray.300"}
						color={"white"}
					/>
				</FormControl>
				<FormControl isRequired>
					<Input
						placeholder="Categoría. Ej: romance, historia, ciencia ficción..."
						mt={5}
						variant="filled"
						bg={"gray.300"}
						color={"white"}
					/>
				</FormControl>
				<FormControl isRequired>
					<Textarea
						placeholder="Escribe aquí tu frase favorita"
						mt={5}
						variant="filled"
						bg={"gray.300"}
						color={"white"}
					/>
				</FormControl>
				<FormControl isRequired>
					<Box
						as="button"
						transition="all 0.2s cubic-bezier(.08,.52,.52,1)"
						borderRadius="10px"
						fontSize="15px"
						fontWeight="semibold"
						bg="#2D3748"
						borderColor="#ccd0d5"
						color="#fff"
						marginTop="20px"
						height="40px"
						width="100%"
						padding="5px"
						border="1px solid white"
						_hover={{ bg: "#ebedf0", color: "#2D3748" }}
						_active={{
							bg: "#dddfe2",
							transform: "scale(0.98)",
							borderColor: "#bec3c9",
						}}
						_focus={{
							boxShadow:
								"0 0 1px 2px rgba(88, 144, 255, .75), 0 1px 1px rgba(0, 0, 0, .15)",
						}}
						_disabled={{
							bg: "#dddfe2",
							color: "#2D3748",
							cursor: "not-allowed",
						}}
					>
						Guardar frase
					</Box>
				</FormControl>
			</Box>
		</>
	);
};

export { Form };
