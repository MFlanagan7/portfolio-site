export const email = 'MichaelFlanagan@MichaelFlanagan.dev'
export const linkedIn = 'https://www.linkedin.com/in/michael-flanagan/'
export const gitHub = 'https://github.com/MFlanagan7'

export const copyEmail = () => {
    alert('hello')
    let tempElement = document.createElement('input')
    document.body.appendChild(tempElement)
    tempElement.setAttribute('value', email)
    tempElement.select()
    document.execCommand('copy')
    document.body.removeChild(tempElement)
}