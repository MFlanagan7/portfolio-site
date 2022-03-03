import StyledBadge from "./styles/Badge.styled"
import { AiFillHtml5, AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai"
import { DiCss3, DiJavascript1, DiVisualstudio, DiReact, DiNpm } from "react-icons/di"
import { SiNetlify, SiFirebase } from "react-icons/si"
import { FaNode } from "react-icons/fa"

const Badge = function ({ tech }) {
    if (tech === 'html')
        return (
            <StyledBadge>
                <AiFillHtml5 size="50px" />
                <p>HTML5</p>
            </StyledBadge>
        )
    else if (tech === 'css')
    return (
        <StyledBadge>
            <DiCss3 size="50px" />
            <p>CSS3</p>
        </StyledBadge>
    )
    else if (tech === 'javascript')
    return (
        <StyledBadge>
            <DiJavascript1 size="50px" />
            <p>Javascript</p>
        </StyledBadge>
    )
    else if (tech === 'github')
    return (
        <StyledBadge>
            <AiFillGithub size="50px" />
            <p>Git & GitHub</p>
        </StyledBadge>
    )
    else if (tech === 'netlify')
    return (
        <StyledBadge>
            <SiNetlify size="50px" />
            <p>Netlify</p>
        </StyledBadge>
    )
    else if (tech === 'vscode')
    return (
        <StyledBadge>
            <DiVisualstudio size="50px" />
            <p>VS Code</p>
        </StyledBadge>
    )
    else if (tech === 'react')
    return (
        <StyledBadge>
            <DiReact size="50px" />
            <p>React</p>
        </StyledBadge>
    )
    else if (tech === 'npm')
    return (
        <StyledBadge>
            <DiNpm size="50px" />
            <p>NPM</p>
        </StyledBadge>
    )
    else if (tech === 'firebase')
    return (
        <StyledBadge>
            <SiFirebase size="50px" />
            <p>Firebase</p>
        </StyledBadge>
    )
    else if (tech === 'node')
    return (
        <StyledBadge>
            <FaNode size="50px" />
            <p>Node</p>
        </StyledBadge>
    )
    else if (tech === 'sql')
    return (
        <StyledBadge>
            <AiOutlineConsoleSql size="50px" />
            <p>SQL</p>
        </StyledBadge>
    )
    else return '';
}

export default Badge