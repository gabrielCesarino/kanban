import { ModalContainer } from './styles';
import { useEffect } from 'react';

interface TaskModalProps{
	handleCloseTaskModal: () => void;
	children: JSX.Element
}

export function Modal({ handleCloseTaskModal, children}: TaskModalProps) {
	useEffect(() => {
		document.addEventListener('keyup', (e) => {
			if(e.key === 'Escape'){
				handleCloseTaskModal();
			}
		});

		return () => {
			document.removeEventListener('keyup', () => handleCloseTaskModal);
		};
	}, []);


	return(
		<>
			<ModalContainer onClick={handleCloseTaskModal}>
				{children}
			</ModalContainer>
		</>
	);
}