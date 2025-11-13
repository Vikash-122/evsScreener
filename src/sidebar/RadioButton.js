export default function RadioButton({options, labelName}){
    return (
        <div>
        {options.map(
            (item, index) => (
              <label key={index} className="radio-label">
                <input type="radio" name={labelName} value={item} />
                <span>{item}</span>
              </label>
            )
        )}
        </div>
    )
}