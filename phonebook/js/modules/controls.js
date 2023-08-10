import serviceData from './serviceData.js';
import {sortTable} from './sorting.js';
import {addContactPage, removeContactPage} from './render.js';

const hoverRow = (rows, logo) => {
  rows.forEach(row => {
    const logoText = logo.textContent;
    row.addEventListener('mouseenter', () => {
      logo.textContent = row.phoneLink.textContent;
    });
    row.addEventListener('mouseleave', () => {
      logo.textContent = logoText;
    });
  });
};

const modalControl = (btnAdd, form) => {
  const openModal = () => {
    form.overlay.classList.add('is-visible');
  };

  const closeModal = () => {
    form.overlay.classList.remove('is-visible');
  };

  btnAdd.addEventListener('click', openModal);

  form.overlay.addEventListener('click', (e) => {
    const target = e.target;
    if (target === form.overlay || target.closest('.close')) {
      closeModal();
    }
  });

  return {
    closeModal,
  };
};

const deleteControl = (btnDel, list) => {
  btnDel.addEventListener('click', () => {
    document.querySelectorAll('.delete').forEach((del) => {
      del.classList.toggle('is-visible');
    });
  });

  list.addEventListener('click', e => {
    if (e.target.closest('.del-icon')) {
      const phone = e.target.closest('.delete').
          parentNode.childNodes[3].innerText;
      serviceData.removeContactData(phone);
      removeContactPage(e.target);
    }
  });
};

const formControl = (form, table, closeModal) => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newContact = Object.fromEntries(formData);
    addContactPage(newContact, table.list);
    serviceData.addContactData(newContact);

    sortTable(table);
    form.reset();
    closeModal();
  });
};

const tableControl = (theader, list) => {
  theader.addEventListener('click', e => {
    if (e.target.classList.contains('head__name')) {
      sortTable({theader, list}, '.head__name');
    }
    if (e.target.classList.contains('head__surname')) {
      sortTable({theader, list}, '.head__surname');
    }
  });
};

export {
  hoverRow,
  modalControl,
  deleteControl,
  formControl,
  tableControl,
};
