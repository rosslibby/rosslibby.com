type Skill = {
  name: string;
  yearsOfExperience: number;
  rating: number;
  category: string;
};

type Role = {
  title: string;
  company: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  skills: Skill[];
};

interface SoftwareEngineer {
  name: string;
  bio: string;
  title: string;
  yearsOfExperience: number;
  skills: Skill[];
}

const me: SoftwareEngineer = {
  name: 'Ross Libby',
  bio: 'Senior Engineer with 12+ years of experience architecting high-throughput, TypeScript-driven ecosystems within data-heavy and regulated sectors (Fintech, Healthcare, Legaltech). Expert in building resilient Node.js microservices and type-safe data layers, paired with high-performance React/Next.js frontends. Proven track record of delivering end-to-end architecture spanning event-driven backend pipelines (Kafka/RabbitMQ) and complex, state-driven UIs across GCP, AWS, and Azure. A product-minded leader focused on clean architecture, scalable design systems, and bridging the gap between complex requirements and intuitive user experiences.',
  title: 'Senior Full Stack Engineer',
  yearsOfExperience: 12,
  skills: [
    {
      name: 'TypeScript',
      yearsOfExperience: 6,
      rating: 9,
      category: 'Languages & Frameworks',
    },
    {
      name: 'JavaScript (ES6+)',
      yearsOfExperience: 12,
      rating: 10,
      category: 'Languages & Frameworks',
    },
    {
      name: 'Node.js',
      yearsOfExperience: 12,
      rating: 9,
      category: 'Languages & Frameworks',
    },
    {
      name: 'GraphQL',
      yearsOfExperience: 9,
      rating: 8,
      category: 'Languages & Frameworks',
    }
  ],
};
