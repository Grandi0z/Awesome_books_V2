const laodPages = (startPage = 'list_link', destinationPage) => {
  document.querySelector(`.${startPage}`).classList.add('hidden');
  document.querySelector(`.${destinationPage}`).classList.remove('hidden');
};

const previousId = { numb: 'list_link' };
const setId = (id) => {
  previousId.numb = id;
};

// Add onblur event Listener to each nav botton
document.getElementById('list_link').addEventListener('blur', (e) => {
  setId(e.target.id);
});
document.getElementById('list_add_new').addEventListener('blur', (e) => {
  setId(e.target.id);
});
document.getElementById('list_about').addEventListener('blur', (e) => {
  setId(e.target.id);
});

export { laodPages, previousId };