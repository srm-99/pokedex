import { useState } from "react";

// Types
import { ToolbarStateType } from "../types";

const useToolBar = () => {
    const [toolbar, setToolbar] = useState<ToolbarStateType>({
        search: "",
        limit: 10,
        offset: 0,
        sort: "ascById",
    });

    const onChange = <T extends keyof ToolbarStateType>(
        target: T,
        value: ToolbarStateType[T]
    ) => {
        setToolbar((prev) => ({ ...prev, [target]: value }));
    };

    return { data: toolbar, onChange };
};

export default useToolBar;
