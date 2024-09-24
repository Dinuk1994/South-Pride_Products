/* eslint-disable react/prop-types */

const InputField = ({ image, placeholder, type, value, className,onChange,name}) => {
    return (
        <div>
            <label className="input input-bordered  flex items-center gap-2 mobile:w-72">
                <input name={name} type={type} className={className} value={value} placeholder={placeholder} onChange={onChange} />
                {image}
            </label>
        </div>
    )
}

export default InputField