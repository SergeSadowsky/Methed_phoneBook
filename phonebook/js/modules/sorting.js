const saveSortOptions = (options) => {
  localStorage.setItem('sortOptions', JSON.stringify(options));
};

const loadSortOptions = () => JSON.parse(localStorage.getItem('sortOptions'));

const sortRows = (rows, colNumber, asc = true) => {
  const trs = [...rows.children];
  if (asc) {
    trs.sort((el1, el2) =>
      el1.children[colNumber].textContent <
        el2.children[colNumber].textContent);
  } else {
    trs.sort((el1, el2) =>
      el1.children[colNumber].textContent >
        el2.children[colNumber].textContent);
  }
  return trs;
};

export const sortTable = (table, rowSelector) => {
  let trs;
  let sortType;

  if (!rowSelector) {
    const sortOpts = loadSortOptions();
    if (!sortOpts) return;
    rowSelector = sortOpts.rowSelector;
    sortType = sortOpts.sortType;

    const td = table.theader.querySelector(rowSelector);
    td.classList.add(sortType);
    const colNumber = td.cellIndex;

    if (sortType === 'sort__asc') {
      trs = sortRows(table.list, colNumber);
    } else {
      trs = sortRows(table.list, colNumber, false);
    }
  } else {
    const td = table.theader.querySelector(rowSelector);
    const colNumber = td.cellIndex;
    let sortType;

    if (td.classList.contains('sort__desc')) {
      td.classList.remove('sort__desc');
      sortType = 'sort__asc';
      td.classList.add('sort__asc');
      trs = sortRows(table.list, colNumber);
    } else {
      td.classList.remove('sort__asc');
      sortType = 'sort__desc';
      td.classList.add(sortType);
      trs = sortRows(table.list, colNumber, false);
    }
    saveSortOptions({rowSelector, sortType});
  }
  trs.forEach(tr => table.list.append(tr));
};

