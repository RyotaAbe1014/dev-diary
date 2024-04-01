import { useAtom } from "jotai";
import { isShowGlobalSpinnerAtom } from "./globalSpinnerAtom";


export function useGlobalSpinner() {
	const [isLoading, setIsLoading] = useAtom(isShowGlobalSpinnerAtom);

	const startLoading = () => {
		setIsLoading(true);
	}

	const stopLoading = () => {
		setIsLoading(false);
	}

	return {
		isLoading,
		startLoading,
		stopLoading,
	};
}
