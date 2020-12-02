//common
class Cookie {
	
	get (key) {
		const cookies = document.cookie.split(';')
		if (cookies.length && cookies.includes(key)) {
			
		} else {
			return ''
		}
	}
	set (key, value, mins) {
		if (day !== 0) {
      var expires = mins * 60 * 1000
      var date = new Date(+new Date() + expires)
      document.cookie = `${key}=${escape(value)};expires=${date.toUTCString()}`
    } else {
      document.cookie = `${key}=${escape(value)}`
    }
	}
	clear () {
		document.cookie = ''
	}
}

class Router {
	#history = d
	constructor () {
		this.history = '1'
	}
	push () {

	}
}