import { SpinningCircles } from "react-loading-icons";
import { LoadingContainer } from "./styles";

export function Loading() {
	return (
		<LoadingContainer>
			<SpinningCircles />
		</LoadingContainer>
	);
}
