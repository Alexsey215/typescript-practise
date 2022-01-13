import {Place} from "../interfaces/searchFormDataInterface.js";

export const search = (searchData: object, callBack: (arg: Place | Error) => void) => {
  console.log(searchData);

  setTimeout(() => {
    if (Math.random() < 0.5) {
      const err = new Error('error')
      callBack(err)
    } else {
      const arr: Place = [];
      callBack(arr)
    }
  }, 2000)
}


