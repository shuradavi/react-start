import React from 'react';
import cl from './MyModal.module.css'

const MyModal = ({ children, visible, setVisible }) => {
	
	const rootClasses = [cl.myModal]
	if (visible) {
		rootClasses.push(cl.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
			<div className={cl.myModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	);
};

// Избавляемся от неявного закрытия модального окна при клике в поле формы
// предотвращаем всплытие события  с помощью (e) => e.stopPropagation() 
export default MyModal;