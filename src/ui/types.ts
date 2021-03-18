import React from 'react';

export type ToDo = {
    id: string;
    content: string;
    date: string;
    done: boolean;
}

export type ShowFilter = {
    done: boolean;
    onProgress: boolean;
}

export type FilterProps = {
    show: ShowFilter;
    setShow: React.Dispatch<React.SetStateAction<ShowFilter>>;
    handleClear: () => void;
}

export type DisplayProps = {
    item: ToDo;
    handleChangeDone: (id: string) => void;
}