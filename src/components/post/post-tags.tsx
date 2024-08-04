import type { IElementProps } from "@interfaces/element-props"

import type { CollectionEntry } from "astro:content"
import { PostTagLink } from "./post-tag-link"

export interface IPostProps extends IElementProps {
  post: CollectionEntry<"posts">
}

export function PostTags({ post, className }: IPostProps) {
  return (
    <ul className="flex flex-row flex-wrap gap-2 text-xs">
      {post.data.tags
        .sort()
        .map((tag: string) => tag.trim())
        .map((tag: string, index: number) => {
          return (
            <li key={index}>
              <PostTagLink tag={tag} />
            </li>
          )
        })}
    </ul>
  )
}
