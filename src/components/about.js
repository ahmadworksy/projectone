import React from "react";
import cta_one_shape_1 from "../assets/Artboard11.png";

export const About = () => {
  return (
    <div className="bg-gray-100 py-20 h-auto">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          About Our School
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="md:order-2 bg-slate-600">
            <img
              src={cta_one_shape_1}
              alt="School building"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:order-1">
            <h2 className="text-lg font-black text-6xl pb-8 text text-sky-500">
              alnour school
            </h2>
            <p className="text-lg mb-4 pb-7">
              Alnour School stands as a beacon of education, illuminating the
              path of knowledge for its students and the community it serves.
              Founded on the principles of academic excellence, character
              development, and community engagement, Alnour School has been a
              cornerstone of education for decades, enriching the lives of
              generations of students. Located in the heart of a vibrant
              community, Alnour School welcomes students from diverse
              backgrounds, fostering an inclusive environment where all are
              valued and celebrated. From its humble beginnings, the school has
              grown into a dynamic educational institution, renowned for its
              commitment to providing a holistic education that prepares
              students for success in an ever-changing world.
            </p>
          </div>
        </div>
        <div class="container mx-auto px-4 py-8">
          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Academic Excellence</h2>
            <p class="text-lg mb-4">
              At Alnour School, academic excellence is at the forefront of
              everything we do. Our dedicated team of educators is passionate
              about nurturing the intellectual curiosity of each student,
              empowering them to reach their full potential. With a rigorous
              curriculum that meets national standards and emphasizes critical
              thinking, creativity, and problem-solving skills, we strive to
              equip our students with the knowledge and skills they need to
              thrive in the 21st century.
            </p>
            <p class="text-lg mb-4">
              From the early years of preschool through high school graduation,
              students at Alnour School engage in a comprehensive academic
              program that encompasses core subjects such as mathematics,
              science, language arts, and social studies, as well as a wide
              range of elective courses and extracurricular activities. Our goal
              is not only to impart knowledge but also to instill a lifelong
              love of learning and a commitment to intellectual curiosity.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Character Development</h2>
            <p class="text-lg mb-4">
              At Alnour School, education goes beyond the classroom walls. We
              believe in the importance of nurturing the whole child – mind,
              body, and spirit. Through our character education program, we
              strive to cultivate in our students the values of respect,
              integrity, empathy, and responsibility. Our dedicated staff serves
              as positive role models, guiding students in developing strong
              moral character and ethical decision-making skills.
            </p>
            <p class="text-lg mb-4">
              Through service-learning projects, community service initiatives,
              and leadership opportunities, students at Alnour School learn the
              importance of giving back to others and making a positive impact
              in their community. Whether it's volunteering at a local soup
              kitchen, organizing a fundraising event for a worthy cause, or
              participating in an environmental cleanup effort, our students are
              actively engaged in making the world a better place.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Community Engagement</h2>
            <p class="text-lg mb-4">
              Alnour School is more than just a place of learning – it is a
              vibrant community of students, families, teachers, and staff
              working together to create a supportive and enriching environment
              for all. We recognize the importance of strong partnerships
              between home and school, and we actively involve parents and
              guardians in their child's education through regular
              communication, parent-teacher conferences, and family events.
            </p>
            <p class="text-lg mb-4">
              Beyond the school gates, Alnour School is deeply embedded in the
              wider community, forging connections with local organizations,
              businesses, and institutions to enrich the educational experiences
              of our students. Through partnerships with museums, libraries,
              universities, and cultural centers, we provide students with
              opportunities to explore the world beyond the classroom and to
              develop a deeper understanding and appreciation of diverse
              cultures, perspectives, and experiences.
            </p>
          </section>

          <section class="mb-8">
            <h2 class="text-2xl font-bold mb-4">Looking to the Future</h2>
            <p class="text-lg mb-4">
              As we look to the future, Alnour School remains committed to its
              mission of providing a high-quality education that empowers
              students to become lifelong learners, critical thinkers, and
              compassionate leaders. We continue to innovate and evolve,
              embracing new technologies, pedagogies, and best practices to meet
              the changing needs of our students and society.
            </p>
            <p class="text-lg mb-4">
              With a proud legacy of academic excellence, character development,
              and community engagement, Alnour School stands as a shining
              example of what is possible when we invest in the power of
              education to transform lives and communities. Together, we are
              shaping the future, one student at a time, and building a brighter
              tomorrow for all.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};
