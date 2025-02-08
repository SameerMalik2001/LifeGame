"use client";

import CheckboxWithTitle from "@/components/component/ChechboxWithTitle";
import ModeToggle from "@/components/component/ModeToggle";
import { useState } from "react";

export interface checkboxValueType {
	id: number;
	value: boolean;
	title: string;
}
export default function Home() {
	const [checkboxValue, setCheckBoxValue] = useState<checkboxValueType[]>([
		{ id: 1, value: false, title: "beautiful" },
		{ id: 2, value: false, title: "dowry" },
		{ id: 3, value: false, title: "virgin" },
	]);

	return (
		<div className='bg-whtie min-h-screen w-screen justify-center items-center flex flex-col'>
			<div className='p-4 w-full h-[100px]'>
				<ModeToggle className="border-[2px] border-black dark:border-white float-end max-w-fit rounded-lg"/>
			</div>
			<div className="w-full flex-grow justify-center items-center flex">
				<div className='max-w-[400px] w-[400px] mx-5  h-[250px] border rounded-lg justify-center items-center flex flex-col gap-5'>
					{checkboxValue.map((item) => (
						<CheckboxWithTitle
							key={item.id}
							id={item.id}
							checkboxValue={item.value}
							setCheckBoxValue={setCheckBoxValue}
							title={item.title}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
