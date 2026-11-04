import type { APIRoute } from "astro";
import { baseUrl } from "@/utils/i18n";

// cdn-cgi
// https://developers.cloudflare.com/fundamentals/reference/cdn-cgi-endpoint/#disallow-using-robotstxt
const siteUrl = (import.meta.env.SITE || baseUrl).replace(/\/$/, "");
const robotsTxt = `
User-agent: *
Allow: /
Disallow: /cdn-cgi/

User-agent: Googlebot
Allow: /

User-agent: bingbot
Allow: /

User-agent: Baiduspider
Allow: /

User-agent: yisouspider
Allow: /

Sitemap: ${siteUrl}/sitemap-index.xml
Sitemap: ${siteUrl}/sitemap.xml
`.trim();

// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
	new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
