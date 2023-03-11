import { createEffect, createMemo, createSignal } from "solid-js";

import "./Progress.scss";

export function Progress() {
	const [scrollPos, setScrollPos] = createSignal(0);
	const scrollPercent = createMemo(() => `${scrollPos()}%`);

	createEffect(() => {
		window.addEventListener("scroll", () => {
			const { scrollHeight, clientHeight, scrollTop } =
				document.documentElement;
			const winScroll = document.body.scrollTop || scrollTop;
			const winHeight = scrollHeight - clientHeight;

			const scrolled = (winScroll / winHeight) * 100;
			if (winHeight > 0) {
				setScrollPos(scrolled);
			} else {
				setScrollPos(0);
			}
		});
	});
	return (
		<div class="progress-bar" style={{ "--progress-width": scrollPercent() }} />
	);
}
