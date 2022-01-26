import debounce from "lodash.debounce";

const logSmth = (): void => {
  console.log('hello')
}

const logSmthDebounced = debounce(logSmth, 1000);

logSmthDebounced()
