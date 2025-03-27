const Footer = () => {
    return (
      <footer className="bg-white py-12 px-4 md:px-12 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Company</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>About</li>
              <li>Careers</li>
              <li>Mobile</li>
              <li>Blog</li>
              <li>How we work</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Contact</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Help/FAQ</li>
              <li>Press</li>
              <li>Affiliates</li>
              <li>Partners</li>
              <li>Advertise with us</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">More</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-base md:text-lg">Get our app</h4>
            <div className="flex flex-col gap-4">
              <img src="appstore.png" alt="App Store" className="h-auto w-40" />
              <img src="googleplay.png" alt="Google Play" className="h-auto w-40" />
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;