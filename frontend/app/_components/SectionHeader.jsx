const SectionHeader = ({ title }) => {
  return (
    <div className="mb-10 flex flex-col items-center justify-center">
      <h2 className="mb-2 text-center text-4xl font-bold text-green-500">
        {" "}
        {title}
      </h2>
      <span className="mx-auto mt-2 mb-6 block h-1 w-20 rounded-full bg-blue-600 md:mx-0 dark:bg-white"></span>
    </div>
  );
};

export default SectionHeader;
