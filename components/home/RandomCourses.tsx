import React from "react";
import Image from "next/image";

interface Courses {
  title: string;
  description: string;
  img: string;
}
const RandomCourses: React.FC = () => {
  const courses: Courses[] = [
    {
      title: "course one",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet. Undeodio libero ut iusto iure consequuntur provident minima",
      img: "url",
    },
    {
      title: "course two",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet. Undeodio libero ut iusto iure consequuntur provident minima",
      img: "url",
    },
    {
      title: "course three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet. Undeodio libero ut iusto iure consequuntur provident minima",
      img: "url",
    },
    {
      title: "course three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet. Undeodio libero ut iusto iure consequuntur provident minima",
      img: "url",
    },
    {
      title: "course three",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit sit amet. Undeodio libero ut iusto iure consequuntur provident minima",
      img: "url",
    },
  ];
  return (
    <div className="p-5">
      <h2 className="font-bold text-3xl text-violet-900 underline text-center mb-3">
        Courses
      </h2>

      {/* course cards */}
      <div className="flex gap-3">
        {courses.map((course) => (
          <div className="w-[250px] h-[260px] border-2 border-gray-500 rounded-md">
            <div className="relative w-full h-[80px]">
              <Image
                src="/science-education.jpg"
                alt="course cover"
                // width="100%"
                // height="100%"
                objectFit="cover"
                layout="fill"
              />
            </div>
            <div className="px-2">
              <h1 className="text-xl font-bold">{course.title}</h1>
              <p className="overflow-hidden h-[130px] w-full">
                {course.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomCourses;
