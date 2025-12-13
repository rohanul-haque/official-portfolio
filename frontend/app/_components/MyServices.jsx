import { my_services } from "../data/MyServices";
import SectionHeader from "./SectionHeader";

const MyServices = () => {
  return (
    <section className="bg-slate-100 py-20 dark:bg-[#001205]/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader title={"My Services"} />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {my_services.map((service) => {
            return (
              <div
                className="rounded-lg border border-green-500/20 bg-green-50 p-6 text-center backdrop-blur-sm transition-all transition-transform duration-500 hover:scale-105 dark:bg-transparent"
                key={service.id}
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h4 className="mb-2 text-xl font-semibold">{service.title}</h4>
                <p>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MyServices;
