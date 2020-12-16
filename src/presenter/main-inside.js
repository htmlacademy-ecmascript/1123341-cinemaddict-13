import {render, removeExemplar} from "../utils/view-tools";
import {compareDate, compareRating, compareCommentsCount} from "../utils/project-tools";
import {SortType, UpdatePopup, UpdatedVersion} from "../const.js";
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
    this._cardsModel = cardsModel;
    this._cardEditComponent = new MovieEdit();
    this._sortComponent = null;
    this._noMoviesComponent = new NoMovies();
    this._showMoreButtonComponent = null;
    this._containerOfLists = new MoviesLists();
    this._listsComponents = [...this._containerOfLists.getElement().querySelectorAll(`.films-list`)];
    this._cardContainers = this._listsComponents.map((list) => list.querySelector(`.films-list__container`));
    this._renderedCardsCount = CARD_COUNT_STEP;
    this._checkedSortType = SortType.DEFAULT;
    this._allPresenters = {mainList: {}, rateList: {}, commentsList: {}};
    this._handleShowMoreClick = this._handleShowMoreClick.bind(this);
    this._handleCardDataChange = this._handleCardDataChange.bind(this);
    this._handleSomeWhatRerender = this._handleSomeWhatRerender.bind(this);
    this._handleDelAllPopups = this._handleDelAllPopups.bind(this);
    this._handleStartSorting = this._handleStartSorting.bind(this);
    this._cardsModel.addObserver(this._handleSomeWhatRerender);
  }

  aboveRenderInnerMain() {
    this._renderInnerMain();
  }

  _getSortedCards() {
    // у экземпляра другого класса вызываем метод getCards()
    // тот в свою очередь возвращает _cardsGroup
    // this._cardsGroup = {
    //   main: [],
    //   rated: [],
    //   commented: [],
    //   default: []
    // };
    const cardsGroup = this._cardsModel.getCards();

    switch (this._checkedSortType) {
      case SortType.RATING:
        return Object.assign({}, cardsGroup, {main: cardsGroup.main.slice().sort(compareRating)});
      case SortType.MOST_COMMENTED:
        return Object.assign({}, cardsGroup, {main: cardsGroup.main.slice().sort(compareCommentsCount)});
      case SortType.DATE:
        return Object.assign({}, cardsGroup, {main: cardsGroup.main.slice().sort(compareDate)});
    }

    return cardsGroup;
  }

  _handleDelAllPopups() {
    Object.keys(this._allPresenters).forEach((list) => {
      Object.values(this._allPresenters[list])
        .forEach((cardPresenter) => cardPresenter.deletePopup());
    });
  }

  _handleCardDataChange(updateType, updatedVersion, updatedCard) {
    // здесь только создаются массивы за счет например this._cardsModel.deleteComment;
    // и вызывается функция, что ниже
    switch (updateType) {
      case UpdatePopup.DELETE_COMMENT:
        this._cardsModel.deleteComment(updatedVersion, updatedCard);
        break;
      case UpdatePopup.ADD_COMMENT:
        this._cardsModel.addComment(updatedVersion, updatedCard);
        break;
      case UpdatePopup.CHANGE_DESIRE:
        this._cardsModel.changeDesire(updatedVersion, updatedCard);
        break;
      default:
        this._cardsModel.returnBack(updatedVersion, updatedCard);
    }
  }

  _handleSomeWhatRerender(updateType, updatedCard) {
    // Создаем или перезаписываем карточку или весь список
    // Короче занимаемся перерисовкой
    switch (updateType) {
      case UpdatedVersion.PATCH:
        break;
      case UpdatedVersion.MINOR:
        // не меняем количество уже показанных карточек
        // не меняем тип сортировки
        Object.keys(this._allPresenters).forEach((list) => {
          if (this._allPresenters[list][updatedCard.id]) {
            this._allPresenters[list][updatedCard.id].createTotally(updatedCard);
          }
        });
        break;
      case UpdatedVersion.MAJOR:
        // начинаем показ опять с минимального количества карточек
        // ставим сортировку на дефолт
        this._clearInsideMain({resetRenderedCardsCount: true, resetSortType: true});
        this._renderInnerMain();
        break;
    }
  }

  _renderCard(container, card) {
    const cardPresenter = new CardPresenter(container, this._cardContainers, this._handleCardDataChange, this._handleDelAllPopups);
    cardPresenter.createTotally(card);
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

  _renderCards(cards, container) {
    cards.forEach((card) => this._renderCard(container, card));
  }

  _clearInsideMain({resetRenderedCardsCount = false, resetSortType = false} = {}) {
    const mainCardsCount = this._getSortedCards().main.length;

    Object.keys(this._allPresenters).forEach((list) => {
      Object.values(this._allPresenters[list])
        .forEach((cardPresenter) => cardPresenter.destroy());
    });

    this._allPresenters = this._allPresenters = {
      mainList: {},
      rateList: {},
      commentsList: {}
    };

    removeExemplar(this._sortComponent);
    removeExemplar(this._noMoviesComponent);
    removeExemplar(this._showMoreButtonComponent);

    if (resetRenderedCardsCount) {
      this._renderedCardsCount = CARD_COUNT_STEP;

    } else {
      this._renderedCardsCount = Math.min(mainCardsCount, this._renderedCardsCount);
    }

    if (resetSortType) {
      this._checkedSortType = SortType.DEFAULT;
    }
  }

  _renderInnerMain() {
    if (this._getSortedCards().main.length === 0) {
      this._renderNoMovies();
      return;
    }

    this._renderSort();
    this._renderMoviesLists();

    const mainCardsCount = this._getSortedCards().main.length;
    const mainCards = this._getSortedCards().main.slice(0, Math.min(mainCardsCount, this._renderedCardsCount));
    this._renderCards(mainCards, this._cardContainers[0]);

    const ratedCardsCount = this._getSortedCards().rated.length;
    const ratedCards = this._getSortedCards().rated.slice(0, Math.min(ratedCardsCount, EXTRA_CARD_COUNT));
    this._renderCards(ratedCards, this._cardContainers[1]);

    const commentedCardsCount = this._getSortedCards().commented.length;
    const commentedCards = this._getSortedCards().commented.slice(0, Math.min(commentedCardsCount, EXTRA_CARD_COUNT));
    this._renderCards(commentedCards, this._cardContainers[2]);

    if (this._getSortedCards().main.length > this._renderedCardsCount) {
      this._renderShowMoreButton();
    }
  }

  _renderNoMovies() {
    render(siteMainElement, this._noMoviesComponent);
  }

  _renderSort() {
    if (this._sortComponent !== null) {
      this._sortComponent = null;
    }

    this._sortComponent = new Sort(this._checkedSortType);
    this._sortComponent.setSortTypeChangeHandler(this._handleStartSorting);
    render(siteMainElement, this._sortComponent);
  }

  _handleStartSorting(sortType) {
    if (this._checkedSortType === sortType) {
      return;
    }

    this._checkedSortType = sortType;
    this._clearInsideMain();
    this._renderInnerMain();
  }

  _renderMoviesLists() {
    render(siteMainElement, this._containerOfLists);
  }

  _renderShowMoreButton() {
    if (this._showMoreButtonComponent !== null) {
      this._showMoreButtonComponent = null;
    }

    this._showMoreButtonComponent = new ShowMore();
    this._showMoreButtonComponent.setClickHandler(this._handleShowMoreClick);
    render(this._listsComponents[0], this._showMoreButtonComponent);
  }

  _handleShowMoreClick() {
    const cardsCount = this._getSortedCards().main.length;
    const newRenderedCardsCount = Math.min(cardsCount, this._renderedCardsCount + CARD_COUNT_STEP);
    const cards = this._getSortedCards().main.slice(this._renderedCardsCount, newRenderedCardsCount);

    this._renderCards(cards, this._cardContainers[0]);
    this._renderedCardsCount = newRenderedCardsCount;

    if (this._renderedCardsCount >= cardsCount) {
      removeExemplar(this._showMoreButtonComponent);
    }
  }
}
