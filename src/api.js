export const API_END_POINT = "http://woodaehyun";

export const request = async (url) => {
  try {
    const res = await fetch(`${API_END_POINT}${url}`);

    if (!res.ok) {
      throw new Error("API가 이상합니다");
    }
    return await res.json();
  } catch (e) {
    alert(e.message);
  }
};
