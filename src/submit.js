function submit(event) {
  event.preventDefault();
  event.persist();
  const formElements = [...event.target];
  const dataToSave = {};
  formElements.forEach((element) => {
    if (element.getAttribute('disabled') === null) {
      const elementId = element.id;
      dataToSave[elementId] = element.value;
    }
  });
  localStorage.setItem('internetSets', JSON.stringify(dataToSave));
}

export default submit;
