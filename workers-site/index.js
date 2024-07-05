addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
  })
  
  /**
   * Respond to the request with the contents of index.html from the root directory
   * @param {Request} request
   */
  async function handleRequest(request) {
    // Fetch the index.html file from the root directory
    const htmlResponse = await fetch('https://demo-bf3.pages.dev/index.html')
  
    // Return the fetched HTML file as the response
    return htmlResponse
  }
  