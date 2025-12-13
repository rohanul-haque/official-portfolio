"use client";

import CountUp from "react-countup";

const Countup = ({ counter }) => {
  return (
    <div className="text-center">
      <CountUp
        className="text-2xl font-bold text-green-500 md:text-3xl lg:text-4xl"
        enableScrollSpy={false}
        start={0}
        end={counter.value}
        duration={2.75}
        suffix="+"
      />
      <p className="mt-3 font-medium text-gray-700 dark:text-gray-300">
        {counter.name}
      </p>
    </div>
  );
};

export default Countup;
