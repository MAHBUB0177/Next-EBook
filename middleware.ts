import { NextRequest, NextResponse } from 'next/server';
// import { isAuthenticated } from './auth';

export default function middleware(req:NextRequest ) {
    let isAuthenticated = false;
  const path = req.nextUrl.pathname;

  const protectedRoutes = ["/about", ];

  if (path.startsWith("/_next")) {
    return NextResponse.next();
  }

  if (!isAuthenticated && protectedRoutes.includes(path)) {
    const httpsRedirectUrl = `http://localhost:3000/`;
    return NextResponse.redirect(httpsRedirectUrl);
  }

  return NextResponse.next();
}