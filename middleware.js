import { sha256 } from './js/sha256.js'; // 需新建或引入SHA-256实现

// Vercel Middleware to inject environment variables
export default async function middleware(request) {
  // Get the URL from the request
  const url = new URL(request.url);

  // Only process HTML pages
  const isHtmlPage = url.pathname.endsWith('.html') || url.pathname.endsWith('/');
  if (!isHtmlPage) {
    return; // Let the request pass through unchanged
  }

  // Fetch the original response
  const response = await fetch(request);

  // Check if it's an HTML response
  const contentType = response.headers.get('content-type') || '';
  if (!contentType.includes('text/html')) {
    return response; // Return the original response if not HTML
  }

  // Get the HTML content
  const originalHtml = await response.text();

  // 移除密码处理，直接返回原始HTML
  let modifiedHtml = originalHtml;

  // 修复Response构造
  return new Response(modifiedHtml, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers
  });
}

export const config = {
  matcher: ['/', '/((?!api|_next/static|_vercel|favicon.ico).*)'],
};