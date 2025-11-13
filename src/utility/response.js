export const jsonResponse = (res) => {
  if (res.ok) {
    return res.json();
  } else {
    return res.text().then((text) => {
      throw new Error(text);
    });
  }
};
