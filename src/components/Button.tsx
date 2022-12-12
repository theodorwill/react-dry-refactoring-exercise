import { StyledButton } from './styles/Button.styles';

interface Props {
    bg?: string;
    color?: string;
    children?: string;
};

const Button = (props: Props) => {
    return(
        <StyledButton bg={props.bg} color={props.color}>
        {props.children}
        </StyledButton>
    )
}

export default Button;