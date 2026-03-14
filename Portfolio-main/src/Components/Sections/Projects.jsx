import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2"> MY-Project-DataScience</h3>
              <p className="text-gray-400 mb-4">
    Developed a Customer Churn Analysis model to identify customers likely to leave a service using machine learning techniques. Analyzed historical customer data with Python and built predictive models to help businesses improve retention strategies and reduce churn.

                
              </p>
              

              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hardik4603/ChatBuzz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Handwritten Digit Recognition using CNN</h3>
              <p className="text-gray-400 mb-4">
             Developed a Handwritten Digit Recognition system using Convolutional Neural Networks (CNN) to accurately classify digits from image data. Trained the model on the MNIST dataset using Python and deep learning libraries to achieve high prediction accuracy.

                
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hardik4603/CodeShelf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">Employee -- Management System</h3>
              <p className="text-gray-400 mb-4">
              EmpNumber is a unique alphanumeric identifier assigned to each employee in the dataset. It is used only for identification purposes and does not contribute as a meaningful feature for predicting employee performance.
                
              </p>
              
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/hardik4603/CloudCast"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>

            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-blue-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2"> Solar Panel Intensity Prediction Model</h3>
              
              <p className="text-gray-400 mb-4">
              A Solar Panel Intensity Prediction Model uses Python to analyze weather and environmental data to estimate the amount of solar energy a panel can generate. It helps improve energy efficiency by predicting solar radiation levels and optimizing solar power production.
                
              </p>
              
              <div className="flex justify-between items-center ">
                <a
                  href="https://github.com/hardik4603/Currency-Convertor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
