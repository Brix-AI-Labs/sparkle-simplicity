const GroupCompanies = () => {
  const companies = [
    {
      name: "Mega Light",
      logo: "/lovable-uploads/f64ebcc9-1078-45ea-8699-d3c903346072.png"
    },
    {
      name: "Ashirwad Logistics",
      logo: "/lovable-uploads/cf965368-4d90-4acb-9d4f-53264d8ebecd.png"
    },
    {
      name: "Ashirwad Stores",
      logo: "/lovable-uploads/c5f0b70a-4a5d-4efd-86e3-ad8342fd2994.png"
    },
    {
      name: "Aman Agency",
      logo: "/lovable-uploads/be4ba8ee-4ecb-4673-b35d-5602a3aa3640.png"
    },
    {
      name: "Nitya Central",
      logo: "/lovable-uploads/b5eee124-e677-477e-bf6b-466b152bd2ab.png"
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
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GroupCompanies;