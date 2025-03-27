const Catalog = () => {
    return (
      <section id="deals" className=" py-20 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-4xl font-bold mb-12">Cheap car rentals in Europe</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Nissan GT-R",
              price: "€96",
              img: "gtr.jpg",
              company: "europcar",
              people: 2,
              bags: 1,
              feedbacks: 12
            },
            {
              name: "Mitsubishi Lancer Evo9",
              price: "€84",
              img: "evo9.jpg",
              company: "europcar",
              people: 5,
              bags: 2,
              feedbacks: 52
            },
            {
              name: "Honda Civic",
              price: "€68",
              img: "civic.jpg",
              company: "sunnycars",
              people: 5,
              bags: 2,
              feedbacks: 75
            },
            {
              name: "Toyota Supra MK4",
              price: "€88",
              img: "supra.png",
              company: "sunnycars",
              people: 2,
              bags: 1,
              feedbacks: 26
            }
          ].map((car, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <img src={car.img} alt={car.name} className="w-full h-40 object-contain mb-4" />
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-bold text-lg">{car.name}</h3>
                <img src={`${car.company}.png`} className="h-6" alt={car.company} />
              </div>
              <p className="text-gray-500 text-sm mb-2">or similar SPORT</p>
              <div className="flex gap-4 text-sm text-gray-700 mb-2">
                <span>💬 {car.feedbacks}</span>
                <span>🧍 {car.people}</span>
                <span>🧳 {car.bags}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold">{car.price} <span className="text-sm text-gray-500">/day</span></p>
                <button className="bg-green-500 hover:bg-green-700 hover:cursor-pointer text-white rounded px-4 py-1 text-sm">View deal</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Catalog;  