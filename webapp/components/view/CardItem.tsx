import Avatar from "../Avatar";
import dummy from "../../dummyData.json";
import { theme, css } from "twin.macro";
import { BsShare, BsSuitHeart, BsPerson } from "react-icons/bs";

export default function CardItem({ id }: { id: string }) {
	//@ts-ignore
	const { quote, writer } = dummy[id];

	return (
		<div
			css={css`
				height: 100vh;
			`}
		>
			<div
				tw="flex flex-col w-full h-full justify-center"
				css={css`
					position: relative;
				`}
			>
				<div tw="h-1/2">
					<div tw="text-center">
						<Avatar src="/dog.jpg" size={30} />
					</div>
					<div tw="pt-6">
						<p tw="text-6xl text-center font-medium dark:text-white">
							{quote}
						</p>
						<div tw="text-center">
							<span tw="dark:text-white">{writer}</span>
						</div>
					</div>

					<div
						css={css`
							position: absolute;
							bottom: 0;
							left: 0;
							right: 0;
						`}
					>
						<div tw="flex w-full justify-center">
							<button
								tw="text-4xl p-4 text-black dark:text-white"
								className="ripple"
								css={css`
									border: none;
									background-color: ${theme`colors.transparent`};
								`}
							>
								<BsShare />
							</button>
							<button
								tw="text-4xl p-4 text-black dark:text-white"
								className="ripple"
								css={css`
									border: none;
									background-color: ${theme`colors.transparent`};
								`}
							>
								<BsSuitHeart />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
