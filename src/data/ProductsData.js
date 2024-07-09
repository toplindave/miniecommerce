import { ReactComponent as Burger } from "../data/productDataSvg/burger.svg";
import { ReactComponent as MeatPie } from "../data/productDataSvg/meatpie.svg";
import { ReactComponent as Shawarma } from "../data/productDataSvg/shawarma.svg";
import { ReactComponent as Cake } from "../data/productDataSvg/slicecake.svg";
import { ReactComponent as Donuts } from "../data/productDataSvg/donuts.svg";
import { ReactComponent as Chicken } from "../data/productDataSvg/chicken.svg";
import { ReactComponent as Pancakes } from "../data/productDataSvg/pancake.svg";
import { ReactComponent as Fries } from "../data/productDataSvg/fries.svg";
import { ReactComponent as FullChicken } from "../data/productDataSvg/fullchicken.svg";
import { ReactComponent as Cookies } from "../data/productDataSvg/cookies.svg";
import { ReactComponent as Biscuit } from "../data/productDataSvg/biscuit.svg";
import { ReactComponent as HotDog } from "../data/productDataSvg/hotdog.svg";

const productDatas = [
	{
		id: 1,
		title: "Burger",
		price: 35,
		img: <Burger />,
		quatity: 1,
	},
	{
		id: 2,
		title: "Meat Pie",
		price: 35,
		img: <MeatPie />,
		quatity: 1,
	},
	{
		id: 3,
		title: "Shawarma",
		price: 30,
		img: <Shawarma />,
		quatity: 1,
	},
	{
		id: 4,
		title: "Slice cake",
		price: 20,
		img: <Cake />,
		quatity: 1,
	},
	{
		id: 5,
		title: "Donuts",
		price: 35,
		img: <Donuts />,
		quatity: 1,
	},
	{
		id: 6,
		title: "Fried Chicken",
		price: 45,
		img: <Chicken />,
		quatity: 1,
	},
	{
		id: 7,
		title: "Pancakes",
		price: 40,
		img: <Pancakes />,
		quatity: 1,
	},
	{
		id: 8,
		title: "Fries",
		price: 25,
		img: <Fries />,
		quatity: 1,
	},
	{
		id: 9,
		title: "Full Chicken",
		price: 49,
		img: <FullChicken />,
		quatity: 1,
	},
	{
		id: 10,
		title: "Cookies",
		price: 35,
		img: <Cookies />,
		quatity: 1,
	},
	{
		id: 11,
		title: "Biscuit",
		price: 15,
		img: <Biscuit />,
		quatity: 1,
	},
	{
		id: 12,
		title: "Hot-dog",
		price: 25,
		img: <HotDog />,
		quatity: 1,
	},
];

export default productDatas;
