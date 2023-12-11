import DisplayPicture from '@/components/home/DisplayPicture';
import Social from '@/components/home/Social';
export default function Home() {

  return (
    <main className="p-10">
      <div className="flex gap-40 justify-center items-center">
        <div className='flex flex-col gap-10'>
          <header className="text-4xl font-bold">sudipPaudel</header>
          <div className="text-7xl">
            Software Engineer
          </div>
          <div className="text-3xl">
            Full-stack Developer | React Enthusiast
          </div>
          <Social />
        </div>
        <DisplayPicture />
      </div>
    </main>
  )
}
