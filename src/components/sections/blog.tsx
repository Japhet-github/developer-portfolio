import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-4">Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <Image
            src="https://g-plvg0udsd9l.vusercontent.net/placeholder.svg"
            alt="Blog post 1 cover"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>Blog Post 1</CardTitle>
            <CardDescription>Published on Date</CardDescription>
          </CardHeader>
          <CardContent>
            <p>A brief excerpt from your blog post...</p>
            <Button className="mt-4" variant="link">Read More</Button>
          </CardContent>
        </Card>
        <Card>
          <Image
            src="https://g-plvg0udsd9l.vusercontent.net/placeholder.svg"
            alt="Blog post 2 cover"
            width={400}
            height={200}
            className="w-full h-48 object-cover"
          />
          <CardHeader>
            <CardTitle>Blog Post 2</CardTitle>
            <CardDescription>Published on Date</CardDescription>
          </CardHeader>
          <CardContent>
            <p>A brief excerpt from your blog post...</p>
            <Button className="mt-4" variant="link">Read More</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}