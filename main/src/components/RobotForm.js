import { useState } from 'react'

function RobotForm (props) {
    const { onAdd } = props
    const [name, setName] = useState('')
    const [mass, setMass] = useState('')
    const [type, setType] = useState('')

    const add = (evt) => {
        onAdd({
            name,
            type,
            mass
        })
        setName('')
        setType('')
        setMass('')
    }

    return (
        <div>
            <div>
                <input type='text' placeholder='Name' value={name} onChange={(evt) => setName(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Type' value={type} onChange={(evt) => setType(evt.target.value)} />
            </div>
            <div>
                <input type='text' placeholder='Mass' value={mass} onChange={(evt) => setMass(evt.target.value)} />
            </div>
            <div>
                <input type='button' value='add me!' onClick={add} />
            </div>
        </div>
    )
}

export default RobotForm