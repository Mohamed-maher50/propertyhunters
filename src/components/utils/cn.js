import clsx from "clsx";
import { twMerge } from "tailwind-merge";
export default (...inputs) =>twMerge(clsx(inputs))