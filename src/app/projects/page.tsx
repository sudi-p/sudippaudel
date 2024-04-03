
export default function Home() {
  const projects = [{
    name: "Finprove",
    description: "System developed to revolutionize the candidate interview process in financial institutions. This innovative system automates the examination of candidates in various financial models, such as Basic LBO, Full LBO, and Advanced Stand Alone Analysis. It not only grades these exams but also efficiently compiles and submits candidate scores in CSV format, making it possible to assess the capabilities of a large number of candidates simultaneously.",
    startTime: new Date("12/12/2017"),
    endTime: new Date("12/12/2022"),
    roles: [{
      title: "Architectural Design",
      description: " I was responsible for designing the core product's architecture, focusing on technical robustness, scalability, and exceptional user experience."
    }],
    videos: ["https://drive.google.com/file/d/1YO4ztqKRhbHHqh_tx-jTCOk5YYnON6uI/view?usp=share_link"],
    screenshots: []
  }]
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {projects.map(project => {
        const { name, description, startTime, endTime, videos, screenshots} = project;
        return(
          <div className="flex">
          <div className="pr-5">
            {startTime.toString()} - {endTime.toString()}
          </div>
          <div className="border-l-2 border-gray-500 pl-5">
            <div className='text-2xl'>{name}</div>
            <div className="text-lg">{description}</div>
          </div>
          </div>
        )
      })}
    </main>
  )
}
