'use client'

import { useState, useEffect } from 'react'
import axios from 'axios'
import useSWR from 'swr'
import { parseString } from 'xml2js'
import Image from 'next/image'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

const fetcher = (url: string) => axios.get(url).then((res) => res.data)

interface BlogPost {
  title: string
  link: string
  pubDate: string
  description: string
}

export default function SubstackBlogRow({ substackUrl = 'https://geckogen.substack.com' }: { substackUrl?: string }) {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([])

  const { data: rssData, error } = useSWR(`${substackUrl}/feed`, fetcher)

  useEffect(() => {
    if (rssData) {
      parseString(rssData, (err, result) => {
        if (err) {
          console.error('Error parsing RSS feed:', err)
          return
        }

        const items = result.rss.channel[0].item
        const posts: BlogPost[] = items.map((item: any) => ({
          title: item.title[0],
          link: item.link[0],
          pubDate: new Date(item.pubDate[0]).toLocaleDateString(),
          description: item.description[0].replace(/<[^>]*>/g, '').substring(0, 100) + '...'
        }))

        setBlogPosts(posts)
      })
    }
  }, [rssData])

  if (error) return <div>Failed to load blog posts</div>
  if (!blogPosts.length) return <div>Loading...</div>

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Latest Blog Posts</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {blogPosts.map((post, index) => (
            <Card key={index} className="w-[250px]">
              <CardHeader>
                <CardTitle className="truncate">{post.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{post.description}</p>
              </CardContent>
              <CardFooter>
                <p className="text-sm text-muted-foreground">{post.pubDate}</p>
              </CardFooter>
            </Card>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}