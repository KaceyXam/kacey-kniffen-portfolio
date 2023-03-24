import { createSignal } from "solid-js";

const [count, setCount] = createSignal<number>(1);

export function SolidCounter() {
	return <button onClick={() => setCount(count() + 1)}>{count()}</button>;
}
