import React from "react";
import type { NextPage } from "next";
import { BsPaintBucket, BsGear } from "react-icons/bs";
import { theme, css } from "twin.macro";
import CardItem from "../components/view/CardItem";
import useEmblaCarousel from "embla-carousel-react";
import { updateDOM } from "../services/drakMode";
import PageWrap from "../components/PageWrap";
import { getQouteList } from "./api/quote";
import { useQuery } from "react-query";

const Home: NextPage = () => {
	const ids = [0, 1, 2, 3];
	const [carouselRef] = useEmblaCarousel({
		axis: "x",
		skipSnaps: false,
	});

	const quoteList = useQuery("quoteList", () => getQouteList());
	console.log("quoteList", quoteList);

	const handleClick = React.useCallback(() => {
		console.log("handle click");
		if (localStorage.theme === "light") {
			localStorage.theme = "dark";
		} else {
			localStorage.theme = "light";
		}
		updateDOM();
	}, []);

	return (
		<PageWrap>
			<Carousel ref={carouselRef}>
				{ids.map((id) => {
					return (
						<CarouselItem key={id}>
							<CardItem id={String(id)} />
						</CarouselItem>
					);
				})}
			</Carousel>
			<div tw="fixed bottom-0 left-0 right-0 justify-center">
				<div tw="flex w-full flex-row-reverse">
					<button
						onClick={() => {}}
						tw="text-lg dark:bg-white bg-transparent"
					>
						<BsGear />
					</button>
					<button
						onClick={handleClick}
						tw="text-lg dark:bg-white bg-transparent"
					>
						<BsPaintBucket />
					</button>
				</div>
			</div>
		</PageWrap>
	);
};

export default Home;

export function Layer({ children }: { children: React.ReactNode }) {
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
