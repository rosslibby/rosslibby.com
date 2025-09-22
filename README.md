<!--
### UI inspiration (?)
- https://www.npmjs.com/package/create-create-app
- https://vineetmishrahbk.medium.com/crafting-chronological-brilliance-building-a-timeline-in-your-portfolio-using-react-js-33e28afff012
- https://developer-portfolio-v2.netlify.app/
- https://delicate-dawn-ac25646e6d.media.strapiapp.com/Ua_La_C_Rzs_d60bf6da87.png
- https://github.com/

## codesnap
- https://codesnap.dev/view/template/f77f19c7-cfcf-4e4f-83cf-1844879336bb
- https://codesnap.dev/view/template/d9366f08-cf59-4dc5-abe7-1ead56028ba7

## Shiki code highlighter
https://shiki.matsu.io/

---

```scss
.frame {
  --red: #ff5f57;
  --yellow: #febc2e;
  --green: #28c840;
  border: 2px solid rgb(51, 65, 85);
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  opacity: 1;
  z-index: 2;
  transform: scale(1) perspective(700px) rotateX(0deg) rotateY(0deg) rotateZ(0deg);
  background-color: rgb(41, 45, 62);
}

.header {
  background-color: rgb(49, 53, 70);
  color: #9ca2ad;
}

.body {
  padding: 23px 0px;
  --6cf1feb5: 14px;
  --c92bbbaa: MonoLisa;

  .code {
    border: 0;
    font-family: var(--c92bbbaa), monospace;
    font-size: var(--6cf1feb5);
    line-height: 1.5;

    pre {
      background-color: #292D3E;
      color: #babed8;
    }
  }
}
```

### accent colors for light-theme
```css
#5482ff
#4a58ff
#224aff
```

---

<br />
<br />

# Gemini feedback

## Intro

Loading Time: The timing you've chosen is good (75ms per character). However, make sure the overall effect isn't so slow that a user gets impatient. The 2500ms pause is a good balance to ensure it’s readable but doesn't feel sluggish.

Accessibility: Ensure the visual effect doesn't cause issues for users with motion sensitivity. You could consider a subtle "reduce motion" CSS media query to disable the animation for users who prefer it.

Mobile Responsiveness: A long list of descriptors might wrap awkwardly on a small mobile screen. Ensure your CSS is flexible enough to handle this gracefully without breaking the layout. The text may need to be a bit smaller on mobile, or you might choose to show a shorter, static descriptor.

Keyword Matching: While your list is great, you could add a few more high-value keywords that you've highlighted on your resume to ensure consistency. For example, "AWS/GCP Specialist," "Microservices Architect," or "Full-Stack Web Developer." This ensures that anyone scanning your site for specific skills will find them.-->
