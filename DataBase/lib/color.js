require('../../handler.js') 
global.color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

global.bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}