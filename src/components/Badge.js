import StyledBadge from "./styles/Badge.styled"
import { AiFillHtml5, AiFillGithub, AiOutlineConsoleSql } from "react-icons/ai"
import { DiCss3, DiJavascript1, DiVisualstudio, DiReact, DiNpm } from "react-icons/di"
import { FiFigma } from "react-icons/fi"
import { SiNetlify, SiFirebase } from "react-icons/si"
import { FaNode } from "react-icons/fa"

const Badge = function ({ tech }) {
    const size = '45px';
    if (tech === 'html')
        return (
            <StyledBadge>
                <AiFillHtml5 size={size} />
                <p>HTML5</p>
            </StyledBadge>
        )
    else if (tech === 'css')
    return (
        <StyledBadge>
            <DiCss3 size={size} />
            <p>CSS3</p>
        </StyledBadge>
    )
    else if (tech === 'javascript')
    return (
        <StyledBadge>
            <DiJavascript1 size={size} />
            <p>Javascript</p>
        </StyledBadge>
    )
    else if (tech === 'github')
    return (
        <StyledBadge>
            <AiFillGithub size={size} />
            <p>Git & GitHub</p>
        </StyledBadge>
    )
    else if (tech === 'netlify')
    return (
        <StyledBadge>
            <SiNetlify size={size} />
            <p>Netlify</p>
        </StyledBadge>
    )
    else if (tech === 'vscode')
    return (
        <StyledBadge>
            <DiVisualstudio size={size} />
            <p>VS Code</p>
        </StyledBadge>
    )
    else if (tech === 'react')
    return (
        <StyledBadge>
            <DiReact size={size} />
            <p>React</p>
        </StyledBadge>
    )
    else if (tech === 'npm')
    return (
        <StyledBadge>
            <DiNpm size={size} />
            <p>NPM</p>
        </StyledBadge>
    )
    else if (tech === 'firebase')
    return (
        <StyledBadge>
            <SiFirebase size={size} />
            <p>Firebase</p>
        </StyledBadge>
    )
    else if (tech === 'node')
    return (
        <StyledBadge>
            <FaNode size={size} />
            <p>Node</p>
        </StyledBadge>
    )
    else if (tech === 'sql')
    return (
        <StyledBadge>
            <AiOutlineConsoleSql size={size} />
            <p>SQL</p>
        </StyledBadge>
    )
    else if (tech === 'figma')
    return (
        <StyledBadge>
            <FiFigma size={size} />
            <p>Figma</p>
        </StyledBadge>
    )
    else return '';
}

export default Badge