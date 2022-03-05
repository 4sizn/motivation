import { updateDOM } from "../services/drakMode";
import { css } from "twin.macro";

export function PageWrap({ children }: { children: React.ReactNode }) {
	return (
		<div
			tw="relative dark:bg-black"
			css={css`
				height: 100vh;
			`}
		>
			{children}
		</div>
	);
}

export default PageWrap;
