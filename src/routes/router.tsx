import { createBrowserRouter } from "react-router-dom";

import Start from "./Start";
import NotFound from "./NotFound";
import Monsters from "./Monsters";
import Monster from "./Monster";
import Root from "./Root";
import AddMonster from "./AddMonster";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
		errorElement: <NotFound />,
		children: [
			{
				path: "/monsters",
				element: <Monsters />,
				children: [
					{
						path: "/monsters/:monsterId",
						element: <Monster />,
					},
				],
			},
			{ path: "/add", element: <AddMonster /> },
			{ path: "/", element: <Start /> },
		],
	},
]);

export default router;
