import React from "react";
import { FileText, Calendar, Users } from "lucide-react";
import Image from "next/image";

export default function SuccessSection() {
  const stats = [
    { value: "15K+", label: "Students" },
    { value: "75%", label: "Total success" },
    { value: "35", label: "Main questions" },
    { value: "26", label: "Chief experts" },
    { value: "16", label: "Years of experience" },
  ];

  const features = [
    {
      icon: <FileText size={28} />,
      title: "Online Billing, Invoicing, & Contracts",
      description:
        "Simple and secure control of your organization's financial and legal transactions. Send customized invoices and contracts",
      color: "#5B6CE8",
    },
    {
      icon: <Calendar size={28} />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      color: "#00BFA5",
    },
    {
      icon: <Calendar size={28} />,
      title: "Easy Scheduling & Attendance Tracking",
      description:
        "Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance",
      color: "#00BFA5",
    },
    {
      icon: <Users size={28} />,
      title: "Customer Tracking",
      description:
        "Automate and track emails to individuals or groups. Skilline's built-in system helps organize your organization",
      color: "#29B6F6",
    },
  ];

  return (
    <section className="max-w-[90%] mx-auto py-20 px-4 bg-linear-to-b from-white to-gray-50 space-y-12">
      {/* Success Stats */}
      <div className="mx-auto mb-24">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-primary mb-4">
            Our Success
          </h2>
          <p className="text-gray-500 max-w-5xl mx-auto leading-relaxed text-md">
            Ornare id fames interdum porttitor nulla turpis etiam. Diam vitae
            sollicitudin at nec nam et pharetra gravida. Adipiscing a quis
            ultrices eu ornare tristique vel nisl orci.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-xl md:text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-700 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cloud Software Section */}
      <div className="py-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            All-In-One <span className="text-orange-500">Cloud Software.</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            eGrasp is one powerful online software suite that combines all the
            tools needed to run a successful school or office.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto"
                style={{ backgroundColor: feature.color }}
              >
                <div className="text-white">{feature.icon}</div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-center leading-relaxed text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-12 py-32  mx-auto items-center">
        <div className="w-full space-y-8 relative">
          {/* Animated circle */}
          <div className="absolute -top-4 -left-4">
            <div className="w-16 h-16 bg-teal-600 rounded-full opacity-20 animate-ping" />
            <div className="absolute inset-0 w-16 h-16 bg-green-300 rounded-full " />
          </div>

          <h2 className="text-4xl relative z-10 text-primary font-bold">
            Everything you can do in a physical classroom,{" "}
            <span className="px-2 text-orange-500">you can do with eGrasp</span>
          </h2>
          <p className="text-gray-600 text-lg relative z-10">
            eGrasp’s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>
        </div>
        <div className="w-full">
          <Image
            src="/images/class.png"
            width={400}
            height={400}
            alt="classroom image"
            className="w-[50vw]"
          />
        </div>
      </div>
    </section>
  );
}
