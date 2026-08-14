export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  body: string[];
};

/** Add real, factual articles here — the blog page shows an empty state while this is empty. */
export const blogPosts: BlogPost[] = [];
