"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import { fetchProjectData } from "../utils/fetchProjectData";
import SectionHeader from "./SectionHeader";

const filters = [
  "All",
  "Html & Css",
  "Javascript",
  "Full Stack",
  "Frontend",
  "Backend",
];

const MyProject = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projectList, setProjectList] = useState([]);

  const filteredProjects =
    activeFilter === "All"
      ? projectList
      : projectList.filter((project) =>
          project.tags
            ?.map((t) => t.toLowerCase())
            .includes(activeFilter.toLowerCase()),
        );

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const projects = await fetchProjectData();
        setProjectList(projects);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <section className="bg-slate-100 py-20 dark:bg-[#001205]/50">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeader title={"My Latest Projects"} />

        {/* FILTER BUTTONS */}
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`cursor-pointer rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-green-500 text-white"
                  : "bg-white text-blue-500 hover:bg-blue-100"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="lg:grid-cols- grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filteredProjects
              .slice()
              .reverse()
              .map(
                ({
                  _id,
                  title,
                  description,
                  tags = [],
                  image,
                  sourceCode,
                  liveLink,
                }) => (
                  <motion.div
                    key={_id}
                    layout
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="ransition-all rounded-lg border border-green-500/20 bg-green-50 p-6 backdrop-blur-sm transition-transform duration-500 hover:scale-105 dark:bg-transparent"
                  >
                    {image && (
                      <img
                        src={image || ""}
                        alt={title}
                        className="mb-4 aspect-video w-full rounded-lg object-cover"
                      />
                    )}

                    <h2 className="mb-2 text-xl font-bold">
                      {title.slice(0, 50)}....
                    </h2>

                    <p className="mb-4">{description.slice(0, 80)}....</p>

                    <div className="mb-4 flex flex-wrap gap-2">
                      {tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded bg-blue-100 px-2 py-1 text-xs text-blue-600"
                        >
                          {tag}
                        </span>
                      ))}

                      {tags.length > 4 && (
                        <span className="rounded-full bg-blue-200 px-2 py-1 text-xs text-blue-800">
                          +{tags.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-col gap-2 sm:flex-row">
                      {sourceCode && (
                        <Button
                          asChild
                          className="bg-green-500 text-white hover:bg-green-600"
                        >
                          <a
                            href={
                              sourceCode.startsWith("http")
                                ? sourceCode
                                : `https://${sourceCode}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Source Code
                          </a>
                        </Button>
                      )}

                      {liveLink && (
                        <Button asChild variant="outline">
                          <a
                            href={
                              liveLink.startsWith("http")
                                ? liveLink
                                : `https://${liveLink}`
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Live Link
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ),
              )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default MyProject;
