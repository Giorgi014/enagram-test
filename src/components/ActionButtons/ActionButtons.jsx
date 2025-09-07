import {clsx} from 'clsx'
import "./ActionButtons.scss"

export const Button = ({variant = "default", children, ...props }) => {
  return (
    <button
    {...props}
    className={clsx(
        "default",
        {
            "create_btn": variant === "create_new",
            "comparison_btn": variant === "comparison"
        }
    )}
    >
        {children}
    </button>
  )
}