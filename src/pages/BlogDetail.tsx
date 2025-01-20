import { useParams } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User } from "lucide-react";
import { blogPosts } from "@/components/Blog";
import Navbar from "@/components/Navbar";

const BlogDetail = () => {
  const { blogId } = useParams();
  const post = blogPosts.find(post => post.id === Number(blogId));

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Blog post not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <Card className="max-w-4xl mx-auto">
          <div className="aspect-video relative overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
          <CardContent className="p-6">
            <div className="flex items-center gap-4 text-sm text-accent/60 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString()}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
            <p className="text-accent/80 mb-6">{post.description}</p>
            <div className="prose max-w-none">
              {post.content.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-accent/80">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default BlogDetail;