import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "../components/ui/card";
import { ArrowLeft, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { getAllTopics } from "../lib/api";

export default function TopicsPage() {
  const [topics, setTopics] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllTopics().then((data) => {
      setTopics(data);
      setLoading(false);
    });
  }, []);

  // Group topics by category
  const categorizedTopics = {};
  topics.forEach((topic) => {
    const category = topic.category || "Uncategorized";
    if (!categorizedTopics[category]) {
      categorizedTopics[category] = [];
    }
    categorizedTopics[category].push(topic);
  });

  if (loading) {
    return <div className="p-8 text-center">Loading topics...</div>;
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              <span>Back to Wheel</span>
            </Button>
          </Link>
        </div>

        <div className="mb-12">
          <h1 className="mb-4 text-3xl font-bold text-slate-800 dark:text-slate-100">
            Browse All Topics
          </h1>
          <p className="mb-6 text-lg text-slate-600 dark:text-slate-300">
            Explore our collection of AI-generated writing topics across various categories
          </p>

          <div className="relative max-w-md">
            <Search className="absolute w-5 h-5 text-slate-400 left-3 top-3" />
            <Input type="search" placeholder="Search topics..." className="pl-10" />
          </div>
        </div>

        <div className="space-y-12">
          {Object.entries(categorizedTopics).map(([category, topicsList]) => (
            <div key={category}>
              <h2 className="mb-6 text-2xl font-semibold text-slate-800 dark:text-slate-100">
                {category}
              </h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topicsList.map((topic) => (
                  <Card key={topic.id} className="overflow-hidden transition-shadow hover:shadow-md">
                    <CardHeader className="pb-2">
                      <CardTitle>{topic.title}</CardTitle>
                      <CardDescription>
                        Updated {new Date(topic.updatedAt).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 line-clamp-3">
                        {topic.shortDescription}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/topics/${topic.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Topic
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}