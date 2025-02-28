type RequestOptions = {
  headers?: HeadersInit;
  params?: Record<string, string>;
};

type PostRequestOptions<TBody = unknown> = RequestOptions & {
  body?: TBody;
};

export async function get<T>(
  url: string,
  options: RequestOptions = {}
): Promise<T> {
  const { headers = {}, params = {} } = options;

  // Construct URL with query parameters
  const queryString = new URLSearchParams(params).toString();
  const finalUrl = queryString ? `${url}?${queryString}` : url;

  const response = await fetch(finalUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
  });

  if (!response.ok) {
    console.error(`HTTP error! status: ${response.status}`);
    // throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export async function post<TResponse, TBody = unknown>(
  url: string,
  options: PostRequestOptions<TBody> = {}
): Promise<TResponse> {
  const { headers = {}, body } = options;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
