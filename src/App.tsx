
import Navbar from './layout/Navbar';
import Hero from './components/Hero';
import SEOHead from './components/SEOHead';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';

function App() {
  return (
    <>
      <SEOHead />
      <div className="bg-litty-dark min-h-screen text-gray-100">
        <Navbar />
        
        <main>
          <Hero />
        
        {/* Placeholder Sections */}
        <section id="services" className="py-20 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-white text-center mb-12">Our Services</h2>
            <div className="text-center text-gray-400">
              Pricing grid and service details coming soon.
            </div>
          </div>
        </section>

        <section id="gallery">
          <Gallery />
        </section>

        <section id="testimonials">
          <Reviews />
        </section>

        <section id="contact" className="py-20 bg-litty-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-white mb-8">Book Your Detail</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to get your car looking showroom new?
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
              <a 
                href="tel:+13219001858"
                className="flex items-center text-2xl font-bold text-litty-accent hover:text-white transition-colors"
              >
                <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                (321) 900-1858
              </a>
              <div className="text-gray-400">
                <p>2501 Addison Creek Dr</p>
                <p>Kissimmee, FL 34758</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Litty Mobile Detailing LLC. All rights reserved.
        </div>
      </footer>
    </div>
    </>
  );
}

export default App;
