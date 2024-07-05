addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request));
  });
  
  async function handleRequest(request) {
    // Log incoming request headers
    console.log('Request Headers:', JSON.stringify([...request.headers]));
  
    // Fetch the asset
    let response = await fetch(request);
  
    // Log response headers before modification
    console.log('Original Response Headers:', JSON.stringify([...response.headers]));
  
    // Modify response headers
    response = new Response(response.body, response);
  
    // Determine content type based on file extension
    const url = new URL(request.url);
    if (url.pathname.endsWith('.css')) {
      response.headers.set('Content-Type', 'text/css');
    } else if (url.pathname.endsWith('.js')) {
      response.headers.set('Content-Type', 'text/javascript');
    }
  
    // Log response headers after modification
    console.log('Modified Response Headers:', JSON.stringify([...response.headers]));
  
    return response;
  }
  