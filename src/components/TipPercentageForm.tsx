
type TipPercentageFormProps = {
  setTip: React.Dispatch<React.SetStateAction<number>>,
  tip: number
}

const tipOptions = [
  {
    id: 'tip-10',
    value: .10,
    label: '10%'
  },
  {
    id: 'tip-20',
    value: .20,
    label: '20%'
  },
  {
    id: 'tip-50',
    value: .50,
    label: '50%'
  },
]

const TipPercentageForm = ({ setTip, tip }: TipPercentageFormProps) => {

  return (
    <div>
      <h3 className="font-black text-2xl">
        Tip:
      </h3>

      <form>
        {
          tipOptions.map(tipOption => {
            return <div
              key={tipOption.id}
              className="flex gap-2">
              <input
                id={tipOption.id}
                type="radio"
                name="tip"
                value={tipOption.value}
                onChange={e => setTip(Number(e.target.value))} checked={tipOption.value === tip}></input>
              <label htmlFor={tipOption.id}>{tipOption.label}</label>
            </div>
          })
        }
      </form>
    </div>
  )
}

export default TipPercentageForm