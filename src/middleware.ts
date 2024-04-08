import { NextRequest, NextResponse, userAgent } from 'next/server';

export function middleware(request: NextRequest) {
  const userAgentValue = userAgent(request);

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-user-agent', JSON.stringify(userAgentValue));

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
