import { counters } from "../data/counters";
import Countup from "./Countup";

const CounterSection = () => {
  return (
    <section className="bg-slate-100 py-10 dark:bg-[#001205]/50">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Counter Grid */}
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {counters.map((counter) => (
            <Countup counter={counter} key={counter.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
