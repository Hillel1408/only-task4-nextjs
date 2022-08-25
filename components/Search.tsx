import { Radio } from './Radio';
import { useState } from 'react';
import { IOptions } from "../types/types";
import classNames from 'classnames';

import classes from '../styles/search.module.scss';

interface SearchProps {
    options: IOptions;
    setOptions: any
}

function Search({ options, setOptions }: SearchProps) {
    const [value, setValue] = useState('');

    const handleKey = (e: any) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        setOptions({
            ...options,
            filter: {
                ...options.filter,
                value: value,
            },
        });
    };

    return (
        <div>
            <div className={classes.searchBlock}>
                <input
                    className={classes.search}
                    placeholder="Поиск"
                    type="text"
                    name="search"
                    value={value}
                    onChange={(e: any) => setValue(e.target.value)}
                    onKeyDown={handleKey}
                />
                <button
                    className={classNames('btn', classes.btnSearch)}
                    onClick={handleSubmit}
                >
                    Поиск
                </button>
            </div>
            <div className={classes.inputBlock}>
                <span>Поиск</span>
                <Radio
                    options={options}
                    value="description"
                    name="filter"
                    text="По описанию"
                    onChange={(e: Event) =>
                        setOptions({
                            ...options,
                            filter: {
                                ...options.filter,
                                name: e,
                            },
                        })
                    }
                />
                <Radio
                    options={options}
                    value="title"
                    name="filter"
                    text="По заголовку"
                    onChange={(e: Event) =>
                        setOptions({
                            ...options,
                            filter: {
                                ...options.filter,
                                name: e,
                            },
                        })
                    }
                />
            </div>
            <div className={classes.inputBlock}>
                <span>Сортировка</span>
                <Radio
                    options={options}
                    value="ASC"
                    name="sort"
                    text="По возрастанию ID"
                    onChange={(e: Event) => setOptions({ ...options, sort: e })}
                />
                <Radio
                    options={options}
                    value="DESC"
                    name="sort"
                    text="По убыванию ID"
                    onChange={(e: Event) => setOptions({ ...options, sort: e })}
                />
            </div>
        </div>
    );
}

export { Search };
