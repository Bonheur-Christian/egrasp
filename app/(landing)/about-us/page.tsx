"use client";

import { Button } from "@/components/ui/button";
import { BookOpen, Users, Award, Lightbulb, Target, Heart } from "lucide-react";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-blue-100 rounded-br-[15vw] rounded-bl-[15vw]">
        <div className="max-w-[90%] mx-auto px-12 py-16 relative overflow-hidden min-h-[500px]">
          <div className="flex items-center gap-12 relative z-10">
            <div className="w-[50%] space-y-6">
              <div>
                <h1 className="text-5xl font-bold leading-tight">
                  About <span className="text-orange-500">eGrasp</span>
                </h1>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                eGrasp is Rwanda&apos;s premier e-learning platform dedicated to
                empowering individuals through accessible education and
                meaningful skill-sharing communities. We believe learning is a
                lifelong journey, and knowledge is meant to be shared.
              </p>
              <div className="flex gap-4 pt-4">
                <Button className="text-white rounded-md px-8 py-6 text-md hover:scale-105 transition-all">
                  Join Our Community
                </Button>
                <Button
                  variant="outline"
                  className="rounded-md px-8 py-6 text-md border-primary text-primary hover:scale-105 transition-all"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="w-[50%] flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl"></div>
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl p-12 text-white text-center">
                  <Users className="w-24 h-24 mx-auto mb-4 text-orange-300" />
                  <p className="text-2xl font-bold">
                    Transforming Education & Skills in Rwanda
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-[90%] mx-auto px-12 py-20">
        <div className="bg-gradient-to-r from-blue-50 to-orange-50 rounded-2xl p-12 border border-blue-200">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our <span className="text-orange-500">Mission</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              At eGrasp, we envision a Rwanda where anyone, regardless of
              background or location, can access world-class education and
              connect with experts in their field. We&apos;re building more than
              a learning platform—we&apos;re creating a vibrant ecosystem where
              knowledge flows freely and skills are celebrated.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="flex gap-4">
                <Target className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Democratize Learning
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Making quality education accessible to everyone
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Lightbulb className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Foster Innovation
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Encouraging creative thinking and skill development
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Users className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Build Communities
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Connecting learners with peers and mentors
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Award className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-primary mb-2">
                    Recognize Excellence
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Awarding credentials that matter to employers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Two Pillars Section */}
      <div className="max-w-[90%] mx-auto px-12 py-20">
        <h2 className="text-4xl font-bold text-center mb-4 text-primary">
          Two <span className="text-orange-500">Powerful Pillars</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          eGrasp uniquely combines structured e-learning courses with dynamic
          skill-sharing communities
        </p>

        <div className="grid grid-cols-2 gap-8">
          {/* E-Learning Pillar */}
          <div className="bg-white rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-shadow">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Structured <span className="text-orange-500">E-Learning</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Professional courses designed by industry experts covering
              in-demand skills. Learn at your own pace with interactive content,
              quizzes, and hands-on projects.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Comprehensive curriculum crafted by experts
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Self-paced learning with flexible schedules
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Certificates recognized by employers
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Progress tracking and performance analytics
                </span>
              </li>
            </ul>
          </div>

          {/* Communities Pillar */}
          <div className="bg-white rounded-2xl p-8 border border-orange-200 hover:shadow-xl transition-shadow">
            <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mb-6">
              <Users className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Skill-Sharing <span className="text-orange-500">Communities</span>
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Connect with like-minded learners and experts. Share your
              knowledge, ask questions, collaborate on projects, and grow
              together through peer learning.
            </p>
            <ul className="space-y-3">
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Join communities based on interests
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Teach and mentor other community members
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Real-time discussions and networking
                </span>
              </li>
              <li className="flex gap-3 items-start">
                <span className="text-orange-500 font-bold">✓</span>
                <span className="text-gray-700">
                  Collaborative project opportunities
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Why Choose eGrasp */}
      <div className="bg-primary text-white py-20">
        <div className="max-w-[90%] mx-auto px-12">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Why Choose <span className="text-orange-300">eGrasp?</span>
          </h2>
          <p className="text-center mb-12 text-blue-100 max-w-2xl mx-auto">
            We combine the best of structured learning with the power of
            community
          </p>

          <div className="grid grid-cols-3 gap-8">
            <div className="bg-blue-600 rounded-xl p-8">
              <div className="text-orange-300 text-4xl font-bold mb-3">
                100%
              </div>
              <h4 className="text-lg font-bold mb-2">Free to Start</h4>
              <p className="text-blue-100">
                Access courses and communities without barriers to entry
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-8">
              <div className="text-orange-300 text-4xl font-bold mb-3">
                1000+
              </div>
              <h4 className="text-lg font-bold mb-2">Expert Instructors</h4>
              <p className="text-blue-100">
                Learn from industry professionals and community leaders
              </p>
            </div>
            <div className="bg-blue-600 rounded-xl p-8">
              <div className="text-orange-300 text-4xl font-bold mb-3">
                Rwanda
              </div>
              <h4 className="text-lg font-bold mb-2">Locally Focused</h4>
              <p className="text-blue-100">
                Tailored content and communities for the Rwandan context
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="max-w-[90%] mx-auto px-12 py-20">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">
          Our <span className="text-orange-500">Core Values</span>
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <div className="text-center">
            <Heart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Inclusivity</h3>
            <p className="text-gray-600">
              We welcome everyone, regardless of background, experience level,
              or circumstances
            </p>
          </div>
          <div className="text-center">
            <Lightbulb className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Innovation</h3>
            <p className="text-gray-600">
              We continuously improve our platform with cutting-edge learning
              technologies
            </p>
          </div>
          <div className="text-center">
            <Award className="w-12 h-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-primary mb-2">Excellence</h3>
            <p className="text-gray-600">
              We maintain high standards in content quality and community
              interactions
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-500 to-primary rounded-2xl max-w-[90%] mx-auto mb-20">
        <div className="px-12 py-16 text-center text-white">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your{" "}
            <span className="text-orange-300">Learning Journey?</span>
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of learners in Rwanda who are building valuable
            skills and connecting with their communities on eGrasp
          </p>
          <div className="flex gap-4 justify-center">
            <Button
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-white text-md px-8 py-6"
            >
              Start Learning Free
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white text-primary border-white hover:bg-blue-50 text-md px-8 py-6"
            >
              Explore Communities
            </Button>
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <div className="max-w-[90%] mx-auto px-12 py-16 text-center border-t border-gray-200">
        <p className="text-2xl font-semibold text-gray-800 italic">
          &ldquo;Knowledge is power, but{" "}
          <span className="text-orange-500">shared knowledge</span> is
          transformation&rdquo;
        </p>
        <p className="text-gray-600 mt-4">— The eGrasp Team</p>
      </div>
    </div>
  );
}
