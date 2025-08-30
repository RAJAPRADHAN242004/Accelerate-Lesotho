
import "../css/Blog.css";
import blog from "../assets/blog.jpg";
import Header from "./Header"; 

const blogPosts = [
  {
    id: 1,
    title: "Empowering SMEs in Lesotho",
    date: "August 15, 2025",
    excerpt: "Discover how Accelerate Lesotho is supporting small and medium-sized enterprises through workshops, funding, and training initiatives.",
  },
  {
    id: 2,
    title: "Trade Missions: Unlocking Global Potential",
    date: "July 20, 2025",
    excerpt: "Learn about our recent multi-sector trade mission and the impact it had on local businesses expanding to international markets.",
  },
  {
    id: 3,
    title: "Lesotho's Startup Ecosystem in 2025",
    date: "June 30, 2025",
    excerpt: "An overview of the rapidly evolving startup scene in Lesotho and how Accelerate Lesotho is helping it thrive.",
  },
];

function Blog() {
  return (
    <>
      <Header /> 

      <div
        className="blog-section"
        style={{ backgroundImage: `url(${blog})` }}
      >
        <div className="blog-overlay">
          <h1 className="blog-title">Our Blog</h1>
          <p className="blog-subtitle">Insights, updates, and success stories from Accelerate Lesotho</p>

          <div className="blog-posts">
            {blogPosts.map((post) => (
              <div key={post.id} className="blog-card">
                <h2 className="blog-card-title">{post.title}</h2>
                <p className="blog-card-date">{post.date}</p>
                <p className="blog-card-excerpt">{post.excerpt}</p>
                <button className="read-more-btn">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;
