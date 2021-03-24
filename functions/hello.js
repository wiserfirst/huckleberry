exports.handler = async (event, context) => {
  const name = event.queryStringParameters.name || 'World'

  return {
    statusCode: 200,
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ greeting: `Hello, ${name}` }),
  }
}
