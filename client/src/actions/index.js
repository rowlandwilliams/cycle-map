export const showHideLayer = (id) => ({ type: "SHOWHIDE", payload: id });

export const changeSlider = (e, sliderId) => ({
  type: "CHANGE",
  id: sliderId,
  value: e.target.value,
});
