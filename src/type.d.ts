type AuthContext = {}

type ToDo = {
    id: number;
    content: string;
    date: string;
    done: boolean;
}

type FormProps = {
    list: Array<ToDo>
    setList: React.Dispatch<React.SetStateAction<Array<ToDo>>>
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
    handleChangeDone: (id: number) => void;
}