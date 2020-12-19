import {render, removeExemplar, replace} from "../utils/view-tools";
import MovieEdit from "../view/movie-edit.js";
import MovieCard from "../view/movie-card.js";
import {UpdatePopup, UpdatedVersion} from "../const.js";

const body = document.querySelector(`body`);

const Mode = {
  SHOW_POPUP: `SHOW_POPUP`,
  DEL_POPUP: `DEL_POPUP`
};

export default class CardPresenter {
  constructor(cardContainer, cardDataChange) {
    this._cardContainer = cardContainer;
    this._cardDataChange = cardDataChange;
    this._cardComponent = null;
    this._cardEditComponent = null;
    this._mode = Mode.DEL_POPUP;
    this._handleCardClick = this._handleCardClick.bind(this);
    this._handleWillWatchClick = this._handleWillWatchClick.bind(this);
    this._handleWatchedClick = this._handleWatchedClick.bind(this);
    this._handleFavoriteClick = this._handleFavoriteClick.bind(this);
    this._handleCloseClick = this._handleCloseClick.bind(this);
    this._popupChangeOnly = this._popupChangeOnly.bind(this);
    this._onEscKeyDown = this._onEscKeyDown.bind(this);
    this._ctrlEnterKeyDownHandler = this._ctrlEnterKeyDownHandler.bind(this);
  }

  // создается экземпляр компонента карты с эксклюзивными данными
  // запихиваем в него обработчик
  // рисуем представление
  // ------------------------------------------------------------
  // также перезаписываем обновленную карту и попап
  createTotally(card) {
    this._card = card;
    const oldCard = this._cardComponent;
    const oldEdit = this._cardEditComponent;

    this._cardComponent = new MovieCard(this._card);
    this._cardEditComponent = new MovieEdit(this._card);

    this._cardComponent.setCardClickHandler(this._handleCardClick);
    this._cardComponent.setWillWatchClickHandler(this._handleWillWatchClick);
    this._cardComponent.setWatchedClickHandler(this._handleWatchedClick);
    this._cardComponent.setFavoriteClickHandler(this._handleFavoriteClick);
    this._cardEditComponent.setCloseClickHandler(this._handleCloseClick);
    this._cardEditComponent.setPopupChangeOnly(this._popupChangeOnly);

    if (oldCard === null || oldEdit === null) {
      render(this._cardContainer, this._cardComponent);
      return;
    }

    replace(this._cardComponent, oldCard);

    if (this._mode === Mode.SHOW_POPUP) {
      replace(this._cardEditComponent, oldEdit);
    }

    removeExemplar(oldCard);
    removeExemplar(oldEdit);
  }

  destroy() {
    removeExemplar(this._cardComponent);
    removeExemplar(this._cardEditComponent);
  }

  _handleCardClick() {
    this._cardDataChange(
        UpdatePopup.SHOW_POPUP,
        false,
        Object.assign(
            {},
            this._card
        )
    );
  }

  deletePopup() {
    this._handleCloseClick();
  }

  _handleWillWatchClick() {
    this._cardDataChange(
        UpdatePopup.POPUP_AT_ALL,
        UpdatedVersion.MINOR,
        Object.assign(
            {},
            this._card,
            {watchPlan: !this._card.watchPlan}
        )
    );
  }

  _handleWatchedClick() {
    this._cardDataChange(
        UpdatePopup.POPUP_AT_ALL,
        UpdatedVersion.MINOR,
        Object.assign(
            {},
            this._card,
            {hasWatched: !this._card.hasWatched}
        )
    );
  }

  _handleFavoriteClick() {
    this._cardDataChange(
        UpdatePopup.POPUP_AT_ALL,
        UpdatedVersion.MINOR,
        Object.assign(
            {},
            this._card,
            {isFavorite: !this._card.isFavorite}
        )
    );
  }

  _handleCloseClick() {
    const cardEdit = this._cardEditComponent.getElement();

    cardEdit.querySelector(`.film-details__add-emoji-label`).innerHTML = ``;
    cardEdit.querySelector(`textarea`).value = ``;
    cardEdit.remove();

    body.classList.toggle(`hide-overflow`, false);
    document.removeEventListener(`keydown`, this._onEscKeyDown);
    document.removeEventListener(`keydown`, this._ctrlEnterKeyDownHandler);
    this._mode = Mode.DEL_POPUP;
  }

  _onEscKeyDown(evt) {
    if (evt.key === `Escape` || evt.key === `Esc`) {
      evt.preventDefault();
      this._cardEditComponent.reset(this._card);
      this._handleCloseClick();
      document.removeEventListener(`keydown`, this._onEscKeyDown);
    }
  }

  _ctrlEnterKeyDownHandler(evt) {
    if (evt.keyCode === 13 && evt.ctrlKey) {
      evt.preventDefault();
      this._handleCloseClick();
      this._cardDataChange(
          UpdatePopup.POPUP_AT_ALL,
          UpdatedVersion.MINOR,
          Object.assign(
              this._card,
              this._cardForSave
          )
      );
      document.removeEventListener(`keydown`, this._ctrlEnterKeyDownHandler);
    }
  }

  _popupChangeOnly(card) {
    this._cardForSave = card;
  }
}

