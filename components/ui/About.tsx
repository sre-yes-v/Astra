
import { Montserrat } from 'next/font/google';
import { FaLightbulb, FaTools, FaUsers, FaAward } from 'react-icons/fa';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
});

export default function About() {
  const features = [
    {
      icon: <FaLightbulb className="w-6 h-6 text-indigo-400" />,
      title: "Innovation Hub",
      description:
        "A platform where creativity meets technology, fostering groundbreaking solutions.",
    },
    {
      icon: <FaTools className="w-6 h-6 text-indigo-400" />,
      title: "Skill Development",
      description:
        "Hands-on workshops and competitions designed to enhance your technical abilities.",
    },
    {
      icon: <FaUsers className="w-6 h-6 text-indigo-400" />,
      title: "Community",
      description:
        "Connect with like-minded individuals and build lasting professional relationships.",
    },
    {
      icon: <FaAward className="w-6 h-6 text-indigo-400" />,
      title: "Recognition",
      description:
        "Showcase your talents and gain recognition for your innovative contributions.",
    },
  ];

  return (
    <section id='about' className="bg-gray-900 min-h-screen text-white flex flex-col items-center py-20 px-4 sm:px-6 lg:px-8 font-montserrat ">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 mb-4">
          About <span className="text-indigo-400">ASTRA</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 font-light max-w-3xl mx-auto">
          ASTRA is more than just a tech festival - it&apos;s a celebration of innovation, creativity, and the boundless potential of technology. Our mission is to bring together brilliant minds from across disciplines to collaborate, compete, and create the future.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-indigo-500"
            style={{
              background: 'linear-gradient(145deg, #1f2937 10%, #111827 90%)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)'
            }}
          >
            <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mb-4 border border-indigo-500">
              {feature.icon}
            </div>
            <h3 className="text-lg font-semibold text-gray-100 mb-2">{feature.title}</h3>
            <p className="text-sm text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>

      <div
        className="mt-20 p-8 text-center max-w-4xl mx-auto rounded-xl shadow-xl border border-purple-500"
        style={{
          background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Join the Revolution
        </h2>
        <p className="text-md sm:text-lg text-gray-300">
          Whether you&apos;re a coding enthusiast, a creative thinker, or a problem solver, ASTRA offers a diverse range of events designed to challenge and inspire you. From technical workshops to cultural competitions, there&apos;s something for everyone.
        </p>
      </div>
    </section>
  );
}
