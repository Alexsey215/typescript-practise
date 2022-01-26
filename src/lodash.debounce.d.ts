declare module 'lodash.debounce' {
  export interface Options {
    leading: boolean,
    maxWait: number
    trailing: boolean
  }
  export default function debounce(func: Function, wait: number, options?: Options): Function
}
