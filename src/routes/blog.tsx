import { createFileRoute } from "@tanstack/react-router";
import { Newspaper } from "lucide-react";
import { Section, SectionHeading } from "@/components/site/Section";
import { blogPosts } from "@/data/blog";
import { pageHead } from "@/lib/seo";

export const Route = createFileRoute("/blog")({
  head: () =>
    pageHead({
      title: "Guides | Student Accommodation in Dankaur — BABA PG & HOSTEL",
      description:
        "Guides and updates from BABA PG & HOSTEL about student accommodation in Dankaur and Greater Noida.",
      path: "/blog",
    }),
  component: BlogPage,
});

function BlogPage() {
  return (
    <Section>
      <SectionHeading
        as="h1"
        eyebrow="Guides"
        title="Student Accommodation Guides"
        description="Practical articles for students looking for a PG or hostel in Dankaur and Greater Noida."
      />
      {blogPosts.length ? (
        <ul className="grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <li key={post.slug} className="rounded-2xl border border-border bg-card p-6 shadow-card">
              <p className="text-xs text-muted-foreground">{post.date}</p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mx-auto max-w-xl rounded-2xl border border-dashed border-border bg-surface p-10 text-center">
          <Newspaper className="mx-auto h-7 w-7 text-muted-foreground" aria-hidden="true" />
          <p className="mt-4 font-medium">Articles coming soon.</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Guides about choosing a PG in Dankaur and living near nearby universities will be
            published here.
          </p>
        </div>
      )}
    </Section>
  );
}
