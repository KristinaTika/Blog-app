const container = document.querySelector(".container");

export const renderAboutPage = () => {

    container.innerHTML = "";

    const about = document.createElement("div");
    about.innerHTML = `
    <div>
        <h1> ABOUT </h1>
        <p>
            A blog (a truncation of the expression "weblog") is a discussion or informational website published on the World Wide Web consisting of discrete, often informal diary-style text entries ("posts"). Posts are typically displayed in reverse chronological order, so that the most recent post appears first, at the top of the web page. Until 2009, blogs were usually the work of a single individual,[citation needed] occasionally of a small group, and often covered a single subject or topic. In the 2010s, "multi-author blogs" (MABs) have developed, with posts written by large numbers of authors and sometimes professionally edited. MABs from newspapers, other media outlets, universities, think tanks, advocacy groups, and similar institutions account for an increasing quantity of blog traffic. The rise of Twitter and other "microblogging" systems helps integrate MABs and single-author blogs into the news media. Blog can also be used as a verb, meaning to maintain or add content to a blog.

            The emergence and growth of blogs in the late 1990s coincided with the advent of web publishing tools that facilitated the posting of content by non-technical users who did not have much experience with HTML or computer programming. Previously, a knowledge of such technologies as HTML and File Transfer Protocol had been required to publish content on the Web, and as such, early Web users tended to be hackers and computer enthusiasts. In the 2010s, the majority are interactive Web 2.0 websites, allowing visitors to leave online comments, and it is this interactivity that distinguishes them from other static websites. In that sense, blogging can be seen as a form of social networking service. Indeed, bloggers do not only produce content to post on their blogs, but also often build social relations with their readers and other bloggers. However, there are high-readership blogs which do not allow comments.

        </p>
    </div>
    <div>
        <h1> OUR STORY </h1>
        <p>
            Before blogging became popular, digital communities took many forms, including Usenet, commercial online services such as GEnie, Byte Information Exchange (BIX) and the early CompuServe, e-mail lists, and Bulletin Board Systems (BBS). In the 1990s, Internet forum software, created running conversations with "threads". Threads are topical connections between messages on a virtual "corkboard". From 14 June 1993, Mosaic Communications Corporation maintained their "What’s New" list of new websites, updated daily and archived monthly. The page was accessible by a special "What's New" button in the Mosaic web browser.

            The modern blog evolved from the online diary, where people would keep a running account of the events in their personal lives. Most such writers called themselves diarists, journalists, or journalers. Justin Hall, who began personal blogging in 1994 while a student at Swarthmore College, is generally recognized as one of the earlier bloggers, as is Jerry Pournelle. Dave Winer's Scripting News is also credited with being one of the older and longer running weblogs. The Australian Netguide magazine maintained the Daily Net News on their web site from 1996. Daily Net News ran links and daily reviews of new websites, mostly in Australia.
        
            Another early blog was Wearable Wireless Webcam, an online shared diary of a person's personal life combining text, digital video, and digital pictures transmitted live from a wearable computer and EyeTap device to a web site in 1994. This practice of semi-automated blogging with live video together with text was referred to as sousveillance, and such journals were also used as evidence in legal matters. Early blogs were simply manually updated components of common Websites. However, the evolution of electronic and software tools to facilitate the production and maintenance of Web articles posted in reverse chronological order made the publishing process feasible to a much larger, less technical, population.
        </p>
    </div>
    `;
    container.appendChild(about);
}
