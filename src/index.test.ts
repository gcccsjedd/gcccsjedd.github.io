import { expect, test } from "vitest";

test("check if running", async () => {
	const url = await fetch("https://gcccsjedd.github.io");

	expect(url.status).toBe(200);
});
