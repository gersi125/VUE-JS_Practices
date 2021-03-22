let timer;

export default {
    async login(context, payLoad) {
        context.dispatch('auth', {
            ...payLoad,
            mode: 'login'
        });
    },
    async signup(context, payLoad) {
        context.dispatch('auth', {
            ...payLoad,
            mode: 'signup'
        });
    },
    async auth(context, payLoad) {
        const mode = payLoad.mode;

        let url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCt8z0Suwel43MB4LT4lg9eirI3qDpOilg';

        if(mode === 'signup') {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCt8z0Suwel43MB4LT4lg9eirI3qDpOilg';
        }

        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({
               email: payLoad.email,
               password: payLoad.password,
               returnSecureToken: true 
            })
        });

        const responseData = await response.json();

        if(!response.ok) {
            const error = new Error(responseData.message || 'Failed to authenticate user! Please check the crdetianls details!');
            throw error;
        }

        const expiresIn = +responseData.expiresIn * 1000;
        const expirationDate = new Date().getTime() + expiresIn;

        localStorage.setItem('token', responseData.idToken);
        localStorage.setItem('userId', responseData.localId);
        localStorage.setItem('tokenExpiration', expirationDate);

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);


        context.commit('setUser', {
            token: responseData.idToken,
            userId: responseData.localId
        });

    },
    tryLogin(context) {
        const token =localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const tokenExpiration = localStorage.getItem('tokenExpiration');
        const expiresIn = +tokenExpiration - new Date().getTime();

        if(expiresIn < 0) {
            return;
        }

        timer = setTimeout(function() {
            context.dispatch('autoLogout');
        }, expiresIn);

        if(token && userId) {
            context.commit('setUser', {
                token: token,
                userId: userId
            });
        }
    },
    logout(context) {

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        localStorage.removeItem('tokenExpiration');

        clearTimeout(timer);
        
        context.commit('setUser', {
            token: null,
            userId: null
        });
    },
    autoLogout(context) {
        context.dispatch('logout');
        context.commit('setAutoLogout');
    }
};