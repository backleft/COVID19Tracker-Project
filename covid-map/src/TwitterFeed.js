import React, { useEffect } from "react";

const TwitterContainer = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    document.getElementsByClassName("twitter-embed")[0].appendChild(script);
  }, []);

  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
      <a class="twitter-timeline" 
      data-lang="en" 
      data-width="200"
      data-height="300" 
      data-theme="dark" 
      href="https://twitter.com/CDCgov">
        Tweets by CDCgov
      </a> 
      <a class="twitter-timeline"
      data-lang="en" 
      data-width="200"
      data-height="300" 
      data-theme="dark"
      href="https://twitter.com/CAPublicHealth?ref_src=twsrc%5Etfw">
         Tweets by CAPublicHealth
      </a> 
      </div>
    </section>
  );
};

export default TwitterContainer
