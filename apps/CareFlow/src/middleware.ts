import { NextRequest, NextResponse } from 'next/server';

export async function middleware(request: NextRequest) {
  const AUTH_ROUTES: string[] = ['/sign-in'];
  const { pathname } = request.nextUrl;
  const isFileRequest = pathname.match(/\.\w+$/);

  // 정적 파일 요청 제외
  if (isFileRequest) {
    return NextResponse.next();
  }
  const accessTokenWard = request.cookies.get('accessTokenWard');

  // 로그인 전 권한 페이지 접근
  if (!accessTokenWard && !AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/sign-in', request.url));
  }

  // 로그인 후 로그인 페이지 접근
  if (accessTokenWard && AUTH_ROUTES.includes(pathname)) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}
