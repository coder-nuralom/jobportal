"use client";

import React from "react";
import { motion } from "framer-motion";
import { Search, ArrowRight, Users, Building2, TrendingUp } from "lucide-react";

const Hero = () => {
  const stats = [
    { icon: Users, lavel: "Active Users", value: "2.4M" },
    { icon: Building2, lavel: "Companies", value: "50K" },
    { icon: TrendingUp, lavel: "Jobs Posted", value: "150K" },
  ];
  return (
    <section>
      <div className="container mx-auto px-4">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Find your dream job or <span>perfect hire.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Connect professionals with innovative companies.Your next career move or perfect
            candidate is just one click away.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex items-center gap-x-4"
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center bg-red-300 py-2 px-7"
            >
              <Search />
              <span>find jobs</span>
              <ArrowRight />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex items-center bg-red-300 py-2 px-7"
            >
              Post a job
            </motion.button>
          </motion.div>

          {/* Stats */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                className=""
              >
                <span>icon</span>
                <h4>value</h4>
                <h6>label</h6>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
