export default function CTA() {
  return (
    <div className="bg-black h-1/2 text-white p-8 rounded-lg shadow-lg max-w-md mx-auto absolute top-1/2 -translate-y-1/2">
      <h2 className="text-3xl font-bold mb-4">Let's Create Something Amazing</h2>
      <p className="mb-6 text-gray-300">
        With cutting-edge technologies and creative solutions, we can build the perfect web experience for your needs.
      </p>
      <div className="space-y-4">
        <button className="w-full bg-red-500 text-white hover:bg-red-700 rounded-lg py-2 transition-colors">
          View My Projects
        </button>
        <button className="w-full bg-transparent border border-red-500 hover:bg-red-500 hover:text-white rounded-lg py-2 transition-colors">
          Contact Me
        </button>
      </div>
    </div>
  )
}

