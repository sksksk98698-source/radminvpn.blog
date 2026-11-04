import type { APIRoute } from "astro";
import { baseUrl } from "@/utils/i18n";

// cdn-cgi
// https://developers.cloudflare.com/fundamentals/reference/cdn-cgi-endpoint/#disallow-using-robotstxt
const siteUrl = import.meta.env.SITE || baseUrl;
const robotsTxt = `
User-agent: *
Allow: /
Disallow: /cdn-cgi/

Sitemap: ${new URL("sitemap-index.xml", siteUrl).href}
`.trim();

// eslint-disable-next-line import/prefer-default-export
export const GET: APIRoute = () =>
	new Response(robotsTxt, {
		headers: {
			"Content-Type": "text/plain; charset=utf-8",
		},
	});
