import NextAuth from "next-auth";
import authConfig from "./auth.config";

import { 
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/app/routes";
import { NextResponse } from "next/server";


const { auth } = NextAuth(authConfig)

export default auth((req) => {
    const  { nextUrl } = req;
    const isLoggedIn = !!req.auth;

    const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
    const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
    const isAuthRoute = authRoutes.includes(nextUrl.pathname);

    if (isApiAuthRoute){
      return NextResponse.next();
    }

    if (isAuthRoute){
      if(isLoggedIn){
        return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl))
      }
      return NextResponse.next();

    }

    if(!isLoggedIn && !isPublicRoute){
      let callBackUrl = nextUrl.pathname;
      if(nextUrl.search){
        callBackUrl += nextUrl.search;
      }
      const encodedCallbackUrl = encodeURIComponent(callBackUrl);

      return Response.redirect(new URL(
        `/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl));

    }
    return NextResponse.next();


  })
 
// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)','/','/(api|tprc)(.*)'],
}