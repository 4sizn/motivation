import React from "react";
import type { NextPage } from "next";
import { BsPerson } from "react-icons/bs";
import { theme, css } from "twin.macro";
import Layout from "../components/Layout";
import CardItem from "../components/view/CardItem";
import useEmblaCarousel from "embla-carousel-react";

const Home: NextPage = () => {
	const ids = [0, 1, 2, 3];
	const [carouselRef] = useEmblaCarousel({
		axis: "x",
		skipSnaps: false,
	});

	return (
		<Layer>
			<Carousel ref={carouselRef}>
				{ids.map((id) => {
					return (
						<CarouselItem key={id}>
							<CardItem id={String(id)} />
						</CarouselItem>
					);
				})}
			</Carousel>
		</Layer>
	);
};

export default Home;

export function Layer({ children }: { children: React.ReactNode }) {
	const handleClick = React.useCallback(() => {
		//
		if (localStorage.theme === "light") {
			localStorage.theme = "dark";
		} else {
			localStorage.theme = "light";
		}
	}, []);
	return (
		<div
			tw="relative"
			css={css`
				height: 100vh;
			`}
		>
			{children}

			<div tw="fixed bottom-0 left-0 right-0 justify-center">
				<div tw="flex w-full flex-row-reverse">
					<button
						onClick={handleClick}
						tw="text-lg"
						css={css`
							background-color: ${theme`colors.transparent`};
						`}
					>
						<BsPerson />
					</button>
				</div>
			</div>
		</div>
	);
}

export const Carousel = React.forwardRef<
	HTMLDivElement,
	{ children: React.ReactNode }
>((props, ref) => {
	return (
		<div className="embla">
			<div className="embla__viewport" ref={ref}>
				<div className="embla__container">{props.children}</div>
			</div>
		</div>
	);
});

Carousel.displayName = "Carousel";

export const CarouselItem = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="embla__slide">
			<div className="embla__slide__inner">{children}</div>
		</div>
	);
};
