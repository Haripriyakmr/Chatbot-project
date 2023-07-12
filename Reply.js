import moment from 'moment';
export const error = (text) => {
    if (text.includes('hi') || text.includes('hai') || (text.includes('hello')))
        return "Hi,How are you ?"
    else if (text.includes('time'))
        return moment().format('h:mm:ss a')
        else if (text.includes('Do'))
        return moment().format('Do')
    else if (text.includes('date'))
        return moment().format('MMM DO YYYY')
    else if (text.includes('google link'))
        return moment().format('https://www.goole.com')
    else if (text.includes('year'))
        return moment().format('yyyy')
    else if (text.includes('Thankyou'))
        return ('Thanks for contect me')
    return "I can't get you."
}










