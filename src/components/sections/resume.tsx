import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export function Resume() {
  return (
    <section id="resume" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-4">Resume</h2>
      <Card>
        <CardHeader>
          <CardTitle>Japhet</CardTitle>
          <CardDescription>Junior Software Developer</CardDescription>
        </CardHeader>
        <CardContent>
          <h3 className="font-semibold mb-2">Skills</h3>
          <ul className="list-disc list-inside mb-4">
            <li>JavaScript (React, Node.js)</li>
            <li>TypeScript</li>
            <li>Python</li>
            <li>HTML/CSS</li>
            <li>Git</li>
            <li>SQL</li>
          </ul>
          <h3 className="font-semibold mb-2">Education</h3>
          <p>Bachelor of Computer Science in Application Development</p>
          <CardDescription>IIE Varsity College Durban North | 2019 - 2021</CardDescription>
        </CardContent>
      </Card>
    </section>
  )
}