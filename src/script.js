import serviceData from './js/serviceData';
import {sortTable} from './js/sorting.js';
import {hoverRow,
  modalControl,
  formControl,
  deleteControl,
  tableControl} from './js/controls';
import {renderContacts, renderPhoneBook} from './js/render';

import './scss/index.scss';

{
  const init = (selectorApp, title) => {
    const app = document.querySelector(selectorApp);
    const {theader,
      list,
      logo,
      btnAdd,
      btnDel,
      form} = renderPhoneBook(app, title);

    const rows = renderContacts(list, serviceData.getContactsData());
    sortTable({theader, list});

    hoverRow(rows, logo);
    const {closeModal} = modalControl(btnAdd, form);
    formControl(form.form, {theader, list}, closeModal);
    deleteControl(btnDel, list);
    tableControl(theader, list);
  };

  window.phoneBookInit = init;
}
