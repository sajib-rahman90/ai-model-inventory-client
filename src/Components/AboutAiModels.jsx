import { Brain, Cpu, MessageSquare, Sparkles } from "lucide-react";
import React from "react";

const AboutAiModels = () => {
  return (
    <div>
      <section className="w-full py-14 px-4 md:px-8 ">
        <div className="max-w-5xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              About AI Models
            </h2>
            <p className="mt-3 text-gray-600 max-w-xl mx-auto">
              AI models are the core of machine learning systems. They learn
              from data and help computers make decisions, predictions, and
              solve complex problems.
            </p>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-5 rounded-xl shadow-sm  hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                  <Brain className="text-blue-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">
                  What are AI Models?
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI models are mathematical systems that learn patterns from
                data. A common example is neural networks, which work similarly
                to the human brain.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-5 rounded-xl shadow-sm  hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-green-100 rounded-lg">
                  <Cpu className="text-green-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">
                  Why are they important?
                </h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                They allow machines to solve real-world problems without manual
                programming and improve automatically using data.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-5 rounded-xl shadow-sm  hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <MessageSquare className="text-purple-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">Real-world Use</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                Used in chatbots, recommendation systems, and image recognition
                to understand users and automate tasks.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-5 rounded-xl shadow-sm  hover:shadow-lg transition">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Sparkles className="text-orange-600" size={20} />
                </div>
                <h3 className="font-semibold text-gray-800">Future Scope</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                AI models are becoming more powerful and are widely used in
                healthcare, education, and business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutAiModels;
