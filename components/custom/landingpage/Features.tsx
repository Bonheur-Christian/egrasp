"use client";

import { Files, LayoutDashboard, UsersRound } from "lucide-react";
import Image from "next/image";

export default function Features() {
  return (
    <div className="max-w-[90%] mx-auto p-12">
      <div className="flex flex-col justify-center mb-8">
        <h1 className="text-2xl md:text-5xl font-bold text-primary mb-4 text-center">
          Our <span className="text-orange-500">Features</span>
        </h1>

        <p className="text-gray-500 max-w-4xl text-md mx-auto leading-relaxed text-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto,
          commodi laudantium laborum aliquid ipsum adipisci perspiciatis quis
          ea, aliquam omnis at beatae.
        </p>
      </div>

      <div>
        {/* user interface */}
        <div className="flex gap-12 py-6 max-w-[94%] mx-auto items-center">
          <div className="w-full">
            <Image
              src="/images/user-interface.png"
              width={400}
              height={400}
              alt="classroom image"
              className="w-[50vw]"
            />
          </div>
          <div className="w-full">
            <h3 className="text-3xl font-bold mb-4 text-primary max-w-xl">
              A <span className="text-orange-500">user interface</span> designed
              for the classroom
            </h3>

            <div className="ps-12 w-[80%]">
              <div className="flex items-start gap-5 group hover:bg-gray-50 p-3 rounded-xl transition-all">
                <p className="text-gray-600 text-lg leading-relaxed flex gap-4 items-center">
                  <span className="rounded-full p-2.5 bg--100 border border-primary hover:-translate-y-1 duration-300">
                    <LayoutDashboard className="text-primary font-bold" />
                  </span>
                  Teachers get lost in the grid view and have a dedicated Podium
                  space.
                </p>
              </div>
              <div className="flex items-start gap-5 group hover:bg-gray-50 p-3 rounded-xl transition-all">
                <span className="rounded-full p-2.5 bg--100 border border-primary hover:-translate-y-1 duration-300">
                  <Files className="text-primary font-bold" />
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  and presenters can be moved to the front of the class.
                </p>
              </div>
              <div className="flex items-start gap-5 group hover:bg-gray-50 p-3 rounded-xl transition-all">
                <span className="rounded-full p-2.5 bg--100 border border-primary hover:-translate-y-1 duration-300">
                  <UsersRound className="text-primary font-bold" />
                </span>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Teachers can easily see all students and class data at one
                  time.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tools for Teacher */}
        <div className="flex gap-12 py-6 max-w-[94%] mx-auto items-center">
          <div className="w-full space-y-8 relative mx-12">
            <div className="w-[80%] space-y-6">
              <h2 className="text-4xl relative z-10 text-primary font-bold">
                <span className="text-orange-500 pe-2">Tools</span>
                for Teachers and Learners
              </h2>
              <p className="text-gray-600 text-lg relative z-10">
                Grasp’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/tools.png"
              width={400}
              height={400}
              alt="classroom image"
              className="w-[50vw]"
            />
          </div>
        </div>
        {/* Assessments and Quizzez */}

        <div className="flex gap-12 py-6 max-w-[94%] mx-auto items-center">
          <div className="w-full">
            <Image
              src="/images/quizzes.png"
              width={400}
              height={400}
              alt="classroom image"
              className="w-[50vw]"
            />
          </div>
          <div className="w-full space-y-8 relative mx-12">
            <div className="w-[80%] space-y-6">
              <h2 className="text-4xl relative z-10 text-primary font-bold max-w-lg">
                Assessments,
                <span className="text-orange-500 pe-3"> Quizzes,</span>
                Tests
              </h2>
              <p className="text-gray-600 text-lg relative z-10">
                Grasp’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
          </div>
        </div>

        {/* Class Management */}
        <div className="flex gap-12 py-6 mx-auto max-w-[94%] items-center">
          <div className="w-full space-y-8 relative mx-12">
            <div className="w-[80%] space-y-6">
              <h2 className="text-4xl relative z-10 text-primary font-bold">
                <span className="text-orange-500 pe-2">Class Management</span>
                Tools for Educators
              </h2>
              <p className="text-gray-600 text-lg relative z-10">
                Grasp’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/class-management.png"
              width={400}
              height={400}
              alt="classroom image"
              className="w-[50vw]"
            />
          </div>
        </div>

        {/* One-On-One Discussions */}
        <div className="flex gap-12 py-6 max-w-[94%] mx-auto items-center justify-end">
          <div className="w-full">
            <Image
              src="/images/discussion.png"
              width={400}
              height={400}
              alt="classroom image"
              className="w-[50vw]"
            />
          </div>
          <div className="w-full space-y-8 relative mx-12">
            <div className="w-[80%] space-y-6">
              <h2 className="text-4xl relative z-10 text-primary font-bold flex flex-col">
                One-on-One
                <span className="text-orange-500">Discussions</span>
              </h2>
              <p className="text-gray-600 text-lg relative z-10">
                Grasp’s school management software helps traditional and online
                schools manage scheduling, attendance, payments and virtual
                classrooms all in one secure cloud-based system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
