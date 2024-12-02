import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Project 1</CardTitle>
            <CardDescription>A brief description of Project 1</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about Project 1, technologies used, and your role.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Project 2</CardTitle>
            <CardDescription>A brief description of Project 2</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Details about Project 2, technologies used, and your role.</p>
            <Button className="mt-4" variant="outline">View Project</Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}