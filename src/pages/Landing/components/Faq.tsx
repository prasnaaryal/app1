import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Amet tortor ornare?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris. Senectus aliquam sodales massa vitae velit. Cras ultricies ac ultricies pellentesque ligula amet ultricies.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Amet tortor ornare?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris. Senectus aliquam sodales massa vitae velit.'
  },
  {
    question: 'Lorem ipsum dolor sit amet consectetur. Amet tortor ornare?',
    answer: 'Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris. Cras ultricies ac ultricies pellentesque ligula amet ultricies.'
  },
];

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Ensure correct type

  const toggleFAQ = (index: number) => {  // Explicitly define `index` as a number
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl font-semibold text-center mb-6">FREQUENTLY ASKED QUESTIONS</h2>
      <p className="text-center text-lg mb-8">Your Quick Guide to Common Questions</p>

      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-md p-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-medium">{item.question}</h3>
              {activeIndex === index ? <FaMinus className="text-green-600" /> : <FaPlus className="text-green-600" />}
            </div>

            {activeIndex === index && (
              <div className="mt-4 text-gray-700">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
