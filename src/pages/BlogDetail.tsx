import { useParams, Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, User, ArrowLeft } from "lucide-react";
import { blogPosts } from "@/components/Blog";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const BlogDetail = () => {
  const { blogId } = useParams();
  const post = blogPosts.find(post => post.id === Number(blogId));

  if (!post) {
    return <div className="container mx-auto px-4 py-20">Blog post not found</div>;
  }

  const instagramReels = [
    {
      id: 1,
      title: "Eco-friendly Cleaning Tips",
      embedUrl: "https://www.instagram.com/reel/ABC123/embed",
      thumbnail: "/lovable-uploads/27c54fb4-d57f-47bd-aa74-526a660110ae.png"
    },
    {
      id: 2,
      title: "Product Demo",
      embedUrl: "https://www.instagram.com/reel/DEF456/embed",
      thumbnail: "/lovable-uploads/89aef022-140e-4bac-ba01-02bb566d04c1.png"
    },
    {
      id: 3,
      title: "Customer Reviews",
      embedUrl: "https://www.instagram.com/reel/GHI789/embed",
      thumbnail: "/lovable-uploads/95e6e5bd-b034-4a80-9a71-dd0cc4a20887.png"
    }
  ];

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          
          <Card className="mb-12">
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

          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Related Instagram Reels</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {instagramReels.map((reel) => (
                <div key={reel.id} className="rounded-lg overflow-hidden shadow-md">
                  <div className="aspect-video relative">
                    <img
                      src={reel.thumbnail}
                      alt={reel.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Button variant="secondary" className="font-medium">
                        Watch Reel
                      </Button>
                    </div>
                  </div>
                  <div className="p-4 bg-white">
                    <h3 className="font-medium text-lg">{reel.title}</h3>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Share Your Thoughts</h2>
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col gap-4">
                  <p className="text-accent/80">
                    Join the conversation! Share your cleaning experiences and tips with our community.
                    Follow us on Instagram @megalightindia for more updates and cleaning inspiration.
                  </p>
                  <div className="flex gap-4">
                    <Button>
                      Share on Facebook
                    </Button>
                    <Button variant="outline">
                      Share on Instagram
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;