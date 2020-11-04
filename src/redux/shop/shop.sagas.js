import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  firestore,
  convertCollectionsSnapshotToMap,
} from "../../firebase/firebase.utils";

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from "./shop.actions";

import ShopActionTypes from "./shop.types";

export function* fetchCollectionsAsync() {
  yield console.log("i am fire");

  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMAp = yield call(
      convertCollectionsSnapshotToMap,
      snapshot
    );
    //becuase we are yielding this call it allows to defer control at this point of the execution to the saga middleware
    //so incase it hase to cancel we give it another place where it is able to do so
    //adding more yields like this also makes it eaiser to test
    //the call effect from redux saga, creates a description of the effect like in redux, where ypu use action creators to create a plain object describing the action that will get executed.
    yield put(fetchCollectionsSuccess(collectionsMAp));
    //put is and effect from redux sagas, that creates actions that ar e exactly like dispatch
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message));
  }
}

export function* fetchCollectionsStart() {
  yield takeLatest(
    //this will make it so it only calls once, since takeLates will cancel the previous ones
    ShopActionTypes.FETCH_COLLECTIONS_START,
    //it first listend for this action
    fetchCollectionsAsync
    //then did this, and then to fetchcollectionAsync to console.log
  );
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)]);
}
