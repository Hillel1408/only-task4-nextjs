import { IOptions } from "../types/types";

interface RadioProps {
    value: string;
    name: string;
    text: string;
    options: IOptions;
    onChange: any
}

function Radio({ value, name, text, options, onChange }: RadioProps) {
    return (
        <label>
            <input
                type="radio"
                value={value}
                name={name}
                checked={
                    options.sort === value || options.filter.name === value
                }
                onChange={(e: any) => onChange(e.target.value)}
            />
            {text}
        </label>
    );
}

export { Radio };
