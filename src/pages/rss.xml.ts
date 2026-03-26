import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";

const parser = new MarkdownIt();

export const GET = (async ({ site }) => {
  const blog = await getCollection("blog");
  return rss({
    title: "DevBlog",
    description: "A blog about development and programming",
    xmlns: {
      media: "http://search.yahoo.com/mrss/",
    },
    site: site ?? "no site",
    items: blog.map(({ data, id, body }) => ({
      title: data.title,
      pubDate: data.date,
      description: data.description,
      link: `/posts/${id}/`,

      content: sanitizeHtml(parser.render(body ?? ""), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img"]),
      }),

      customData: `<media:content
    type="image/${data.image.format === "jpg" ? "jpeg" : "png"}"
    width="${data.image.width}"
    height="${data.image.height}"
    medium="image"
    url="${site + data.image.src}" />
`,
    })),
    customData: `<language>en-us</language>`,
    stylesheet: "/styles/rss.xsl",
  });
}) satisfies APIRoute;
