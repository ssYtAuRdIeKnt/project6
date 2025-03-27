const Locations = () => {
    return (
      <section id="locations" className="pt-8 pb-20 px-4 md:px-12 lg:px-24 bg-gray-100">
        <h2 className="text-4xl font-bold mb-8">Available car rental locations</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/d/u/0/embed?mid=1EpOZvxjsCMQ0W0WN6hRLwGpckvjD4vQ&ehbc=2E312F"
            width="100%"
            height="500"
            className="w-full h-[500px] border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Car Rental Locations"
          ></iframe>
                      
          </div>
      </section>
    );
  };
  
  export default Locations;
  