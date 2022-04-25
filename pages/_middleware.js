import { NextResponse } from "next/server";

export async function middleware(req) {

    const { cookies } = req
    const token = cookies.token
    const role = cookies.role
    const { pathname } = req.nextUrl

    // console.log(token);

    if (pathname.includes('/adminDashboard') && role == 'admin' && token) {
        return NextResponse.next()
      } else if (pathname.includes('/client') && role == 'client_User' && token) {
        return NextResponse.next()
      } else if (pathname.includes('/client') && role == 'admin' && token) {
        return NextResponse.redirect(new URL('/adminDashboard/dashboard', req.url))
      } else if (
        pathname.includes('/adminDashboard/dashboard') &&
        role == 'client_User' &&
        token
      ) {
        return NextResponse.redirect(new URL('/client', req.url))
      } else if (
        pathname.includes('/adminDashboard') ||
        (pathname.includes('/client') && !token)
      ) {
        return NextResponse.redirect(new URL('/', req.url))
      } else if (pathname.includes('/') && role == 'client_User' && token) {
        return NextResponse.redirect(new URL('/client', req.url))
      } else if (pathname.includes('/') && role == 'admin' && token) {
        return NextResponse.redirect(new URL('/adminDashboard/dashboard', req.url))
      } else if (pathname.includes(`/${req.url}`)) {
        return NextResponse.redirect(new URL('/404', req.url))
      }
    
      return NextResponse.next()

}