import {Collection} from "@mikro-orm/core";

namespace Contracts {
    export interface Pagination<Model extends {}> {
        data: Model[],
        next: string | null;
    }
}

export default Contracts;