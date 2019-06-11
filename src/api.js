export const submit = (event) => {
  event.preventDefault();
  event.persist();
  const formElements = [...event.target];
  const dataToSave = {};
  formElements.forEach((element) => {
    if (element.getAttribute('disabled') === null && element.id) {
      const elementId = element.id;
      if (element.getAttribute('type') === 'radio'
      || element.getAttribute('type') === 'checkbox') {
        dataToSave[elementId] = element.checked;
      } else { dataToSave[elementId] = element.value; }
    }
  });
  localStorage.setItem('internetSets', JSON.stringify(dataToSave));
};

export const getPropValue = (data, id) => {
  if (!data) {
    return '';
  }
  const value = Object.prototype.hasOwnProperty.call(data, id) ? `${data[id]}` : '';
  return value;
};

export const getPropValueChekbox = (data, id) => {
  if (!data) {
    return false;
  }
  return data[id];
};
