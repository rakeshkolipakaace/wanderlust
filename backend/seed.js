import mongoose from 'mongoose';
import Post from './models/post.js';

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://mongodb:27017/wanderlust";

const seedData = [
  {
    authorName: "John Doe",
    title: "Exploring the Alps",
    imageLink: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=60",
    categories: ["Travel", "Nature", "Adventure"],
    description: "A wonderful journey through the snow-capped mountains and pristine valleys.",
    isFeaturedPost: true
  },
  {
    authorName: "Jane Smith",
    title: "The Quiet Beauty of Kyoto",
    imageLink: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&auto=format&fit=crop&q=60",
    categories: ["Travel", "City", "Landmarks"],
    description: "Discovering peace in the ancient temples and colorful gardens of Japan's former capital.",
    isFeaturedPost: true
  },
  {
    authorName: "Rakesh",
    title: "Modern Web Development",
    imageLink: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60",
    categories: ["Technology", "Learning"],
    description: "A deep dive into the latest trends in coding and digital design.",
    isFeaturedPost: false
  },
  {
    authorName: "Alice",
    title: "Perfect Beach Getaways",
    imageLink: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=60",
    categories: ["Travel", "Beaches", "Nature"],
    description: "Sun, sand, and surf: the top destinations for your next summer holiday.",
    isFeaturedPost: false
  }
];

async function seed() {
  try {
    console.log("Connecting to Database...");
    await mongoose.connect(MONGODB_URI);
    console.log("Connected.");

    console.log("Deleting old data...");
    await Post.deleteMany({});

    console.log("Inserting new seed data...");
    await Post.insertMany(seedData);

    console.log("Seeding process completed successfully! 🎉");
    process.exit(0);
  } catch (err) {
    console.error("Error seeding data:", err);
    process.exit(1);
  }
}

seed();
