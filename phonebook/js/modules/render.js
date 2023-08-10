import htmlElements from './htmlElements.js';

const {createHeader,
  createLogo,
  createMain,
  createFooter,
  createButtonGroup,
  createTable,
  createForm,
  createRow} = htmlElements;

export const addContactPage = (contact, list) => {
  list.append(createRow(contact));
};

export const removeContactPage = (el) => {
  const parent = el.closest('.contact');
  parent.remove();
};

export const renderPhoneBook = (app, title) => {
  const header = createHeader();
  const logo = createLogo(title);
  const main = createMain();
  const footer = createFooter(title);
  const ButtonGroup = createButtonGroup([
    {
      className: 'btn btn-primary mr-3',
      type: 'button',
      text: 'Добавить',
    },
    {
      className: 'btn btn-danger',
      type: 'button',
      text: 'Удалить',
    },
  ]);
  const table = createTable();
  const form = createForm();

  header.headerContainer.append(logo);
  main.mainContainer.append(ButtonGroup.btnWrapper, table, form.overlay);

  app.append(header, main, footer);

  return {
    theader: table.thead,
    list: table.tbody,
    logo,
    btnAdd: ButtonGroup.btns[0],
    btnDel: ButtonGroup.btns[1],
    form,
  };
};

export const renderContacts = (list, data) => {
  const rows = data.map(createRow);
  list.append(...rows);
  return rows;
};


