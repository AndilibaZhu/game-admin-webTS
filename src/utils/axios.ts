import axiosRetry from 'axios-retry'

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
  AxiosResponse,
} from 'axios'

import router from '@/router'

export interface IDataWithError<T> {
  data: T
  code: number
  msg: string
  message:string
  success:boolean
}

class HttpService {
  private http!: AxiosInstance

  constructor() {
    this.http = axios.create({
      baseURL: import.meta.env.VITE_API_BASE_URL,
      timeout: 60000,
    })

    axiosRetry(this.http, {
      retries: 0,
      shouldResetTimeout: true,
      // 重复请求延迟
      retryDelay: (retryCount: number) => retryCount * 1000,
      retryCondition: (error: AxiosError) => {
        if (error.message.includes('timeout')) {
          return true
        }

        return !error.response || error.response.status !== 401
      },
    })

    this.addInterceptors(this.http)
  }

  get<T>(url: string, config?: AxiosRequestConfig) {
    const res = this.http.get(url, config)
    return this.handleErrorWrapper<T>(res)
  }

  post<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.post(url, param, config))
  }

  postDownload<T>(url: string, param: unknown) {
    return this.handleErrorWrapper<T>(
      this.http.post(url, param, { responseType: 'arraybuffer' }),
    )
  }

  put<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(this.http.put(url, param, config))
  }

  delete<T>(url: string, param: unknown, config?: AxiosRequestConfig) {
    return this.handleErrorWrapper<T>(
      this.http.delete(url, { data: param, ...config }),
    )
  }

  private addInterceptors(http: AxiosInstance) {
    // 一、请求拦截器
    http.interceptors.request.use(config => {
      // 1、添加token和项目id
      const token = window.sessionStorage.getItem('token')
      if (config.headers) {
        if (token) {
          config.headers.Authorization = `Bearer ${ token }`
        }
      }
      // 2、验证请求状态码
      config.validateStatus = status => {
        switch (status) {
          case 401:
            setTimeout(() => {
              if (window.$message) { window.$message.error('用户信息过期，请重新登录') }
              router.push('/login')
            }, 1000)
            break
          default:
            // console.warn(`status= ${ status }`)
            break
        }
        return status >= 200 && status < 400
      }

      return config
    })

    // 二、响应拦截器
    http.interceptors.response.use(
      (response: AxiosResponse) => response,
      error => Promise.reject(error),
    )
  }

  private async handleErrorWrapper<T>(
    p: AxiosPromise,
  ): Promise<IDataWithError<T>> {
    return p
      .then(response => response.data)
      .catch((error: AxiosError) => ({
        ...error.response?.data,
      }))
  }
}

export const httpService = new HttpService()
