type AuthContext = {}

type ToDo = {
    id: string;
    content: string;
    date: string;
    done: boolean;
}

type ShowFilter = {
    done: boolean;
    onProgress: boolean;
}

type FilterProps = {
    show: ShowFilter;
    setShow: React.Dispatch<React.SetStateAction<ShowFilter>>;
    handleClear: () => void;
}

type DisplayProps = {
    item: ToDo;
    handleChangeDone: (id: string) => void;
}