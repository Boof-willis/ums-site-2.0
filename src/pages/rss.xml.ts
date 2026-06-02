import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { getPublishedPosts } from "@/lib/blog";
import { BUSINESS } from "@/consts";

export async function GET(context: APIContext) {
  const posts = await getPublishedPosts();
  return rss({
    title: `${BUSINESS.name} — Moving Tips & Guides`,
    description:
      "Expert moving tips, packing guides, and relocation advice from Utah's Moving and Storage.",
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      categories: [post.data.category],
    })),
    customData: `<language>en-us</language>`,
  });
}
