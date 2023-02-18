export default class Section {
<<<<<<< HEAD
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._containerSelector = containerSelector;
  }

  renderItems(items) {
    items.forEach((item) => {
      this._renderer(item);
=======
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._containerSelector = containerSelector;
  }

  renderItems() {
    this._items.forEach((item) => {
      this._containerSelector.append(this._renderer(item));
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
    });
  }

  prependItem(item) {
<<<<<<< HEAD
    this._containerSelector.prepend(item);
=======
    this._containerSelector.prepend(this._renderer(item));
>>>>>>> 7a5f24ee858667578486b4f7f00147096b8fd3c7
  }
}
