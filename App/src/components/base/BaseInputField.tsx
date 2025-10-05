/**
 * Base interface with InputHtmlAttributes
 */
interface IBaseInputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    fieldRef:React.RefObject<HTMLInputElement | null>
    label:(string | null)

    //non required.
    required?:boolean
    type?:string
}

/**
 * Base input field => reusable fieldset for global style logic.
 */
const BaseInputField:React.FC<IBaseInputFieldProps> = (props) => {
    const {fieldRef, label, required = true, type="text", ...rest} = props;
    const itemAttr:string = label?.toString() ?? "base-input";

    return(
        <fieldset className="flex flex-col gap-1">
            {label != null && (
                <label htmlFor={itemAttr} className="text-[var(--text)]/75 font-medium !pl-[2px] text-sm">{label}</label>
            )}
            <input id={itemAttr} ref={fieldRef} required={required} {...rest} type={type} className="w-full bg-[var(--bg-secondary)] text-[var(--text)] rounded-md !py-2 !px-3 outline-none border border-white/25 placeholder:text-[var(--text)]/25"></input>
        </fieldset>
    )
}

export default BaseInputField;