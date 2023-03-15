import type { CollectionEntry } from "astro:content";
import "./Project.scss";
import GitHubSvg from "../../images/svg/github-mark-white.svg";

export function Project(props: { p: CollectionEntry<"projects"> }) {
	return (
		<div class="project-item">
			<img src={props.p.data.thumbnail} alt={props.p.data.title} />
			<div class="title">
				<a href={`/projects/${props.p.slug}`}>
					<h2>{props.p.data.title}</h2>
				</a>
				<a href={props.p.data.url} target="_blank" rel="noreferrer">
					<img src={GitHubSvg} alt="GitHub Logo" />
				</a>
			</div>
		</div>
	);
}
