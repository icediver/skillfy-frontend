import Button from '../button/Button';
import { Portal } from '../portal/Portal';
import { useMount } from './useMount';

interface ILessonModal {
	opened: boolean;
	onClose: () => void;
	repeat: () => void;
	next: () => void;
}

export function LessonModal({ opened, onClose, repeat, next }: ILessonModal) {
	const { mounted } = useMount({ opened });

	if (!mounted) {
		return null;
	}
	return (
		<Portal>
			<div
				className="absolute bottom-0 left-0 right-0 top-0 z-50 cursor-pointer bg-black/80"
				onClick={onClose}
			>
				<div
					className="absolute left-1/2 top-1/3 flex h-1/4 w-1/4   flex-col items-center justify-between rounded bg-white p-10"
					onClick={(e) => e.stopPropagation()}
				>
					<p className="mt-6">
						Do you want to repeat one more or finish the lesson and move to the
						next lesson
					</p>
					<div className=" flex items-center justify-center gap-10">
						<Button className="w-44" onClick={repeat}>
							Repeat lesson
						</Button>

						<Button className="w-44" onClick={next}>
							Next lesson
						</Button>
					</div>
				</div>
			</div>
		</Portal>
	);
}
