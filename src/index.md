---
title: asdf

headline: "my name is keagan"
subheading: "i maintain web apps using javascript, perl and other technologies. this site contains links to my projects, and my profiles on github and linkedin"

heading-links:
    -
        link: "https://www.linkedin.com/in/fkeagan"
        link-text: "linkedin profile"

    -
        link: "https://github.com/fkscott"
        link-text: "projects on github"
github: 
projects:
    -
        title: shelf talker
        link: https://wm-shelf-talker.vercel.app/
        icon: svelte
        description: "A Svelte app to generate shelf talkers for use at The Wine Merchant in Baltimore, Maryland. All processing is done client-side, and uses HTML2Canvas to create data URLs to export the generated shelf talkers."
        link-text: "try the app"
    -
        title: color quiz
        link: https://colorquiz.vercel.app/ 
        icon: react
        description: A quiz to guess the hex code of he color shown on the screen. Originally based on a React interview question, but expanded with a little bit more functionality.
        link-text: "view source"
    -
        title: incipiam
        link: https://github.com/fkscott/incipiam
        icon: gnubash
        description: "Using bash and launchd, this script launches and closes certain processes when I connect my Mac to my USB-C monitor."
        link-text: "view source"

    -
        title: acorn supply 
        link: https://fkscott.github.io/acorn/
        icon: html5
        description: "Website design for a local Baltimore construction company. I was tasked with creating a single page site that highlighted their certifications, NAICS codes, and contact information."
        link-text: "visit website"

    - 
        title: obsidian youtube video clipper
        link: https://gist.github.com/fkscott/ae1dac881f0b1e0bfa1d76213b24eb1a
        icon: javascript
        description: "Bookmarklet to build obsidian notes with links to videos i want to watch later."
        link-text: "view source"


about:
    -
        section: work experience 
        text: "I am currently working at ECS Tuning, an e-commerce platform for german auto parts. I am a full stack engineer on the customer facing team. Each day I use Perl, Template Toolkit 2, JQuery and a little bit of SQL. Before taking the software engineering role, I was also a QA engineer and a customer service rep at the same company! Visit my LinkedIn profile to see more about my professional skills."
        link: "www.linkedin.com/in/fkeagan"
        link-text: "linkedin profile"
    -
        section: off the clock
        text: "I usually like to read newer fiction, manga, and sometimes philosophy. I also love bike rides and hikes when the weather permits. When it comes to video games I enjoy roguelikes, sim racing, and FPS games such as Borderlands or Left For Dead."

layout: "base.mustache"
---
