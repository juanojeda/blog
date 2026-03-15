import { getPosts } from "../../functions/getPosts";

const SITE_URL = "https://www.juanojeda.com";

export const dynamic = "force-static";

export async function GET() {
  const posts = await getPosts();

  const items = posts
    .map(({ slug, title, summary, socialPost, date }) => {
      const link = `${SITE_URL}/notes/${slug}`;
      const description = socialPost ?? summary ?? "";
      const pubDate = date ? new Date(date).toUTCString() : "";
      return `
    <item>
      <title><![CDATA[${title}]]></title>
      <description><![CDATA[${description}]]></description>
      <link>${link}</link>
      <guid>${link}</guid>
      <pubDate>${pubDate}</pubDate>
    </item>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Juan Ojeda</title>
    <description>Notes on software, product, and teams</description>
    <link>${SITE_URL}</link>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
