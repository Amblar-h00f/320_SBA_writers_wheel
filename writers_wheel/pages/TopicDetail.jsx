import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {Card,CardContent,CardDescription,CardFooter,CardHeader,CardTitle,} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { getTopicById, getRelatedTopics } from "@/lib/api";

export default function TopicDetail() {
  const { id } = useParams();
  const [topic, setTopic] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTopic() {
      setLoading(true);
      const t = await getTopicById(id);
      setTopic(t);
      if (t) {
        const rel = await getRelatedTopics(id);
        setRelated(rel);
      }
      setLoading(false);
    }
    fetchTopic();
  }, [id]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="text-slate-600 dark:text-slate-300">
          Loading topic...
        </div>
      </main>
    );
  }

  if (!topic) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="text-red-600 dark:text-red-400">Topic not found.</div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="flex items-center gap-2">
              <ArrowLeft size={18} />
              <span>Back to Wheel</span>
            </Button>
          </Link>
        </div>
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>{topic.title}</CardTitle>
              <CardDescription>
                Updated{" "}
                {new Date(topic.updatedAt).toLocaleDateString()} | Category:{" "}
                {topic.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="prose dark:prose-invert max-w-none">
              <p>{topic.fullDescription}</p>
              <h3>Writing Prompts</h3>
              <ul>
                {topic.writingPrompts.map((prompt, idx) => (
                  <li key={idx}>{prompt}</li>
                ))}
              </ul>
              <h3>Resources</h3>
              <ul>
                {topic.resources.map((res, idx) => (
                  <li key={idx}>
                    <a
                      href={res.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-blue-600 dark:text-blue-400"
                    >
                      {res.title}
                    </a>{" "}
                    <span className="text-xs text-slate-500">
                      ({res.type})
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          {related.length > 0 && (
            <div>
              <h2 className="mb-4 text-xl font-semibold text-slate-800 dark:text-slate-100">
                Related Topics
              </h2>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Card key={rel.id}>
                    <CardHeader>
                      <CardTitle>{rel.title}</CardTitle>
                      <CardDescription>
                        Updated{" "}
                        {new Date(rel.updatedAt).toLocaleDateString()}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-slate-600 dark:text-slate-300 line-clamp-3">
                        {rel.shortDescription}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Link to={`/topics/${rel.id}`} className="w-full">
                        <Button variant="outline" className="w-full">
                          View Topic
                        </Button>
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
