import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import banner from '../assets/movie-night-animate.svg'

export const Features = () => {
  const [openFeatures, setOpenFeatures] = useState([]);

  const features = [
    { id: 1, title: "Latest Movies", description: "MovaFlix App standout feature is its extensive movie library, which includes thousands of films from various film industries worldwide, such as Hollywood, Bollywood, and South movies. The app is frequently updated to keep up with the latest releases in these industries." },
    { id: 2, title: "Trending Web Series", description: "One of MovaFlix's most attractive features is its integration with multiple OTT platforms, offering users direct access to popular services such as Netflix, Amazon Prime and Voot, among others. This feature can save users a significant amount of money, as MovaFlix provides similar benefits and privileges to those offered by the exclusive memberships of these platforms." },
    { id: 3, title: "Live TV", description: "MovaFlix offers a collection of over 20+ live TV channels, primarily targeting Indian audiences. Regardless of your location, you can download the MovaFlix app and begin enjoying your favorite programs on various broadcasters." },
    {id:4,title:"TV Shows",description:"MovaFlix offers a wide collection of tv shows including The Great Indian Kapil Show, SharkTank India and much more entertaining shows."}
  ];

  const toggleFeature = (id) => {
    setOpenFeatures((prev) =>
      prev.includes(id) ? prev.filter((featureId) => featureId !== id) : [...prev, id]
    );
  };

  return (
    <section id="Features" className="py-12 lm:p-5">
      <div className="max-w-[92%] mx-auto px-6 justify-between flex vtb:flex-col md:flex-row items-center gap-10">
        {/* Left Side Image */}
        <img src={banner} alt="MovaFlix App" className="w-[38%] vtb:w-full h-auto rounded-2xl shadow-lg" />
        
        {/* Right Side Features */}
        <div className="w-[45%] vtb:w-full vtb:mt-8 md:w-1/2">
          <h2 className="text-4xl mb-6  text-center bg-gradient-to-r font-semibold from-[red] to-[black] inline-block text-transparent bg-clip-text md:text-left">Experience Entertainment Like Never Before</h2>
          <div className="space-y-4 flex flex-col gap-3">
            {features.map((feature) => (
              <div key={feature.id} className="p-4 border-[1.4px] border-zinc-200 rounded-lg shadow-lg">
                <div
                  className="flex justify-between items-center cursor-pointer"
                  onClick={() => toggleFeature(feature.id)}
                >
                  <h3 className="text-xl font-semibold hover:text-red-500 transition-colors duration-500 ease-in-out">
                    {feature.title}
                  </h3>
                  {openFeatures.includes(feature.id) ? <FaChevronUp /> : <FaChevronDown />}
                </div>
                {openFeatures.includes(feature.id) && (
                  <p className="text-gray-400 mt-2">{feature.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
