import "./blog.scss";
import Blogcard from "../BlogCard/blogcard";
import model1 from "../../assets/blogModel1.webp";
import model2 from "../../assets/blogModel2.webp";
import model3 from "../../assets/blogModel3.webp";

import Carousel from "react-elastic-carousel";

function Blog() {
  return (
    <div className="blog-container ">
      <h1>Our Blog</h1>
      <Carousel 
        breakPoints={[
          { width: 0, itemsToShow: 1},
          { width: 800, itemsToShow: 2},
          { width: 1212, itemsToShow: 3},
          { width: 1616, itemsToShow: 4}
        ]}
      >
        <Blogcard
          image={model1}
          date="18th July, 2022"
          title="Things You Should Know About The Modeling Industry In 2022"
          paragraph="Every year, the modeling industry changes, and so do the things that aspiring models should know to be successful. Therefore, it's essential to educate yourself about the industry to keep up with the times and be prepared for what is coming ahead."
        />
        
        <Blogcard
          image={model2}
          date="20th Jun, 2022"
          title="8 Simple Tips to Help You Prepare For Your Next Photoshoot"
          paragraph="A photoshoot is an exciting opportunity for models to show their creativity and personality. However, it can also be a challenging experience if you don't prepare properly!"
        />
        
        <Blogcard
          image={model3}
          date="1st May, 2022"
          title="Five Ways to Use Social Media To Start Your Modeling Career"
          paragraph="It's not a secret that social media is one of the most powerful tools in marketing these days. It has been proven time and again that people who use it are more likely to buy your products or services. Now, it's also being used as a car"
        />
      </Carousel>

      <button className="blog-button">Read All Blogs</button>
    </div>
  );
}

export default Blog;
