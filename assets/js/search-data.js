// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "This is a description of the page. You can modify it in &#39;_pages/cv.md&#39;. You can also change or remove the top pdf download button.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-illustration",
              title: "illustration",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/illustration/";
              },
            },{id: "dropdown-animation",
              title: "animation",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/animation/";
              },
            },{id: "dropdown-character-design",
              title: "character design",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/character/";
              },
            },{id: "nav-commissions",
          title: "commissions",
          description: "Commission Information",
          section: "Navigation",
          handler: () => {
            window.location.href = "/commissions/";
          },
        },{id: "nav-friends",
          title: "friends",
          description: "Collaborations &amp; Friends",
          section: "Navigation",
          handler: () => {
            window.location.href = "/friends/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "news-christo-fascism-is-boring-can-we-have-socialism-now-lol",
          title: 'christo-fascism is boring. can we have socialism now? lol',
          description: "",
          section: "News",},{id: "news-osamu-tezuka-and-mark-merlino-sy-sable-and-some-other-people-at-an-early-anime-or-furry-convention-mark-sy-was-a-person-very-involved-in-the-original-emergence-of-what-came-to-be-known-as-furcons-him-his-husband-and-ken-coug-r-and-other-artists-and-many-other-people-i-got-to-draw-a-sketch-of-him-and-his-husband-as-their-fursonas-with-him-wearing-the-robin-hood-hat-when-they-spoke-about-con-organizing-when-they-came-to-san-jose-further-confusion-sadly-later-that-same-year-mark-died-con-spaces-are-overwhelming-to-me-personally-and-cost-a-lot-of-money-baseline-anyway-i-m-curious-how-con-spaces-and-international-creative-art-communities-can-organize-sideways-i-m-sure-in-the-day-to-day-no-one-involved-in-organizing-room-parties-that-spun-off-from-the-main-scifi-cons-into-animation-specific-then-furry-specific-spaces-knew-they-were-making-a-gathering-place-for-statistically-a-majority-queer-and-disabled-neurodivergent-people-to-party-and-express-but-retrospectively-it-s-pretty-self-evident-also-there-s-stats-it-s-cool-that-there-are-so-many-organizing-skills-people-develop-in-location-specific-and-interconnected-networks-of-people-that-make-the-cons-function-it-seems-like-a-space-where-many-of-the-terminally-online-can-physically-gather-this-is-an-important-kind-of-space-for-people-for-different-reasons-than-when-the-photo-shared-was-taken-the-interests-shared-are-timeless-i-think-but-the-context-is-all-changed-and-like-public-places-since-forever-there-is-actually-a-lot-of-diversity-and-conflict-among-people-who-attend-these-spaces-i-ve-personally-chased-down-someone-who-decided-to-try-and-wear-nazi-imperial-sun-flag-attire-at-a-furcon-informing-con-staff-and-getting-them-kicked-out-there-s-furries-making-intentional-party-spaces-for-bipoc-at-and-or-after-con-times-while-a-crackdown-on-pornography-queerness-and-basic-sex-ed-rears-up-many-con-spaces-have-intentional-after-dark-market-spaces-for-people-to-share-their-erotic-art-and-celebrate-sexual-expression-its-a-messy-cultural-space-i-want-to-see-more-furry-reporters-who-goes-to-convention-spaces-maybe-not-just-fur-cons-but-people-made-spaces-to-do-some-walking-around-and-talking-to-people-maybe-some-surveys-short-interviews-highlight-musicians-dancers-idk-sometimes-people-try-and-infiltrate-fur-cons-to-get-video-content-of-them-harassing-people-to-reaction-and-there-ve-been-targeted-attacks-like-gas-attacks-and-other-bomb-threats-and-the-like-after-this-owo-bulge-bullets-stuff-i-worry-i-also-worry-about-the-pride-parade-tm-ification-of-furcons-the-sponsored-by-budwizard-of-it-all-almost-feels-inevitable-because-furcons-are-massive-and-generate-a-lot-of-money-and-yet-we-re-just-fucking-weird-and-gross-enough-for-no-one-to-still-want-to-grab-hands-force-squeeze-money-out-of-us-as-a-clear-and-easy-to-define-category-of-consumers-bc-are-we-like-wtf-are-we-even-yet-so-i-think-a-news-show-from-within-community-it-could-be-a-beautiful-thing-especially-if-the-newscaster-told-people-to-just-make-up-headlines-about-things-other-people-would-insist-are-imaginary-sometimes-i-think-one-of-the-largest-draws-conservatism-has-is-the-quick-easy-answer-for-what-to-fear-and-it-s-massively-conditioned-an-impediment-to-the-capacity-people-have-to-imagine-proposing-reparations-or-implementing-more-social-support-in-the-us-for-instance-has-lot-of-fear-or-that-s-impossible-response-and-a-lack-of-here-s-exactly-what-that-would-look-like-actually-it-would-be-awesome-and-way-more-simple-and-fun-than-what-s-happening-now-not-that-interviewing-furries-would-change-that-just-that-at-some-point-in-the-fairly-recent-past-some-people-in-a-hotel-lobby-decided-to-try-and-translate-cartoons-together-on-a-copy-of-a-copy-of-a-vhs-of-something-and-someone-else-made-and-wore-a-leather-dominatrix-looking-version-of-a-deer-they-called-the-bambioid-and-now-furcons-are-just-a-reality-it-s-so-interesting-and-now-while-creativity-still-seems-to-be-one-of-the-primary-focuses-in-furry-conventions-there-s-a-real-money-barrier-i-know-a-lot-of-furries-who-barely-scrape-by-and-seen-the-jokes-about-furries-who-work-in-aerospace-engineering-spending-10k-on-their-fursuit-funded-by-murdering-children-the-income-disparity-and-role-of-anonymity-in-physical-public-space-is-one-of-those-topics-in-furry-fandom-im-very-curious-about-but-i-dont-go-to-cons-since-they-cost-money-and-tbh-i-cant-afford-that-anyway-i-just-wanted-to-share-this-photo-because-i-think-it-s-cool-here-s-info-about-the-neat-space-weasels-mark-made-i-started-drawing-cartoons-again-after-my-head-injury-ten-years-ago-i-m-so-glad-i-did-all-i-want-to-do-is-animate-wiggle-lines-staying-employed-seems-impossible-to-me-50k-sign-on-bonuses-for-ice-agents-disgusting-anyway-another-world-is-possible-yay-for-people-making-our-own-art-and-expressions",
          title: 'Osamu Tezuka and Mark Merlino / Sy Sable and some other people at...',
          description: "",
          section: "News",},{id: "news-commissions-open-hoping-to-work-on-more-short-looping-animations-to-have-examples-for-stickers-and-emotes-contact-me-on-bluesky-kaivey-telegram-kaiivey-or-email-o-h-w-o-a-h-g-m-a-i-l-c-o-m",
          title: 'Commissions open. Hoping to work on more short looping animations to have examples...',
          description: "",
          section: "News",},{
        id: 'social-bluesky',
        title: 'Bluesky',
        section: 'Socials',
        handler: () => {
          window.open("https://bsky.app/profile/kaivey.bsky.social", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@Kaivey", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://vgen.co/kaivey", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
