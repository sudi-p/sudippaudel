function ExperienceCard({
    title,
    company,
    period,
    description,
    tech
  }: {
    title: string
    company: string
    period: string
    description: string[]
    tech: string
  }) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-semibold">{title}</h3>
              <p className="text-muted-foreground">{company}</p>
            </div>
            <span className="text-sm text-muted-foreground">{period}</span>
          </div>
          <ul className="list-disc pl-4 space-y-2 mb-4">
            {description.map((item, index) => (
              <li key={index} className="text-sm text-muted-foreground">{item}</li>
            ))}
          </ul>
          <p className="text-sm font-medium">Technologies: {tech}</p>
        </CardContent>
      </Card>
    )
  }