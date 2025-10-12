# UT Webring

A webring is a collection of websites linked together in a circular structure, where each site links to the next and previous sites in the ring. It's a way to discover new sites and connect communities on the web.

View the current webring [here](https://webring.jolteon.me)

## Joining the Webring

Add these links to your site somewhere.
```html
<a href="https://api.jolteon.me/webring/prevlink">← prev </a>
<a href="https://api.jolteon.me/webring/nextlink"> next →</a>
```

The API uses the Referer of your request to determine your place in the ring. If you run into issues with this or would like to keep your referer anonymous, you can also use the following API calls:

```html
<a href="https://api.jolteon.me/webring/prevlink?host=<url>">← prev </a>
<a href="https://api.jolteon.me/webring/nextlink?host=<url>"> next →</a>
```

e.g. [https://api.jolteon.me/webring/nextlink?host=umbresp.cat](https://api.jolteon.me/webring/nextlink?host=umbresp.cat)

### Additional Links

You can also link to a random site, or to the webring listing page:
```html
<a href="https://api.jolteon.me/webring/randomlink"> random </a>
<a href="https://webring.jolteon.me"> UT Webring </a>
```

## Adding Your Site

To add yourself to `sites.json`, create a pull request.
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
