import { ArrowRight, ArrowRightFromLine } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function NewsSection() {
  return (
    <div className="max-w-[90%] mx-auto p-12">
      <div className="py-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <h1 className="text-lg md:text-xl text-primary text-center whitespace-nowrap">
            Latest <span className="text-orange-500">News</span> and Resources
          </h1>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <p className="text-gray-600 text-center">
          Stay updated with the latest news and resources from our community.
        </p>
      </div>

      <div className=" px-4 py-12 max-w-[80%] mx-auto">
        <div className="flex gap-12">
          {/* Featured Article */}
          <div className="md:w-3/5 space-y-4">
            <div className="mb-6 space-y-4">
              <p className="text-sm font-semibold text-gray-400 tracking-[0.2em]">
                NEWS
              </p>
              <Image
                src="/images/latest.png"
                width={500}
                height={400}
                alt="classroom image"
              />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Class adds $30 million to its balance sheet for a Zoom-friendly
              edtech solution
            </h2>
            <p className="text-gray-600 text-lg">
              Class, launched less than a year ago by Blackboard co-founder
              Michael Chasen, integrates exclusively...
            </p>

            <Link
              href="#"
              className="text-primary font-medium inline-flex items-center gap-2 cursor-pointer group"
            >
              Read more
              <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>

          {/* News Sidebar */}
          <div className="md:w-2/5 space-y-5 mt-6">
            {/* Press Release */}
            <div className="pb-4 border-b border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xs font-bold text-gray-400">
                  PRESS RELEASE
                </span>
                <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                <span className="text-xs font-bold text-gray-400">
                  PRESS RELEASE
                </span>
              </div>
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Image
                    src="/images/new1.png"
                    alt="Class Technologies"
                    width={200}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
                    Class Technologies Inc. closes $30 Million Series A
                    Financing to Meet High Demand
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    Class Technologies Inc., the company that created ClassClass
                    Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>
            </div>

            {/* News Items */}
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <Image
                    src="/images/new2.png"
                    alt="Zoom investors"
                    width={200}
                    height={100}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
                    Zoom earliest investors are betting millions on a better
                    Zoom for schools
                  </h3>
                  <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                    Class Technologies Inc., the company that created ClassClass
                    Technologies Inc., the company that created Class,...
                  </p>
                </div>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex gap-4">
                  <div className="shrink-0">
                    <Image
                      src="/images/new3.png"
                      alt="Former Blackboard CEO"
                      width={200}
                      height={100}
                      className="rounded-lg object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold hover:text-primary transition-colors cursor-pointer">
                      Former Blackboard CEO Raises $16M to Bring LMS Features to
                      Zoom Classrooms
                    </h3>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                      Class Technologies Inc., the company that created
                      ClassClass Technologies Inc., the company that created
                      Class,...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
