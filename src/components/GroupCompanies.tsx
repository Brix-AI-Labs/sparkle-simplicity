const GroupCompanies = () => {
  const companies = [
    {
      name: "Mega Light",
      logo: "/lovable-uploads/6f9633c9-831f-4b82-bdbd-21bc1e1452a6.png"
    },
    {
      name: "Ashirwad Logistics",
      logo: "/lovable-uploads/f6974c66-9ea2-4268-aad5-edbab9171b48.png"
    },
    {
      name: "Ashirwad Stores",
      logo: "/lovable-uploads/d7143b6b-a62b-4f51-bc77-3bf2272b82c8.png"
    },
    {
      name: "Nirmala Chemicals",
      logo: "/lovable-uploads/6ef7d9cb-8186-4651-b8f9-875eea0dd64e.png"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-accent">
          Group of Companies
        </h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {companies.map((company, index) => (
            <div 
              key={index}
              className="w-48 h-48 p-4 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex items-center justify-center"
            >
              <img 
                src={company.logo} 
                alt={`${company.name} logo`}
                className="max-w-full max-h-full object-contain"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;