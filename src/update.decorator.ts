import {Body, Type} from '@nestjs/common';
import {Complete} from "./complete.type";
import {Context} from "./context";

export const Update = (
    dto: Complete<Type<Context>>,
) => {
    return Body()
};
