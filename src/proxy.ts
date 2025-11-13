import { getSessionCookie } from "better-auth/cookies";
import { NextRequest, NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export const proxy = async (request: NextRequest) => {
	const sessionCookie = getSessionCookie(request, {
		cookiePrefix: "authlrba",
	});

	if (!sessionCookie) {
		return NextResponse.redirect(new URL("/auth/login", request.url));
	}
};

export const config = {
	matcher: "/studio/:path*",
};
