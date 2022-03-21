import StyledSpinLoader from "./styles/SpinLoader.styled"
// Source: https://tobiasahlin.com/spinkit/

const SpinLoader = function() {
return(
        <StyledSpinLoader>
            <div class="spinner">
                <div class="rect1"></div>
                <div class="rect2"></div>
                <div class="rect3"></div>
                <div class="rect4"></div>
            </div>
        </StyledSpinLoader>
    )
}

export default SpinLoader