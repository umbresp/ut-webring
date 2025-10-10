import { webring } from '../sites.json'

function App() {

  return (
    <>
      <h1>UT Webring</h1>
      <table>
        <thead>
          <tr>
            <th>
              Name
            </th>
            <th>
              Description
            </th>
            <th>
              URL
            </th>
            <th>
              Button
            </th>
          </tr> 
        </thead>
        <tbody>
          {webring.map((site) => (
            <tr>
              <td>
                {site.name}
              </td>
              <td>
                {site.description}
              </td>
              <td>
                <a href={site.link} target='_blank'>
                  {site.url}
                </a>
              </td>
              <td>
                {site['88x31'] && <a href={site.link} target='_blank'><img src={site['88x31']} alt={`${site.name} 88x31 button`} /></a>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default App