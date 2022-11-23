export function isArray(array) {
  if (!Array.isArray(array)) {
    throw new Error("배열을 전달해 주세요!");
  } else {
    return true;
  }
}

export function isObject(object) {
  if (!(object.constructor.toString().indexOf("Object") > -1)) {
    throw new Error("객체를 전달해 주세요!");
  } else {
    return true;
  }
}

export function isBoolean(boolean) {
  if (!(typeof boolean === "boolean")) {
    throw new Error("불리언값을 전달해 주세요!");
  } else {
    return true;
  }
}
