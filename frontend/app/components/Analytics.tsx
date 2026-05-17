import React from "react";
import { TrendingUp, Users, Briefcase, Target, LucideIcon } from "lucide-react";

interface StateItem {
  icon: LucideIcon;
  title: string;
  value: string;
  growth: string;
  styles: {
    bg: string;
    text: string;
  };
}

const Analytics = () => {
  const stats: StateItem[] = [
    {
      icon: Users,
      title: "Active Users",
      value: "2.4M+",
      growth: "+15%",
      styles: {
        bg: "bg-blue-100",
        text: "text-blue-600",
      },
    },
    {
      icon: Briefcase,
      title: "Jobs Posted",
      value: "150K+",
      growth: "+22%",
      styles: {
        bg: "bg-purple-100",
        text: "text-purple-600",
      },
    },
    {
      icon: Target,
      title: "Successful Hires",
      value: "89K+",
      growth: "+18%",
      styles: {
        bg: "bg-green-100",
        text: "text-green-600",
      },
    },
    {
      icon: TrendingUp,
      title: "Match Rate",
      value: "94%",
      growth: "+8%",
      styles: {
        bg: "bg-orange-100",
        text: "text-orange-600",
      },
    },
  ];
  return (
    <section className="bg-white py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Platform{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Analytics
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Real time insights and data-driven results that showcase the power of our platform
            in connecting talent with opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-5">
                <span
                  className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.styles.bg}`}
                >
                  <stat.icon className={`w-6 h-6 ${stat.styles.text}`} />
                </span>
                <span className="text-green-500 text-sm font-semibold bg-green-100 px-2 py-1 rounded-full">
                  {stat.growth}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</h3>
              <p className="text-gray-600 font-medium leading-relaxed">{stat.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Analytics;
