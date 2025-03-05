import { tech } from "../../db/tech-data";
const TechContainer = () => {
	return (
		<ul
			aria-label="list of technologies i've worked with"
			role="list"
			className="flex flex-row flex-wrap gap-2 "
		>
			{tech.map((techName, index) => (
				<li className="bg-black p-2" key={index}>
					{techName}
				</li>
			))}
		</ul>
	);
};

export default TechContainer;
