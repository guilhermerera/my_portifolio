import StyledTooltip from "./Tooltip.style";

export default function Tooltip({ open, children }) {
	return <StyledTooltip className={open}>{children}</StyledTooltip>;
}
