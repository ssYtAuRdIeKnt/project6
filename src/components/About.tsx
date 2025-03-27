const About = () => {
    return (
        <section id="search" className="relative h-screen">
        <div className="absolute inset-0">
          <div className="w-full h-full bg-[url('/bgabout.jpeg')] bg-cover bg-center">
            <div className="w-full h-full bg-black/20"></div>
          </div>
        </div>
        <div className="relative z-10 px-4 md:px-12 lg:px-24 space-y-8 pt-26">
          <div className="p-8 bg-white rounded-xl shadow">
            <h2 className="text-4xl font-bold mb-6">Europe car rentals</h2>
            <p className="text-gray-600 text-base mb-4">now same drop off only*</p>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-5 mb-4">
              <input placeholder="enter your city" className="col-span-2 border p-4 rounded-lg text-lg" />
              <input placeholder="Mon 3/10" className="border p-4 rounded-lg text-lg" />
              <input placeholder="Mon 3/10" className="border p-4 rounded-lg text-lg" />
              <button className="bg-green-500 hover:bg-green-700 hover:cursor-pointer text-white font-semibold rounded-lg px-4 text-lg">Search</button>
            </div>
            <div className="flex justify-between items-center mt-6 border p-4 rounded-lg text-lg">
              <p className="font-medium">Search our partners’ car rent sites:</p>
              <div className="flex gap-4">
                <img src="sunnycars.png" className="h-7" alt="sunnycars" />
                <img src="europcar.png" className="h-7" alt="europcar" />
                <img src="megadrive.png" className="h-7" alt="megadrive" />
                <span>... and more</span>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-bold mb-8">Here is why travelers choose <span className="text-green-500">us</span>:</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="border rounded-xl p-6">
                <p className="font-bold text-xl mb-1">🔰 Save up to <span className="text-green-500">35%</span></p>
                <p className="text-gray-600 text-lg">Compare multiple travel sites with one search.</p>
              </div>
              <div className="border rounded-xl p-6">
                <p className="font-bold text-xl mb-1">🔑 <span className="text-green-500">Free</span> to use</p>
                <p className="text-gray-600 text-lg">There are no hidden charges or fees.</p>
              </div>
              <div className="border rounded-xl p-6">
                <p className="font-bold text-xl mb-1">🗂️ <span className="text-green-500">Filter</span> your deals</p>
                <p className="text-gray-600 text-lg">Filter by car type, brand and more.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;