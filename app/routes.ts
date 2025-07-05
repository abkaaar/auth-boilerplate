/**
 * this is an array of routes that are accesible to the public
 * they do not require authentication
 */
export const publicRoutes = [
    "/",
    "/auth/new-verification"
];



/**
 * this is an array of routes that are not accesible to the public
 * they require authentication
 * the routes will rediret logged in user to settings
 */

export const authRoutes = [
    "/auth/login",
    "/auth/register",
    "/auth/error",
    "/auth/reset",
    "/auth/new-password",
];



/**
 * this is prefix for api authentication route
 * routes that use this prefic are use for api authentication purposes
 * 
 */
export const apiAuthPrefix = "/api/auth";

/**
 * default redirect path after loggin in
 * @type{string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/settings";