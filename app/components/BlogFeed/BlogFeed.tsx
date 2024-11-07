// components/BlogFeed.tsx
import { useEffect } from 'react';

const BlogFeed = () => {
  useEffect(() => {
    const existingScript = document.getElementById('substack-feed-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'substack-feed-script';
      script.src = 'https://substackapi.com/embeds/feed.js';
      script.async = true;
      document.body.appendChild(script);
    }

    (window as any).SubstackFeedWidget = {
        substackUrl: 'geckogen.substack.com',
        posts: 3,
      };      
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div id="substack-feed-embed" className="w-full max-w-md"></div>
    </div>
  );
};

export default BlogFeed;
