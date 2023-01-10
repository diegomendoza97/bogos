import { from, Observable } from 'rxjs';

export type HttpMethod = 'get' | 'post' | 'put' | 'delete';

const prepareData = (body?: unknown, files?: File[]) => {
  const formData = new FormData();
  if (body) {
    formData.append('data', JSON.stringify(body));
  }

  if (files && files.length > 0) {
    files.forEach((file) => {
      formData.append('files', file);
    });
  }

  return formData;
};

export const sendRequest = (
  url: string,
  method: HttpMethod,
  headers?: HeadersInit,
  body?: unknown,
  files?: File[],
): Promise<unknown> => {
  const data: FormData = prepareData(body, files);
  return fetch(url, { method, headers, body: data });
};

export const sendRequestObservable = (
  url: string,
  method: HttpMethod,
  headers?: HeadersInit,
  body?: unknown,
  files?: File[],
): Observable<unknown> => {
  const data: FormData = prepareData(body, files);
  const result = from(fetch(url, { method, headers, body: data }));
  return result;
};
