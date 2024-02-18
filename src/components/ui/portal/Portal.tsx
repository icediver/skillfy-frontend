import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

export function Portal({ children }: { children: React.ReactNode }) {
	const [container] = useState(() => document.createElement('div'));

	useEffect(() => {
		document.body.appendChild(container);
		return () => {
			document.body.removeChild(container);
		};
	}, []); //eslint-disable-line react-hooks/exhaustive-deps

	return ReactDOM.createPortal(children, container);
}
