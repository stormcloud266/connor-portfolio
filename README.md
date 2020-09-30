# connor-portfolio

This project was built for a writer who needed a way to share his poetry on the web. It is a GatsbyJS website that uses DatoCMS for content management.

[View Site](https://www.connornorton.com/)

![](https://github.com/stormcloud266/connor-portfolio/blob/master/screenshot.gif)

## Challenges and Goals

* Client needed a way to easily manage content
* Pages needed to be generated for every poem
* Set up a contact form
* Optimize images for quick page loads

## Solutions

I decided to use the static site generator GatsbyJS to create a blog-like functionality in this site. For easy content management, the website was connected to  DatoCMS. For every poem added in DatoCMS, Gatsby generates a single page and adds a card to the poem collection page. After a page is added, a webhook triggers a new build in Netlify.

Images are lazy loaded with Gatsby Image which allows for faster page loads.

I built a contact form and connected it to Netlify's form services. Google reCaptcha protects the form from spam submissions 
