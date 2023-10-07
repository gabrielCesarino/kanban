import { ModalContainer } from "./styles";
import { useEffect } from "react";
import { motion } from "framer-motion";

interface TaskModalProps{
	handleCloseModal: () => void;
	children: JSX.Element
}

export function Modal({ handleCloseModal, children}: TaskModalProps) {
	useEffect(() => {
		document.addEventListener("keyup", (e) => {
			if(e.key === "Escape"){
				handleCloseModal();
			}
		});

		return () => {
			document.removeEventListener("keyup", () => handleCloseModal);
		};
	}, []);


	return(
		<>
			<ModalContainer as={motion.div} initial={{ opacity: 0,}}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0}} onClick={handleCloseModal}>
				{children}
			</ModalContainer>
		</>
	);
}