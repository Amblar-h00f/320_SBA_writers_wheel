
const MOCK_TOPICS = [
  {
    id: "1",
    title: "The Impact of Quantum Computing on Cybersecurity",
    shortDescription: "Explore how quantum computing advancements are reshaping the cybersecurity landscape.",
    fullDescription:
      "Quantum computing represents a paradigm shift in computational power, with profound implications for cybersecurity. As quantum computers become more powerful, they threaten to break many of the cryptographic systems that currently secure our digital infrastructure.\n\nThis topic explores the race between quantum computing development and quantum-resistant cryptography. It examines how organizations are preparing for a post-quantum world and the new security models emerging in response to this technological revolution.\n\nThe intersection of quantum physics and information security raises fascinating questions about the future of privacy, data protection, and digital trust in an increasingly connected world.",
    category: "Technology",
    resources: [
      {
        title: "Quantum Computing and Cybersecurity",
        description: "A comprehensive overview from the National Institute of Standards and Technology",
        url: "https://csrc.nist.gov/Projects/post-quantum-cryptography",
        type: "website",
      },
      {
        title: "Quantum Computing: Progress and Prospects",
        description: "In-depth book on quantum computing developments",
        url: "https://www.nap.edu/catalog/25196/quantum-computing-progress-and-prospects",
        type: "book",
      },
      {
        title: "The Coming Quantum Computing Security Crisis",
        description: "Article exploring the security implications",
        url: "https://www.technologyreview.com/2019/01/09/137439/quantum-computers-pose-a-security-threat-that-were-still-totally-unprepared-for/",
        type: "article",
      },
    ],
    writingPrompts: [
      "How might quantum computing change the way we think about data privacy?",
      "Describe a day in the life of a cybersecurity professional in a post-quantum world.",
      "Compare and contrast current encryption methods with quantum-resistant alternatives.",
      "What ethical considerations should guide the development of quantum computing technology?",
    ],
    freshness: 92,
    createdAt: "2023-10-15T12:00:00Z",
    updatedAt: "2023-11-01T09:30:00Z",
  },
  {
    id: "2",
    title: "Regenerative Agriculture and Climate Change",
    shortDescription: "Investigate how regenerative farming practices could help mitigate climate change.",
    fullDescription:
      "Regenerative agriculture represents a holistic approach to farming that focuses on soil health, biodiversity, and ecosystem restoration. Unlike conventional agriculture, which often depletes soil and contributes to greenhouse gas emissions, regenerative practices aim to sequester carbon and enhance resilience.\n\nThis topic explores the scientific principles behind regenerative agriculture, its potential impact on climate change mitigation, and the economic and social factors influencing its adoption. It examines case studies of successful implementation across different regions and farming systems.\n\nAs the world grapples with the dual challenges of feeding a growing population and addressing climate change, regenerative agriculture offers promising solutions that merit deeper investigation and discussion.",
    category: "Environment",
    resources: [
      {
        title: "Regenerative Agriculture: A Solution to Climate Change?",
        description: "Research paper on carbon sequestration potential",
        url: "https://rodaleinstitute.org/science/articles/regenerative-agriculture-and-the-soil-carbon-solution/",
        type: "article",
      },
      {
        title: "Dirt to Soil: One Family's Journey into Regenerative Agriculture",
        description: "First-hand account of transitioning to regenerative methods",
        url: "https://www.chelseagreen.com/product/dirt-to-soil/",
        type: "book",
      },
      {
        title: "Regeneration International",
        description: "Organization dedicated to promoting regenerative agriculture worldwide",
        url: "https://regenerationinternational.org/",
        type: "website",
      },
    ],
    writingPrompts: [
      "Compare the long-term sustainability of conventional versus regenerative agricultural systems.",
      "How might widespread adoption of regenerative agriculture change rural economies?",
      "Write a narrative from the perspective of a farmer transitioning to regenerative practices.",
      "Analyze the policy changes needed to incentivize regenerative agriculture.",
    ],
    freshness: 85,
    createdAt: "2023-09-20T14:30:00Z",
    updatedAt: "2023-10-25T11:15:00Z",
  },
  {
    id: "3",
    title: "The Evolution of Digital Storytelling",
    shortDescription: "Examine how technology is transforming narrative forms and storytelling traditions.",
    fullDescription:
      "Digital storytelling represents the convergence of traditional narrative techniques with new media technologies, creating novel forms of expression and audience engagement. From interactive fiction to virtual reality experiences, digital platforms are reshaping how stories are created, shared, and experienced.\n\nThis topic explores the historical evolution of storytelling across different media, the unique affordances of digital platforms, and the changing relationship between creators and audiences in participatory storytelling environments. It examines how digital tools democratize narrative creation while also presenting new challenges for storytellers.\n\nAs technology continues to evolve, digital storytelling raises important questions about the future of literature, the boundaries between different media forms, and the enduring human need for meaningful narratives in an increasingly digital world.",
    category: "Arts & Culture",
    resources: [
      {
        title: "The New Digital Storytelling",
        description: "Comprehensive overview of digital narrative forms",
        url: "https://www.abc-clio.com/products/a3582p/",
        type: "book",
      },
      {
        title: "Electronic Literature Collection",
        description: "Archive of digital literary works",
        url: "https://collection.eliterature.org/",
        type: "website",
      },
      {
        title: "The Rise of Virtual Reality in Storytelling",
        description: "Analysis of immersive narrative techniques",
        url: "https://www.wired.com/story/future-of-reality-in-storytelling/",
        type: "article",
      },
    ],
    writingPrompts: [
      "How does the interactive nature of digital storytelling change the traditional author-reader relationship?",
      "Create a story that could only be told effectively through a digital medium.",
      "Analyze how a traditional story might be transformed when adapted for an interactive platform.",
      "What elements of traditional storytelling remain essential in digital narratives?",
    ],
    freshness: 78,
    createdAt: "2023-08-05T09:45:00Z",
    updatedAt: "2023-10-10T16:20:00Z",
  },
  {
    id: "4",
    title: "Neurodiversity in the Workplace",
    shortDescription: "Explore how organizations are adapting to support neurodivergent employees.",
    fullDescription:
      "Neurodiversity refers to the natural variation in human brain function, encompassing conditions such as autism, ADHD, dyslexia, and others. As awareness grows, organizations are increasingly recognizing the unique strengths that neurodivergent individuals bring to the workplace, while also implementing accommodations to address challenges.\n\nThis topic examines the business case for neurodiversity, successful workplace inclusion programs, and the lived experiences of neurodivergent professionals across different industries. It explores how traditional workplace structures and expectations can be reimagined to create more inclusive environments that benefit all employees.\n\nThe neurodiversity movement represents a shift from a deficit-based view of neurological differences to a strength-based perspective that values cognitive diversity as an asset rather than a liability.",
    category: "Society",
    resources: [
      {
        title: "NeuroTribes: The Legacy of Autism and the Future of Neurodiversity",
        description: "Award-winning book on the history and future of neurodiversity",
        url: "https://www.penguinrandomhouse.com/books/313183/neurotribes-by-steve-silberman/",
        type: "book",
      },
      {
        title: "Neurodiversity at Work",
        description: "Harvard Business Review article on workplace inclusion",
        url: "https://hbr.org/2017/05/neurodiversity-as-a-competitive-advantage",
        type: "article",
      },
      {
        title: "AANE - Asperger/Autism Network",
        description: "Resources for neurodivergent individuals and employers",
        url: "https://www.aane.org/resources/adults/neurodiversity-employment/",
        type: "website",
      },
    ],
    writingPrompts: [
      "How might workplace design evolve to better accommodate neurodivergent employees?",
      "Interview a neurodivergent professional about their career journey and workplace experiences.",
      "Analyze the potential economic benefits of increased neurodiversity in specialized fields.",
      "Explore how education systems could better prepare neurodivergent students for the workplace.",
    ],
    freshness: 88,
    createdAt: "2023-10-01T10:15:00Z",
    updatedAt: "2023-10-30T14:45:00Z",
  },
  {
    id: "5",
    title: "The Ethics of Genetic Engineering",
    shortDescription: "Delve into the moral questions surrounding human genetic modification.",
    fullDescription:
      "Advances in genetic engineering technologies like CRISPR-Cas9 have made it increasingly feasible to modify the human genome, raising profound ethical questions about the boundaries of scientific intervention in human biology. From treating genetic diseases to enhancing human capabilities, these technologies offer both tremendous promise and significant risks.\n\nThis topic explores the ethical frameworks for evaluating genetic interventions, the distinction between therapeutic and enhancement applications, and the social implications of genetic engineering technologies. It examines perspectives from diverse stakeholders including scientists, ethicists, religious leaders, and disability rights advocates.\n\nAs genetic engineering capabilities continue to advance, society faces critical decisions about how these technologies should be regulated, who should have access to them, and what limits, if any, should be placed on their application to the human genome.",
    category: "Science & Ethics",
    resources: [
      {
        title: "The Ethics of Genetic Engineering",
        description: "Philosophical analysis of key ethical questions",
        url: "https://plato.stanford.edu/entries/ethics-genetic-engineering/",
        type: "article",
      },
      {
        title: "A Crack in Creation: Gene Editing and the Unthinkable Power to Control Evolution",
        description: "Book by CRISPR pioneer Jennifer Doudna",
        url: "https://www.penguinrandomhouse.com/books/549781/a-crack-in-creation-by-jennifer-a-doudna-and-samuel-h-sternberg/",
        type: "book",
      },
      {
        title: "National Human Genome Research Institute",
        description: "Government resource on ethical, legal and social implications",
        url: "https://www.genome.gov/about-genomics/policy-issues",
        type: "website",
      },
    ],
    writingPrompts: [
      "Should there be different ethical standards for germline versus somatic genetic modifications?",
      "How might widespread genetic engineering affect concepts of human identity and diversity?",
      "Write a dialogue between stakeholders with different perspectives on genetic enhancement.",
      "Analyze how access to genetic engineering technologies might impact social equality.",
    ],
    freshness: 90,
    createdAt: "2023-09-10T11:30:00Z",
    updatedAt: "2023-10-28T13:10:00Z",
  },
]

// API functions
export async function getTopics() {
  // In production, this would fetch from MongoDB
  return MOCK_TOPICS;
}

export async function getAllTopics() {
  // In production, this would fetch all topics with pagination
  return MOCK_TOPICS;
}

export async function getTopicById(id) {
  // In production, this would fetch from MongoDB by ID
  const topic = MOCK_TOPICS.find((t) => t.id === id);
  if (!topic) {
    // Instead of throwing, return null for easier handling in React
    return null;
  }
  return topic;
}

export async function getRelatedTopics(topicId) {
  // In production, this would use a recommendation algorithm
  // For now, just return other topics in the same category
  const currentTopic = await getTopicById(topicId);
  if (!currentTopic) return [];
  return MOCK_TOPICS.filter(
    (topic) => topic.category === currentTopic.category && topic.id !== topicId
  ).slice(0, 3);
}

// Function to generate a new topic using AI (mocked for Vite/React)
export async function generateNewTopic(category) {
 
  return {
    id: Math.random().toString(36).substring(2, 9),
    title: "AI Generated Topic",
    shortDescription: "This topic was generated by AI",
    fullDescription: "This is a mock AI-generated topic for development.",
    category: category || "General",
    resources: [],
    writingPrompts: [],
    freshness: 100,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

// Function to update topics based on current events (mocked)
export async function updateTopicsFromCurrentEvents() {
  // In production, this would:
  // 1. Fetch current news from APIs
  // 2. Use AI to analyze and generate relevant topics
  // 3. Update the database with new topics
  // For development, just log and resolve
  console.log("Topics updated from current events (mock)");
}
