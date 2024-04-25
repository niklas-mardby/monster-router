export type Monster = {
	first_name: string;
	last_name: string;
	description: string;
	science_skill: string;
	magic_ability: string;
	origin: string;
	num_horns: number;
	num_eyes: number;
	num_arms: number;
	num_wings: number;
	num_tentacles: number;
	num_mouths: number;
	num_tails: number;
	fur_length: FurLength;
	eye_color: string;
	skin_color: string;
};

export type FurLength = "long" | "none" | "short";
