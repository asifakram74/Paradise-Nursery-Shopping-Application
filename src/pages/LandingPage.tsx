interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  return (
    <div className="min-h-screen relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(/images.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center px-8 md:px-16 lg:px-20">
        <div className=" mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white text-center pr-20">
            <h3 className="text-3xl md:text-6xl font-samibold mb-4">
              Welcome To
              <br />
              Paradise Nursery
            </h3>
            <p className="text-xl mb-8 text-gray-200">
              Where Green Meets Serenity
            </p>
            <button
              onClick={onGetStarted}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Get Started
            </button>
          </div>

          <div className="text-white space-y-6">
            <div>
              <p className="text-center  mb-4">
                Welcome to Paradise Nursery, where green meets serenity!
              </p>
              <p className="text-gray-200 leading-relaxed">
                At Paradise Nursery, we are passionate about bringing nature closer to you. Our mission
                is to provide a wide range of high-quality plants that not only enhance the beauty of your
                surroundings but also contribute to a healthier and more sustainable lifestyle. From air-purifying plants to aromatic fragrant ones, we have something for every plant enthusiast.
              </p>
            </div>

            <p className="text-gray-200 leading-relaxed">
              Our team of experts is dedicated to ensuring that each plant meets our strict standards of
              quality and care. Whether you're a seasoned gardener or just starting your green journey,
              we're here to support you every step of the way. Feel free to explore our collection, ask
              questions, and let us help you find the perfect plant for your home or office.
            </p>

            <p className="text-gray-200 leading-relaxed">
              Join us in our mission to create a greener, healthier world. Visit Paradise Nursery today
              and experience the beauty of nature right at your doorstep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
