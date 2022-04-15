/*
import { NextPage } from "next";
import React, {
	forwardRef,
	Ref,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import PageWrap from "../components/PageWrap";
import tw, { theme, css, styled } from "twin.macro";
import { PageTitle } from "../components/page";
import Image from "next/image";
import { BsSearch, BsCheck } from "react-icons/bs";

const Post: NextPage = () => {
	const handleClickMixMode = () => {};

	return (
		<PageWrap>
			<PageTitle>게시하기</PageTitle>
			<SearchCategory />
			<button
				onClick={handleClickMixMode}
				tw="w-full font-bold bg-black text-white border-none dark:text-black dark:bg-white p-4 rounded-xl"
			>
				나만의 믹스 만들기
			</button>
		</PageWrap>
	);
};

export default Post;

const SearchCategory = () => {
	const searchBarRef = useRef<HTMLInputElement>(null);
	const [searchBarValue, setSearchBarValue] = useState("");
	const handleChangeSearchBar = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchBarValue(e.target.value);
	};
	const isSearchBarTyping = useMemo<boolean>(() => {
		return searchBarValue.length > 0;
	}, [searchBarValue]);

	return (
		<>
			<SearchBar ref={searchBarRef} onChange={handleChangeSearchBar} />
			{/* <ul tw="flex">
					{categoryList.map((item, idx) => (
						<CategoryItem {...item} key={`${item.name}-${idx}`} />
					))}
				</ul> }
			{!isSearchBarTyping && <RecommendCategory />}
		</>
	);
};

type SearchBarProps = {
	onChange: React.ChangeEventHandler<HTMLInputElement>;
};
const SearchBar = forwardRef<SearchBarProps, Ref<HTMLInputElement>>(
	(props, ref) => {
		const { onChange } = props;

		const handleClickResetBtn = () => {
			if (ref.current) {
				ref.current.value = "";
			}
		};

		return (
			<div tw="flex items-center">
				<div tw="bg-gray-300 rounded flex-grow p-1">
					<div tw="flex items-center">
						<BsSearch tw="text-sm" />
						<input
							ref={ref}
							tw="bg-transparent rounded border-none flex-grow"
							type={"search"}
							placeholder="검색"
							onChange={onChange}
						/>
					</div>
				</div>
				<button
					tw="bg-transparent text-black dark:text-white border-none flex-grow-0"
					onClick={handleClickResetBtn}
				>
					취소
				</button>
			</div>
		);
	}
);
SearchBar.displayName = "searchbar";

const RECOMMEND_CATEGORY_LIST: CategoryType[] = [
	"normal",
	"positive",
	"life",
	"love",
	"push",
	"depression",
	"fallinlove",
	"farewell",
	"hard",
];

const categoryList = RECOMMEND_CATEGORY_LIST.reduce((acc, o) => {
	let categoryItem = {};
	categoryItem.name = o;
	categoryItem.type = o;
	acc.push(categoryItem);
	return acc;
}, []);

const RecommendCategory = () => {
	const handleClick = (e) => {};

	return (
		<ul tw="grid gap-1.5 grid-cols-2 m-1.5">
			{categoryList.map((item) => (
				<CategoryItem {...item} key={item.type} onClick={handleClick} />
			))}
		</ul>
	);
};

type CategoryType =
	| "normal"
	| "positive"
	| "life"
	| "love"
	| "push"
	| "depression"
	| "fallinlove"
	| "farewell"
	| "hard"
	| "etc";
type CategoryProps = {
	type: CategoryType;
	name: string;
	checked?: boolean;
	onClick: () => void;
};
const CategoryItem = (props: CategoryProps) => {
	const { name, checked, onClick } = props;

	return (
		<button tw="p-0 rounded bg-gray-600 border-none h-14" onClick={onClick}>
			<div tw="relative w-full h-full">
				<div tw="absolute top-0">
					<span tw="p-1 inline-flex dark:text-white">{name}</span>
				</div>
				{checked && (
					<div tw="p-1 absolute bottom-0">
						<Checked />
					</div>
				)}
				<div tw="inline-flex absolute right-0 bottom-0">
					<Image src="/dog.jpg" width={50} height={50} alt="img" />
				</div>
			</div>
		</button>
	);
};

const Checked = () => {
	return (
		<span tw="pl-3 pr-3 rounded-2xl dark:bg-gray-300 dark:text-black">
			<BsCheck />
		</span>
	);
};
*/

export {};
