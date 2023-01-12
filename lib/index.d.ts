import { Observable } from 'rxjs';
export type HttpMethod = 'get' | 'post' | 'put' | 'delete';
export declare const sendRequest: (url: string, method: HttpMethod, headers?: HeadersInit, body?: unknown, files?: File[]) => Promise<unknown>;
export declare const sendRequestObservable: (url: string, method: HttpMethod, headers?: HeadersInit, body?: unknown, files?: File[]) => Observable<unknown>;
export declare const sendRequestCallback: (url: string, method: HttpMethod, headers?: HeadersInit, body?: unknown, files?: File[], cb?: Function) => void;
