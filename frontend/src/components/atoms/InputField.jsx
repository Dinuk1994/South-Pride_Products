/* eslint-disable react/prop-types */

const InputField = ({ image, placeholder, type, value, className}) => {
    return (
        <div>
            <label className="input input-bordered  flex items-center gap-2 mobile:w-72">
                <input type={type} className={className} value={value} placeholder={placeholder} />
                {image}
            </label>
        </div>
    )
}

export default InputField