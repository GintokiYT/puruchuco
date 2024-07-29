export default function SectionPromote() {
  return (
    <div className="w-full max-w-7xl m-auto py-12 px-4 md:px-6">
      <h2 className="font-medium text-2xl leading-7 text-center">PROMOVEMOS</h2>
      <div className="w-full max-w-5xl m-auto mt-8 mb-4">
        <video 
          className="w-full h-auto rounded-3xl"
          src="https://res.cloudinary.com/daechpa0d/video/upload/v1722217408/k4bddojcpdtg0oybihke.mp4"
          controls
        ></video>
        <div className="w-full md:px-16 lg:px-64 flex flex-col gap-1 mt-4">
          <p className="text-center font-medium text-2xl">Deporte</p>
          <p className="text-center font-normal text-sm">Lorem ipsum dolor sit amet consectetur. At egestas tellus consectetur neque egestas amet egestas amet.</p>
        </div>
      </div>
    </div>
  )
}