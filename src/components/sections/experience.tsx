import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from "@/components/ui/badge"

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-4">Experience</h2>
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Junior Software Developer</CardTitle>
                <CardDescription>The Digital Media Collective</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">2023 — Present</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Develop and maintain web applications using modern JavaScript frameworks.
              Collaborate with cross-functional teams to implement new features and improve existing ones.
              Participate in code reviews and contribute to the team&apos;s best practices.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Shopify</Badge>
              <Badge>JavaScript</Badge>
              <Badge>React</Badge>
              <Badge>Node.js</Badge>
              <Badge>Express</Badge>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <div className="flex justify-between items-start">
              <div>
                <CardTitle>Web Designer</CardTitle>
                <CardDescription>Immedia Summer Co.</CardDescription>
              </div>
              <div className="text-sm text-muted-foreground">Summer 2020</div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Design a desktop view site for a client using Figma and Adobe Photoshop.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge>Figma</Badge>
              <Badge>Photoshop</Badge>
              <Badge>HTML</Badge>
              <Badge>CSS</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}