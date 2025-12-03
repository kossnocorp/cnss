import { type Cnss } from "./types.js";

export type { Cnss };

export const cnss: Cnss.Factory;

export namespace cnss {
  export type Props<
    Renderer extends Cnss.Renderer<any> | Cnss.GroupRenderer<any>
  > = Cnss.InferProps<Renderer>;
}
