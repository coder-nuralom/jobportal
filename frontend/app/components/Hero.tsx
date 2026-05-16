import React from "react";
import { Search, ArrowRight, Users, Building2, TrendingUp, LucideIcon } from "lucide-react";

interface StateItem {
  icon: LucideIcon;
  label: string;
  value: string;
}

const Hero = () => {
  const stats: StateItem[] = [
    { icon: Users, label: "Active Users", value: "2.4M" },
    { icon: Building2, label: "Companies", value: "50K" },
    { icon: TrendingUp, label: "Jobs Posted", value: "150K" },
  ];
  return (
    <section className="py-12.5 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 pt-10 capitalize text-center">
            Find your dream job or
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              perfect hire.
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 pt-3 leading-relaxed text-center max-w-3xl mx-auto">
            Connect professionals with innovative companies.Your next career move or perfect
            candidate is just one click away.
          </p>
          <div className="flex flex-col items-center justify-center sm:flex-row items-center gap-4 mb-16 ">
            <button className="group flex items-center gap-x-2 bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-white rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg cursor-pointer capitalize">
              <Search className="w-5 h-5" />
              <span>find jobs</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="bg-white border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold text-lg hover:border-gray-300 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer">
              Post a job
            </button>
          </div>

          {/* Stats */}

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {stats.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center space-y-2 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <span className="w-12 h-12 bg-gradient-to-r from-blue-100 to-purple-100 rounded-xl flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-gray-600" />
                </span>
                <h4 className="text-2xl font-bold text-gray-900">{item.value}</h4>
                <h6 className="text-[15px] font-semibold text-gray-600">{item.label}</h6>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-100 rounded-full blur-3xl opacity-30" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full blur-3xl opacity-20" />
      </div>
    </section>
  );
};

export default Hero;
