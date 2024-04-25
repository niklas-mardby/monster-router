import students from "../data/students.json";
import { Monster, FurLength } from "../type/types";

export const loadStudents = (): Monster[] => {
	// console.log(students);
	return students.map((monster) => {
		return { ...monster, fur_length: monster.fur_length as FurLength };
	});
};
