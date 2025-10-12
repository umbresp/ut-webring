import { webring } from "../sites.json";

function App() {
  return (
    <>
      <h1>UT Webring</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>URL</th>
            <th>Button</th>
          </tr>
        </thead>
        <tbody>
          {webring.map((site) => (
            <tr key={site.name}>
              <td>{site.name}</td>
              <td>{site.description}</td>
              <td>
                <a href={site.link} target="_blank">
                  {site.url}
                </a>
              </td>
              <td>
                {site["88x31"] && (
                  <a href={site.link} target="_blank">
                    <img
                      src={site["88x31"]}
                      alt={`${site.name} 88x31 button`}
                    />
                  </a>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="footer">
        <a
          href="https://github.com/umbresp/ut-webring"
          target="_blank"
          rel="noopener"
        >
          GitHub Repository
        </a>{" "}
        |{" "}
        <a
          href="https://en.wikipedia.org/wiki/Webring"
          target="_blank"
          rel="noopener"
        >
          What's a webring?
        </a>
      </div>
    </>
  );
}

export default App;
