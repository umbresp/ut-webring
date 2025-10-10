# UT Webring

Linking: Add these links to your site somewhere.
```html
<a href="https://api.jolteon.me/webring/prevlink">← prev </a>
<a href="https://api.jolteon.me/webring/randomlink"> random </a>
<a href="https://api.jolteon.me/webring/nextlink"> next →</a>
```

Adding yourself to `sites.json`: Create a pull request.
```json
{
    "name": "Sasha 🐈",
    "url": "umbresp.cat",
    "link": "https://umbresp.cat",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "88x31": "https://www.umbresp.cat/badges/88x31.gif"
}
```

`url` is used to index your site. The link resolver will resolve your location in the ring based on whether the referer contains the url. `link` is the link that the resolver resolves to. `88x31` is an optional field
if you have an 88x31px logo for your site.

Listings available [here](https://webring.jolteon.me)