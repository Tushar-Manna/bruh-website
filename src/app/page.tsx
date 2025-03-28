import Button  from "@/components/Button"

export default function Home() {
  return (
    <div>
      <div className="flex items-center h-screen p-20 place-content-between">
        <div>
          <div className="mb-8">
            <h1 className="devoration-black text-8xl">Bruhs</h1>
            <h2>The Group that doing but actully not doing anything.</h2>
          </div>
          <div className="flex space-x-4">
            <Button>Contact Us</Button>
            <Button>Read Articles</Button>
          </div>
        </div>
        <div>
          <img src="/av.png" alt=""/>
        </div>
      </div>
      <div className="flex flex-col space-y-2">
        <h1 className="text-4xl">Bruh</h1>
        <h2 className="text-3xl">Bruh</h2>
        <h3 className="text-2xl">Bruh</h3>
        <p className="text-xl">Bruh</p>
      </div>
    </div>
  )
}
