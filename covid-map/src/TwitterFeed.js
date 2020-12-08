import { TwitterTimelineEmbed} from 'react-twitter-embed';
import React from "react";

import './TwitterFeed.css';

const timelineFeed = () => {
    return (
        <section className="twitterContainer">
            <div className="twitter-embed">
                <TwitterTimelineEmbed
                sourceType="profile"
                screenName="WHO"
                userId={14499829}
                options={{
                    tweetLimit: "2",
                    width: "100%",
                    height: "100%"
                }}
                theme="dark"
                noHeader="true"
                noFooter="true"
                noBorders="true"
                />
            </div>
        </section>
        // <TwitterTimelineEmbed 
        // sourceType="profile"
        // userId={14499829}
        // options={{height: 400}}
        // theme="dark"
        // />
    );
}
export default timelineFeed;