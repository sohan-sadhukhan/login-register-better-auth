import z from "zod";

const ServerEnvSchema = z.object({
	DATABASE_URL: z.url({
		error: "DATABASE_URL Not Found 😰! Please check env",
	}),
	BETTER_AUTH_SECRET: z.string({
		error: "BETTER_AUTH_SECRET Not Found 😰! Please check env",
	}),
	BETTER_AUTH_URL: z.url({
		error: "BETTER_AUTH_URL Not Found 😰! Please check env",
	}),
});

const ServerEnvVars = {
	DATABASE_URL: process.env.DATABASE_URL,
	BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET,
	BETTER_AUTH_URL: process.env.BETTER_AUTH_URL,
};

export const serverEnv = ServerEnvSchema.parse(ServerEnvVars);
