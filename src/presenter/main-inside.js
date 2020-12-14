import {render, removeExemplar} from "../utils/view-tools";
import {updateCard, compareDate, compareRating, compareCommentsCount} from "../utils/project-tools";
import {SortType} from "../const.js";
import NoMovies from "../view/no-movies";
import Sort from "../view/sorting.js";
import MoviesLists from "../view/movies-all.js";
import ShowMore from "../view/show-more.js";
import MovieEdit from "../view/movie-edit.js";
import CardPresenter from "./movie-card";

const body = document.querySelector(`body`);
const siteMainElement = body.querySelector(`.main`);
const CARD_COUNT_STEP = 5;
const EXTRA_CARD_COUNT = 2;

export default class InnerMain {
  constructor(cardsModel) {
    this._cardsModel = cardsModel; // экземпляр другого класса
    this._cardEditComponent = new MovieEdit();
    this._sortComponent = new Sort();
    this._noMoviesComponent = new NoMovies();
    this._showMoreButtonComponent = new ShowMore();
    this._containerOfLists = new MoviesLists();
    this._listsComponents = [...this._containerOfLists.getElement().querySelectorAll(`.films-list`)];
    this._cardContainers = this._listsComponents.map((list) => list.querySelector(`.films-list__container`));
    this._cardCountStep = CARD_COUNT_STEP;
    this._showMoreClickHandler = this._showMoreClickHandler.bind(this);
    this._allPresenters = {
      mainList: {},
      rateList: {},
      commentsList: {}
    };
    this._cardChangeAtAll = this._cardChangeAtAll.bind(this);
    this._deleteAllPopups = this._deleteAllPopups.bind(this);
    this._doStartSorting = this._doStartSorting.bind(this);
    this._currentSortType = SortType.DEFAULT;
    this._defaultCardsList = null;
  }

  createTotally(cards) {
    // this._mainCards = cards.slice(); !!!!!!!!!! УДАЛЯЕМ
    // this._topRatedCards = cards.slice().sort(compareRating); !!!!!!!!!! УДАЛЯЕМ
    // this._mostCommentedCards = cards.slice().sort(compareCommentsCount); !!!!!!!!!! УДАЛЯЕМ
    this._defaultCardsList = cards.slice();
    this._renderInnerMain();
  }

  // пока не запустилось??????????????
  // ниже получаем this._cards только из модели
  _getSortedCards() {
    // у экземпляра другого класса вызываем метод getCards()
    // тот в свою очередь возвращает this._cards
    switch (this._currentSortType) {
      case SortType.RATING:
        return this._cardsModel.getCards().slice().sort(compareRating);
      case SortType.MOST_COMMENTED:
        return this._cardsModel.getCards().slice().sort(compareCommentsCount);
      case SortType.DATE:
        return this._cardsModel.getCards().slice().sort(compareDate);
      default:
        return this._cardsModel.getCards(); // this._cards в исходном виде
    }
  }

  _deleteAllPopups() {
    Object.keys(this._allPresenters).forEach((list) => {
      Object.values(this._allPresenters[list])
        .forEach((cardPresenter) => cardPresenter.deletePopup());
    });
  }

  _cardChangeAtAll(updatedCard) {
    // возвращает обновленные массивы карточек фильмов
    this._mainCards = updateCard(this._mainCards, updatedCard);
    this._topRatedCards = updateCard(this._topRatedCards, updatedCard);
    this._mostCommentedCards = updateCard(this._mostCommentedCards, updatedCard);
    // Ниже. Возвращаем презентер по id. Полностью создаем или перезаписываем карточку
    // перерисовываем карточку

    Object.keys(this._allPresenters).forEach((list) => {
      if (this._allPresenters[list][updatedCard.id]) {
        this._allPresenters[list][updatedCard.id].createTotally(updatedCard);
      }
    });
  }

  _renderSort() {
    render(siteMainElement, this._sortComponent);
    this._sortComponent.setSortTypeChangeHandler(this._doStartSorting);
  }

  _sortCards(sortType) {
    switch (sortType) {
      case SortType.DATE:
        this._mainCards.sort(compareDate);
        break;
      case SortType.RATING:
        this._mainCards.sort(compareRating);
        break;
      default:
        this._mainCards = this._defaultCardsList.slice();
    }

    this._currentSortType = sortType;
  }

  _doStartSorting(sortType) {
    if (this._currentSortType === sortType) {
      return;
    }

    this._sortCards(sortType);
    this._clearInsideMain();
    this._renderInnerMain();
  }

  _renderMoviesLists() {
    render(siteMainElement, this._containerOfLists);
  }

  _renderCard(container, card) {
    const cardPresenter = new CardPresenter(container, this._cardContainers, this._cardChangeAtAll, this._deleteAllPopups);
    cardPresenter.createTotally(card);
    // получается объект (список презентеров) {id: презентер, id: презентер}
    switch (container) {
      case this._cardContainers[2]:
        this._allPresenters.commentsList[card.id] = cardPresenter;
        break;
      case this._cardContainers[1]:
        this._allPresenters.rateList[card.id] = cardPresenter;
        break;
      default:
        this._allPresenters.mainList[card.id] = cardPresenter;
    }
  }

  _renderCards(cardList, container, from, to) {
    cardList
      .slice(from, to)
      .forEach((card) => this._renderCard(container, card));
  }

  // удаляем все экземпляры и представления карточек
  // удаляем экземпляр и представление кнопки
  // очищаем список всех презентеров карточек
  _clearInsideMain() {
    Object.keys(this._allPresenters).forEach((list) => {
      Object.values(this._allPresenters[list])
        .forEach((cardPresenter) => cardPresenter.destroy());
    });

    this._allPresenters = this._allPresenters = {
      mainList: {},
      rateList: {},
      commentsList: {}
    };

    this._cardCountStep = CARD_COUNT_STEP;
    removeExemplar(this._showMoreButtonComponent);
  }

  _renderNoMovies() {
    render(siteMainElement, this._noMoviesComponent);
  }

  _showMoreClickHandler() {
    this._renderCards(this._mainCards, this._cardContainers[0], this._cardCountStep, this._cardCountStep + CARD_COUNT_STEP);
    this._cardCountStep += CARD_COUNT_STEP;

    if (this._cardCountStep >= this._mainCards.length) {
      removeExemplar(this._showMoreButtonComponent);
    }
  }

  _renderShowMoreButton() {
    render(this._listsComponents[0], this._showMoreButtonComponent);
    this._showMoreButtonComponent.setClickHandler(this._showMoreClickHandler);
  }

  _renderInnerMain() {
    if (this._mainCards.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();
    this._renderMoviesLists();
    this._renderCards(this._mainCards, this._cardContainers[0], 0, Math.min(this._mainCards.length, CARD_COUNT_STEP));
    this._renderCards(this._topRatedCards, this._cardContainers[1], 0, Math.min(this._topRatedCards.length, EXTRA_CARD_COUNT));
    this._renderCards(this._mostCommentedCards, this._cardContainers[2], 0, Math.min(this._mostCommentedCards.length, EXTRA_CARD_COUNT));

    if (this._mainCards.length > CARD_COUNT_STEP) {
      this._renderShowMoreButton();
    }
  }
}
