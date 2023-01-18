import { ModalContainer } from './styles';
import { useEffect } from 'react';

interface TaskModalProps{
	handleCloseModal: () => void;
	children: JSX.Element
}

export function Modal({ handleCloseModal, children}: TaskModalProps) {
	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			if(e.key === 'Escape'){
				handleCloseModal();
			}
		});

		return () => {
			document.removeEventListener('keyup', () => handleCloseModal);
		};
	}, []);


	return(
		<>
			<ModalContainer onClick={handleCloseModal}>
				{children}
			</ModalContainer>
		</>
	);
}