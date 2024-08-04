import type { IElementProps } from "@interfaces/element-props"

import type { CollectionEntry } from "astro:content"

import { cn } from "@lib/class-names"

import type { IFieldMap } from "@interfaces/field-map"
import { HeroPostSmall } from "./hero-post-small"
import { PreviewPost } from "./preview-post"

export interface IPostsProps extends IElementProps {
  posts: CollectionEntry<"posts">[]
  page: number
  pages: number
  showLatestPosts?: boolean
  sectionMap?: IFieldMap
  root?: string
}

export function HeroPosts({ posts }: IPostsProps) {
  const topPost = posts[0]
  const topPosts = posts.slice(1, 4)

  return (
    <section className="grid grid-cols-1 lg:grid-cols-10 gap-y-4 lg:gap-x-12">
      <PreviewPost post={topPost} className="col-span-6" />

      <ul className="flex w-full flex-col gap-y-4 col-span-4">
        {topPosts.map((post, index) => {
          return (
            <li key={index}>
              <HeroPostSmall
                post={post}
                className={cn([
                  index > 0,
                  "border-t border-slate-200  pt-6 dark:border-white/10",
                ])}
              />
            </li>
          )
        })}
      </ul>
    </section>
  )
}