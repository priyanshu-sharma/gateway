const BACKEND =
  "https://priyanshu-sharma-b2a37588.fastapicloud.dev"

export async function onRequest(context) {
  const url = new URL(context.request.url)

  const target =
    BACKEND + url.pathname + url.search

  const modifiedHeaders = new Headers(context.request.headers)
  modifiedHeaders.set("host", new URL(BACKEND).host)

  const response = await fetch(target, {
    method: context.request.method,
    headers: modifiedHeaders,
    body:
      context.request.method !== "GET" &&
      context.request.method !== "HEAD"
        ? context.request.body
        : undefined,
    redirect: "follow"
  })

  return response
}