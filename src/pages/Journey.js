import React from "react";

const services = [
  {
    title: "Residential Cleaning",
    description: "Experience a clean and organized home with our premium residential cleaning services.",
  },
  {
    title: "Commercial Cleaning",
    description: "Keep your business premises immaculate and inviting for your clients.",
  },
  {
    title: "Deep Cleaning",
    description: "Our deep cleaning services ensure every nook and cranny is spotless.",
  },
  {
    title: "Move-In/Move-Out Cleaning",
    description: "Ensure a fresh start in your new space with our move-in/move-out cleaning.",
  },
];

const Journey = () => {
  return (
    <div className="max-w-7xl mx-auto p-10 text-center bg-black text-white min-h-screen">
      <h1 className="font-['Alata_Regular'] text-5xl font-bold mb-10 text-primary">
        Black Feather Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((service, index) => (
          <div 
            key={index}
            className="bg-white/10 rounded-lg p-5 shadow-lg min-h-[200px] backdrop-blur-lg 
                     transform transition-all duration-500 hover:scale-105"
          >
            <h2 className="text-2xl font-semibold mb-3">{service.title}</h2>
            <p className="text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
