import store from '../../../store';

export default (to, from, next) => {
    console.log("store",store.getters['role']);
    if (store.getters['Auth/role'] == 1 || 
        store.getters['Auth/role'] == 2 || 
        store.getters['Auth/role'] == 3
    ) {
        next();
    } else {
        store.dispatch('Auth/logout')
        next({ name: 'login' });
    }
}