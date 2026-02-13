
import { reviews } from '../data/reviews';

const Reviews = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white text-center mb-12">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-lg p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-litty-accent flex items-center justify-center text-white font-bold">
                    {review.author_name.charAt(0)}
                  </div>
                </div>
                <div className="ml-3">
                  <h3 className="text-sm font-medium text-white">{review.author_name}</h3>
                  <div className="flex text-yellow-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-300 text-sm mb-4">"{review.text}"</p>
              <div className="text-xs text-gray-500">
                {review.relative_time_description}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="https://www.google.com/maps/place/litty+mobile+detailing+llc/@28.2296054,-81.4771595,17z/data=!3m1!4b1!4m6!3m5!1s0x88dd8322d240da4d:0x9c946c9ec3ca891d!8m2!3d28.2296054!4d-81.4756284!16s%2Fg%2F11xms40s7_?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="text-litty-accent hover:text-litty-accent-hover font-medium"
          >
            Read all 10 reviews on Google Maps &rarr;
          </a>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
