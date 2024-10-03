import React from "react";
import New from "../../../assets/images/news.png";
import Image5 from "../../../assets/images/image4.png";
import Image6 from "../../../assets/images/image5.png";
import Image4 from "../../../assets/images/image6.png";

const articles = [
  {
    title: "Breaking Barriers: Advancements in Nursing Practice",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image5,  
  },
  {
    title: "Nursing Education Unleashed: From Classroom to Clinicals",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image4,  
  },
  {
    title: "Nurse's Notebook: A Journey through Nursing Education",
    description:
      "Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit. Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris...",
    postedDate: "18 August 2023",
    image: Image6,  
  },
];

const News = () => {
  return (
    <div className="container py-10 mx-auto">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-semibold text-2xl mb-4">News, Blogs, and Beyond</h1>
        <h2 className="text-lg mb-8">Your Source for Updates & Articles</h2>
      </div>

    
      <div className="flex gap-10 mb-10">
        <div className="container grid grid-cols-12 gap-14 py-10 mx-auto">
          <div className="col-span-5">
            <img src={New} alt="Featured Article" className="w-11/12 h-90 rounded-lg object-cover" />
          </div>

          <div className="col-span-7">
            <div className="flex flex-col gap-4 py-6">
              {/* Title */}
              <h2 className="text-2xl font-semibold">
                Nurse Leadership: Paving the Way for Change in Healthcare
              </h2>

              
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet consectetur. Quam pharetra urna at pulvinar blandit.
                Ullamcorper ullamcorper ac justo nisl est laoreet pharetra ultricies mauris.
                Senectus aliquam sodales massa vitae velit. Cras ultricies ac ultricies pellentesque
                ligula amet ultricies. Tristique porttitor pulvinar id et pellentesque aliquam nunc.
                Egestas felis ultrices quam dui mollis cras. Id vestibulum urna amet morbi ornare.
                Dictum tristique elementum lobortis posuere diam tincidunt dui...
              </p>

              
              <p className="text-sm text-teal-600">
                Posted date: 18 August 2023
              </p>
            </div>
          </div>
        </div>
      </div>

      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div key={index} className="border rounded-lg shadow-md overflow-hidden">
            <img
              src={article.image}  
              alt={article.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
              <p className="text-gray-700 mb-4">{article.description}</p>
              <p className="text-teal-600 text-sm">Posted date: {article.postedDate}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
