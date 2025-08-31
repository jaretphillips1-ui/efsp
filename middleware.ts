import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  // Protect all /admin routes with a simple password check
  if (pathname.startsWith('/admin')) {
    const auth = req.headers.get('authorization') || '';
    const [, encoded] = auth.split(' ');
    const decoded = encoded ? Buffer.from(encoded, 'base64').toString() : '';
    const [user, pass] = decoded.split(':');

    const expectedUser = process.env.ADMIN_USER || 'admin';
    const expectedPass = process.env.ADMIN_PASSWORD || '';

    if (!(user === expectedUser && pass === expectedPass && expectedPass.length > 0)) {
      return new NextResponse('Unauthorized', {
        status: 401,
        headers: { 'WWW-Authenticate': 'Basic realm="EFSP Admin"' },
      });
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
