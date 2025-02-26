import React from "react";
import { projectsWithoutImages } from "../constants/index.js";

const ProjectsWithoutImagesList = ({ selectedCategory }) => {
  const normalizedSelectedCategory = selectedCategory
    ? selectedCategory
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
    : "";

  const filteredCategories = selectedCategory
    ? projectsWithoutImages.filter(
        (item) =>
          item.category
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "") === normalizedSelectedCategory
      )
    : projectsWithoutImages;

  return (
    <section className="mx-5 grid grid-cols-12 my-8">
      <div className="col-span-12">
        <h2 className="text-2xl font-bold mb-4">Otros proyectos:</h2>
        {filteredCategories.map((categoryObj, idx) => (
          <div key={idx} className="mb-6">
            <ul className="list-disc pl-5">
              {categoryObj.courses.map((course, i) => (
                <li key={i} className="text-lg">
                  {course.title}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsWithoutImagesList;
