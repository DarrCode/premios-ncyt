import store from '../../../store';

export default (to, from, next) => {
    console.log("store",store.getters['role']);
    if (store.getters['role'] == 4) {
        next();
    } else {
        store.dispatch('Auth/logout')
        //next({ name: 'login' });
    }
}