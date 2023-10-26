import store from '../../../store';

export default (to, from, next) => {
    if (store.getters['Auth/role'] == 4) {
        next();
    } else {
        store.dispatch('Auth/logout')
        next({ name: 'login' });
    }
}