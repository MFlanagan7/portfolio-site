import portfolio2 from "./img/portfolio-template.webp"
// import webTopology from "./img/web-topology.webp"
import portfolio1 from "./img/portfolio.webp"
import onePageResponsive from "./img/one-page-responsive.webp"
import globalWeb from "./img/global-web.webp"
import globalNews from "./img/global-news.webp"

// https://www.figma.com/file/PJEAb4MNlza681UyFWVwDj/Portfolio-Design?node-id=0%3A1
export const skills = [
  'html', 
  'css', 
  'javascript', 
  'typescript', 
  'github', 
  'firebase', 
  'figma', 
  'netlify', 
  'vercel', 
  'react', 
  'next', 
  'vscode']

export const projects = [
    {
      id: 1,
      title: 'Portfolio Template - (currently in development)',
      summary: [
        'This is an in progress project where I am both learning some design principles and working with Figma a bit more as well as rethinking how to organize styled components within React in an effort to keep code more maintainable.',
      ],
      lessons: [
        'This project taught me the importance of code maintainability.  My other work with React has been great, however my project had become almost a mess of files by the end and something needed to be done.',
        'By organizing each component in its own folder with its own index.js file and separating thhe jsx from css in their own separate files has worked wonders in improving maintainability and ease of working within the folder structure.',
        'I am also learning visual design principles and how to implement those ideas into Figma.',
      ],
      thumbnail: portfolio2,
      alt: 'Single page portfolio template design.',
      technologies: ['html', 'css', 'javascript', 'github', 'react', 'figma'],
      video: 'https://youtu.be/bJhr3pR9gd0',
      link: 'https://portfolio-six-liart-14.vercel.app/',
      github: 'https://github.com/MFlanagan7/portfolio',
    },
    // {
    //   id: 2,
    //   title: 'Web Topology - (currently in development)',
    //   summary: [
    //     'Web Topology is an internal tool I am currently creating for a client to aid with their network topology mapping needs and is being built with OOP design principles in mind as well as utilizing various design patterns and the MVC architecture.  This tool is still very early in the prototyping stage.',
    //   ],
    //   lessons: [
    //     'Working with OOP concepts and making use of deign patterns has been a great reinforcement of my knowledge as well as further ensuring that the code stays readable and maintainable.',
    //     'I am also gaining valuable insight and experience by working directly with an end user client who is great at delivering functional and non-functional requirements that the software has.',
    //   ],
    //   thumbnail: webTopology,
    //   alt: 'Web Topology internal network mapping software.',
    //   technologies: ['html', 'css', 'javascript', 'github', 'firebase'],
    //   video: 'https://youtu.be/o067FrNM8eM',
    //   link: 'https://webtopology-7a8a3.web.app/',
    //   github: 'https://github.com/MFlanagan7/WebTopology',
    // },
    {
      id: 2,
      title: 'Global News',
      summary: [
        'In this project, I dove headfirst into Next.js, the next evolution of React.js.  This framework takes a lot of what React does best and makes it even simpler to work with in many ways.  I particularly like the file based routing system, the global css, and nested page layouts.  This site is a simple news website that uses the Mediastack News API to pull in live news stories from various news sources around the globe.',
      ],
      lessons: [
        'The primary focus for this project was to focus more on the backend functionality and to incorporate the use of a third party API.  I learned more about how the server code is handled in Next and made use of getStaticProps to fetch data server side.  The end result is that data is fetched at build time and the output is more of a static site that loads very quickly.',
        'I learned more about how file based routing works.  Next uses a pages directory that automatically serves up files from that folder as pages in the application that can be routed to, even in subdirectories.',
        'Global styles are easy to work with in Next.  A global.css file is defined and placed in the root folder and Next automatically applies those styles to every page in the site.  You can customize each component or page even further by using nested CSS files and CSS modules make styling components a breeze.',
      ],
      thumbnail: globalNews,
      alt: 'Global News is a news website that displays news articles from around the globe.',
      technologies: ['html', 'css', 'typescript', 'react', 'next', 'github', 'vercel'],
      video: 'https://youtu.be/dhif7Pv7gIs',
      link: 'https://global-news-5mw4fswfj-mflanagan7.vercel.app/',
      github: 'https://github.com/MFlanagan7/global-news',
    },
    {
      id: 3,
      title: 'Portfolio Site',
      summary: [
        'This project was one of my favorites so far and has helped me break out of tutorial hell.  I also wanted this project to serve as a display of my JavasScript and React skills to potential employers or collaborators.  While I am still learning both technologies, I have learned so much with this project already, and I am sure that I will learn even more as I continue to make improvements to it as my skills grow.',
        
      ],
      lessons: [
        'At the start, this project seemed straightforward, but became a bit complex by the time I was ready to publish the project.  This was my first real dive into React, aside from smaller projects I have tackled in the past with basics and styled components.  I was also learning Netlify and some CSS flexbox with this project as well, both of which are great tools.  I have become skilled with debugging over time, which I did a lot with this project as well.',
        'As for design, while I am fairly creative, it can take me quite a bit of time to decide which colors to use, mostly through trial and error.  I will need to spend some time studying MaterialUI and color theory in order to become better with design.',
        'One of my next tasks with React will be to implement the MVC pattern and to make use of hooks, useState, and useEffect more.  I will also make more API calls and become more familiar with consuming API’s.',
        'This project definitely has room for improvement, but I had to make the decision to stop working on it for the time being and continue work on another project.  There is always something else to learn and I love growing into new skillsets.',
      ],
      thumbnail: portfolio1,
      alt: 'Michael Flanagan web developer text over view of downtown Oklahoma City.',
      technologies: ['html', 'css', 'javascript', 'react', 'github', 'netlify'],
      video: 'https://youtu.be/rPSmw5A5YOE',
      link: 'top',
      github: 'https://github.com/MFlanagan7/portfolio-site',
    },
    {
      id: 4,
      title: 'Single-Page Design Template',
      summary: [
        'The task: Recreate a landing page created using Bootstrap',
        'The catch: Use only pure CSS and HTML',
        'This was a project I did as a stepping stone to improve my CSS skills.  I was already familiar with Bootstrap and how easy it is to create a good looking interface with it.  I wanted to see what it took to duplicate the look and feel of a Bootstrap landing page using only HTML and CSS.',
      ],
      lessons: [
        'I grew more confident with using CSS and laying out a landing page with this project.  I saw just how much it took to recreate a page from a mockup, or in this case, a preexisting page.',
        'I used lots of CSS classes and the ‘float: left’ property for responsive card styles.  I also made good use of wrapper and container like classes to encapsulate one element inside another to take advantage of parent-children relationships for styling.',
      ],
      thumbnail: onePageResponsive,
      alt: 'Conquer single page responsive landing page template.',
      technologies: ['html', 'css', 'github'],
      video: 'https://youtu.be/nsu8AYQqz3s',
      link: 'https://mflanagan7.github.io/one-page-responsive/',
      github: 'https://github.com/MFlanagan7/one-page-responsive',
    },
    {
      id: 5,
      title: 'Global Web Template',
      summary: [
        'This was one of my first projects with HTML and CSS where I learned a lot of basics.  The Coronavirus and other global concerns were the inspiration, and the site is geared toward travel safety precautions. A static HTML website with several pages along with CSS as the only technologies used allowed me to focus on learning only the basics without having to worry about learning too much at once.',
      ],
      lessons: [
        'I learned how to keep an organized CSS document, how classes are applied, CSS selector specificity, as well as some basic layout ideas and aesthetics.  I learned about media queries, even for printing a web page, and making web pages responsive.',
        'I also learned how to space out the work on a project so that it did not get too overwhelming.  Even though this is only CSS and HTML, when you look at all of the work there is to do all at once, it can be easy to become overloaded.  Breaking down big tasks, and working on each section, one at a time is a great lesson to learn for any craft.',
      ],
      thumbnail: globalWeb,
      alt: 'Thumbnail image of fron page of a static web page.',
      technologies: ['html', 'css', 'github'],
      video: 'https://youtu.be/N2Oft9FaTxo',
      link: 'https://mflanagan7.github.io/GlobalWeb/',
      github: 'https://github.com/MFlanagan7/GlobalWeb',
    },
  ]