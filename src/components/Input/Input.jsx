import './input.scss'

const Input = ({id, type, placeholder}) => (
    <div className='input__wrap'>
        <label htmlFor={id} className='input__label'>
            {id}*
        </label>
        <input
            type={type}
            placeholder={placeholder}
            id={id}
            className='input__field'
        />
    </div>
)

export default Input
