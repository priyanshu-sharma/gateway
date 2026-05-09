export async function onRequest(context) {
  const url = new URL(context.request.url)

  const backend =
    "https://priyanshu-sharma-b2a37588.fastapicloud.dev"

  // Keep full path + query params
  const target =
    backend + url.pathname + url.search

  const response = await fetch(target, {
    method: context.request.method,
    headers: context.request.headers,
    body:
      context.request.method !== "GET" &&
      context.request.method !== "HEAD"
        ? context.request.body
        : undefined,
    redirect: "follow"
  })

  return response
}