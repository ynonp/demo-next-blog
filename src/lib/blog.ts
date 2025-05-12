export type BlogPost = {
  slug: string,
  title: string,
  fulltext: string,
}

export type BlogPostSummary = {
  slug: string,
  title: string,  
}

const posts = [
  {
    slug: "exploring-the-cosmos",
    title: "Exploring the Cosmos: A Beginner's Guide",
    fulltext: "The universe is a vast and mysterious place, filled with wonders waiting to be discovered. In this beginner's guide, we'll take a journey through the cosmos, exploring galaxies, stars, and planets. From the Big Bang to black holes, we'll cover the basics of astronomy and share tips for stargazing in your own backyard."
  },
  {
    slug: "ai-revolution-unraveled",
    title: "The AI Revolution Unraveled",
    fulltext: "Artificial Intelligence is transforming the world at an unprecedented pace. This post dives into the history of AI, its current applications, and what the future might hold. We'll explore how AI is reshaping industries like healthcare, education, and transportation, while addressing the ethical questions that come with such powerful technology."
  },
  {
    slug: "sustainable-living-101",
    title: "Sustainable Living 101",
    fulltext: "Living sustainably doesn't have to be complicated. In this post, we break down practical steps anyone can take to reduce their environmental footprint. From composting to cutting energy use, learn how small changes can make a big difference for the planet, all while saving money and improving your quality of life."
  },
  {
    slug: "quantum-computing-basics",
    title: "Quantum Computing: The Basics Explained",
    fulltext: "Quantum computing promises to revolutionize technology, but what exactly is it? This article explains the fundamentals of quantum mechanics, qubits, and superposition in simple terms. Discover how quantum computers differ from classical ones and why they could solve problems that are currently impossible."
  },
  {
    slug: "history-of-space-travel",
    title: "A Brief History of Space Travel",
    fulltext: "From Sputnik to SpaceX, humanity's journey into space is a story of innovation and ambition. This post traces the key milestones in space exploration, including the Apollo missions, the International Space Station, and the rise of private space companies. Join us as we look back—and forward—to the next frontier."
  }
]

export function listPosts() {
  return posts.map(p => ({slug: p.slug, title: p.title}))
}

export function getPost(slug: string) {
  return posts.filter(p => p.slug === slug)[0];
}
