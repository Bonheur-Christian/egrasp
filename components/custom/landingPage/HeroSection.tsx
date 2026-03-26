import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
    return (
        <div className="bg-blue-100 rounded-br-[15vw] rounded-bl-[15vw]">
            <div className="max-w-[90%] mx-auto px-12 py-16 relative overflow-hidden min-h-[600px]">
                <div className="flex items-center gap-12 relative z-10">
                    <div className="w-[40%] space-y-6 animate-fade-in-left">
                        <div className="relative">
                            {/* Animated underline for heading */}
                            <div className="absolute -bottom-2 left-0 w-48 h-1 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full animate-expand-width"></div>
                            <h1 className="text-4xl font-semibold leading-tight w-[90%]">
                                <span className="text-orange-500 pe-2 relative inline-block">
                                    Learn
                                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-orange-500/50 animate-slide-right"></span>
                                </span>
                                real skills. Teach what you know. Connect with Rwanda.
                            </h1>
                        </div>
                        <p className="text-lg text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                            Free courses • Interactive communities • Certificates that employers trust • Share what you have with others
                        </p>
                        <div className="flex gap-6 items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                            <Button
                                size="lg"
                                className="text-white rounded-md p-6 text-md hover:bg-primary-80 cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30 duration-300 transition-all relative overflow-hidden group"
                            >
                                <span className="relative z-10">Join Free</span>
                                <span className="absolute inset-0  transition-opacity duration-300"></span>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="text-primary bg-slate-50 border border-primary rounded-md p-6 text-md cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30 duration-300 transition-all relative overflow-hidden group"
                            >
                                <span className="relative z-10">Browse Communities</span>
                                <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-slate-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                            </Button>
                        </div>
                    </div>
                    {/* Enhanced Image Section with Overlapping Elements */}
                    <div className="w-[50%] relative flex items-center justify-center min-h-[500px] animate-fade-in-right">
                        {/* Main Hero Image with Glow Effect */}
                        <div className="relative z-0 group">
                            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                            <Image
                                src="/images/hero.png"
                                width={500}
                                height={400}
                                alt="Hero section image"
                                className="rounded-2xl rotate-10 relative z-10 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-12"
                            />
                        </div>
                        {/* Enhanced Floating Images with Better Animations */}
                        <div className="absolute top-32 left-2 z-20 animate-float-smooth">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-orange-500/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-300"></div>
                                <Image
                                    src="/images/1.png"
                                    width={150}
                                    height={120}
                                    alt="Floating image 1"
                                    className="rounded-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                                />
                            </div>
                        </div>
                        <div className="absolute top-12 right-24 z-20 animate-float-smooth-delayed">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-300"></div>
                                <Image
                                    src="/images/2.png"
                                    width={300}
                                    height={100}
                                    alt="Floating image 2"
                                    className="rounded-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-4 left-48 z-20 animate-float-smooth" style={{ animationDelay: '1s' }}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-purple-500/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-300"></div>
                                <Image
                                    src="/images/3.png"
                                    width={210}
                                    height={110}
                                    alt="Floating image 3"
                                    className="rounded-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                                />
                            </div>
                        </div>
                        <div className="absolute bottom-8 right-4 z-20 animate-float-smooth-delayed" style={{ animationDelay: '1.5s' }}>
                            <div className="relative group">
                                <div className="absolute inset-0 bg-pink-500/20 rounded-lg blur-md group-hover:blur-xl transition-all duration-300"></div>
                                <Image
                                    src="/images/4.png"
                                    width={250}
                                    height={130}
                                    alt="Floating image 4"
                                    className="rounded-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-2"
                                />
                            </div>
                        </div>
                        {/* Animated Background Circles */}
                        <div className="absolute inset-0">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
                            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-orange-500/10 rounded-full blur-2xl animate-ping-slow"></div>
                            <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse-slower"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}