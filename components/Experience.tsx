'use client';

import { motion } from 'framer-motion';

const experiences = [
  {
    company: 'Go Digit Insurance Pvt Ltd',
    role: 'Software Engineer',
    period: "Dec '23 - Present",
    description: [
      'Developed and deployed over 50 RESTful APIs using Java, Spring Boot, and SQL, handling 30,000+ daily requests.',
      'Integrated Kafka Producers and Consumers for microservices event communication.',
      'Deep linked UPI apps (BHIM, Paytm) for Payment Gateway managed Bank-Payments and Recurring-Payments.',
      'Streamlined operations of 20+ APIs by optimizing database queries and implementing asynchronous execution.',
      'Designed database schemas and implemented caching strategies for optimized data retrieval.',
      'Deployed services using Jenkins and Kubernetes, ensuring high availability and reliability.'
    ]
  },
  {
    company: 'Go Digit Insurance Pvt Ltd',
    role: 'Graduate Trainee Engineer',
    period: "2022 - Dec '23",
    description: [
      'Worked on One-API Project (B2B Integration Microservice), developing Basic CRUD RESTful APIs.',
      'Assisted more than 15 partners in integrating their products with the service.',
      'Developed HTML pages and JSPs for APIs and Email Templates.',
      'Collaborated on gateway configurations for customer delivery.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-gray-400 max-w-xl">
            My professional journey in building scalable software solutions.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative border-l border-white/10 pl-8 md:pl-12 pb-12 last:pb-0"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-white transition-all group-hover:scale-150 group-hover:bg-blue-500" />
              
              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="text-sm text-gray-500 font-mono mt-1 md:mt-0">{exp.period}</span>
              </div>
              
              <div className="text-lg text-gray-300 font-medium mb-4">{exp.company}</div>
              
              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-gray-400 text-base leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-gray-600">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
