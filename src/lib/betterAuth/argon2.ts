import { hash, verify } from "@node-rs/argon2";
import { serverEnv } from "../env/serverEnv";

type verifyPasswordType = {
	hash: string;
	password: string;
};

export const hashPasswordFunction = async (password: string) => {
	const hashedPasword = await hash(password, {
		secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
	});

	return hashedPasword;
};
export const verifyPasswordFunction = async (data: verifyPasswordType) => {
	const { hash, password } = data;

	const verifiedPassword = verify(hash, password, {
		secret: Buffer.from(serverEnv.BETTER_AUTH_SECRET),
	});

	return verifiedPassword;
};
