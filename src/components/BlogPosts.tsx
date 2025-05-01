import React, { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface Article {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image: string;
  tag_list: string[];
  reading_time_minutes: number;
}

const BlogPosts = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles?username=darkmavis1980");
        if (!response.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await response.json();
        setArticles(data.slice(0, 6));
        setLoading(false);
      } catch (err) {
        console.error("Error fetching dev.to articles:", err);
        setError("Failed to load blog posts. Please try again later.");
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Tag color mapping
  const getTagColor = (index: number) => {
    const colors = [
      "bg-blue-100 text-blue-600",
      "bg-teal-100 text-teal-600",
      "bg-orange-100 text-orange-600",
      "bg-blue-100 text-blue-600",
      "bg-teal-100 text-teal-600",
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="blog" className="section bg-white">
      <div className="container">
        <h2 className="section-title">Latest Articles</h2>
        
        {error && <div className="text-center text-red-500 my-8">{error}</div>}
        
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="overflow-hidden h-[420px] border-2 border-blue-100">
                <Skeleton className="h-48 w-full" />
                <CardHeader>
                  <Skeleton className="h-6 w-3/4 mb-2" />
                  <Skeleton className="h-4 w-full" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-5/6" />
                </CardContent>
                <CardFooter>
                  <Skeleton className="h-10 w-full" />
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.map((article) => (
              <Card key={article.id} className="overflow-hidden h-full flex flex-col border-2 border-blue-100 hover:shadow-xl hover:border-blue-300 transition-all duration-300">
                {article.cover_image && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={article.cover_image} 
                      alt={article.title} 
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="line-clamp-2 text-blue-700">{article.title}</CardTitle>
                  <CardDescription>
                    Published on {formatDate(article.published_at)} • {article.reading_time_minutes} min read
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-muted-foreground line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {article.tag_list.slice(0, 3).map((tag, i) => (
                      <span key={i} className={`text-xs px-2 py-1 rounded-full ${getTagColor(i)}`}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      Read Article
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
        
        {!loading && articles.length > 0 && (
          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-blue-400 text-blue-600 hover:bg-blue-500 hover:text-white">
              <a 
                href="https://dev.to/darkmavis1980" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                View All Articles
              </a>
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogPosts;
