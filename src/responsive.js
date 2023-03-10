import {css} from "styled-components"

export const mobile = (props) =>{

    return css`
        @media only screen and (max-width: 380px){
            ${props}
        }
    `
}

export const tablet = (props) =>{

    return css`
        @media only screen and (max-width: 768px){
            ${props}
        }
    `
}

export const desktop = (props) =>{

    return css`
        @media only screen and (max-width: 992px){
            ${props}
        }
    `
}
export const huge = (props) =>{

    return css`
        @media only screen and (max-width: 1280px){
            ${props}
        }
    `
}